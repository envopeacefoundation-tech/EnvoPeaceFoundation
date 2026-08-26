import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as cn } from "./router-CnQ9fIJv.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const supabaseUrl = "https://ovlcysuefrfuvyounodh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bGN5c3VlZnJmdXZ5b3Vub2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTQ5NDEsImV4cCI6MjEwMzMzMDk0MX0.wwBftpY1DmCwgC9AAug3xee5wm_FsArAdM4mFsPkmQ8";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
async function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}
async function signOut() {
  return supabase.auth.signOut();
}
function subscribeToAuth(callback) {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });
  return () => data.subscription.unsubscribe();
}
export {
  Label as L,
  subscribeToAuth as a,
  signIn as b,
  signOut as c,
  supabase as s
};
