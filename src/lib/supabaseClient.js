import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || "";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
  process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ||
  "";

if (!supabaseUrl) {
  throw new Error(
    "Invalid SUPABASE config: NEXT_PUBLIC_SUPABASE_URL is missing or empty.\n" +
      "Set NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321 in your .env.local or .env.development.",
  );
}

if (!supabaseKey) {
  throw new Error(
    "Invalid SUPABASE config: NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY is missing.\n" +
      "Set one of those in your .env.local or .env.development.",
  );
}

const isNode = typeof process !== "undefined" && process.versions?.node;

let options = {};

if (isNode) {
  try {
    const ws = await import("ws");
    options.realtime = { transport: ws.default };
  } catch (error) {
    console.warn(
      "Warning: Supabase realtime in Node requires ws. Install ws if you want Node CLI support.",
      error,
    );
  }
}

export const supabase = createClient(supabaseUrl, supabaseKey, options);

export default supabase;
