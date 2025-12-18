import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client
// Uses service role key for admin operations
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("❌ Supabase configuration missing!");
    console.error("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✓ Set" : "✗ Missing");
    console.error("SUPABASE_SERVICE_ROLE_KEY:", supabaseServiceKey ? "✓ Set" : "✗ Missing");
    throw new Error(
      "Supabase environment variables not configured. Please add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to your environment."
    );
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

