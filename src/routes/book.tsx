import { createFileRoute } from "@tanstack/react-router";
import { ChatBot } from "@/components/ChatBot";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book Appointment | Profit Curve AI Automation Agency" },
      { name: "description", content: "Book a free consultation with Profit Curve. Our AI assistant will help you schedule an appointment for AI automation services." },
    ],
  }),
});

function BookPage() {
  return <ChatBot />;
}
