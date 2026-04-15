import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface BookingData {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
}

const SYSTEM_PROMPT = `You are ProfitBot, the AI appointment booking assistant for Profit Curve — an AI Automation Agency founded by Devesh Singh Chauhan.

Your job is to help visitors book an appointment by collecting the following information conversationally:
1. **Name** (required)
2. **Phone number** (required, Indian format preferred)
3. **Service** (required — choose from: AI Automation, Web Development, System Integration, Workflow Optimization, Data Analytics, Custom AI Solutions)
4. **Preferred date** (required — format: YYYY-MM-DD)
5. **Preferred time** (required — e.g., "10:00 AM", "3:30 PM")
6. **Message/Notes** (optional — any specific requirements)

Rules:
- Be friendly, professional, and conversational in Hindi-English mix (Hinglish)
- Ask for details one or two at a time, don't overwhelm
- When you have ALL required fields, confirm the details with the user
- After user confirms, respond with EXACTLY this JSON block at the END of your message (after your conversational text):
  <<<BOOKING_JSON>>>{"name":"...","phone":"...","service":"...","preferred_date":"YYYY-MM-DD","preferred_time":"...","email":"...","message":"..."}<<<END_BOOKING>>>
- If email or message is not provided, use null for those fields
- Always validate phone (10 digits) and date format
- If user asks about services, briefly explain what Profit Curve offers
- Keep responses concise and helpful`;

export const chatWithBot = createServerFn({ method: "POST" })
  .inputValidator((input: { messages: ChatMessage[] }) => input)
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...data.messages,
          ],
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return { content: "Thoda wait karo, bohot zyada requests aa rahi hain. Ek minute baad try karo! 🙏", booking: null };
      }
      if (response.status === 402) {
        return { content: "Abhi humara AI system busy hai. Aap seedha WhatsApp pe contact kar sakte ho: +91 80051-50056", booking: null };
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const result = await response.json();
    const content = result.choices?.[0]?.message?.content || "Sorry, kuch problem ho gayi. Please dobara try karo.";

    // Extract booking JSON if present
    let booking: BookingData | null = null;
    const bookingMatch = content.match(/<<<BOOKING_JSON>>>(.*?)<<<END_BOOKING>>>/s);
    if (bookingMatch) {
      try {
        booking = JSON.parse(bookingMatch[1]);
      } catch {
        // ignore parse error
      }
    }

    // Remove the JSON block from the display content
    const displayContent = content.replace(/<<<BOOKING_JSON>>>.*?<<<END_BOOKING>>>/s, "").trim();

    return { content: displayContent, booking };
  });

export const saveAppointment = createServerFn({ method: "POST" })
  .inputValidator((input: BookingData) => input)
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("appointments").insert({
      name: data.name!,
      phone: data.phone!,
      service: data.service!,
      preferred_date: data.preferred_date!,
      preferred_time: data.preferred_time!,
      email: data.email || null,
      message: data.message || null,
    });

    if (error) {
      throw new Error(`Failed to save appointment: ${error.message}`);
    }

    return { success: true };
  });
