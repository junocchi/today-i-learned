import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nesxyqrltqhzbnrdljle.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3h5cXJsdHFoemJucmRsamxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNTE3NzIsImV4cCI6MjA0MTcyNzc3Mn0.CF_4KGP_nONoP7tPCeV0475Gy2oSxqn71BS3fXLIzEM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
