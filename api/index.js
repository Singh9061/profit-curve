// Vercel serverless function adapter for TanStack Start
// This wraps the Web Fetch API handler (dist/server/server.js) in a
// Node.js-compatible Vercel function.
import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = new URL(req.url, `${protocol}://${host}`);

  // Build a standard Request object from the Vercel (Node.js) request
  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body:
      req.method !== "GET" && req.method !== "HEAD"
        ? await readBody(req)
        : undefined,
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}
