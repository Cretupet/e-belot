import{createClient,SupabaseClient}from"@supabase/supabase-js";
const SUPABASE_URL="https://vyiwvrnlmwwrtjlhysxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY="sb_publishable_3w_c9mKz5i7qthHDChbwdA_8cBFRYyY";
let client:SupabaseClient|null=null;
export function supabase(){if(!client)client=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);return client}
