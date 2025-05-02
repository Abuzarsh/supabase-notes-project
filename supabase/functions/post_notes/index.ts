import "https://deno.land/std@0.168.0/dotenv/load.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7?target=deno";

serve(async (req) => 
  {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,

    { 
      global: 
      {
        
        headers: { Authorization: req.headers.get("Authorization") || "" }
      
    } }
  );
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) 
  {
    return new Response(JSON.stringify({ error: "No token" }), { status: 401 });
  }

  const userRes = await supabase.auth.getUser(token);

  return new Response(JSON.stringify(userRes), {
    headers: { "Content-Type": "application/json" },
  });
});