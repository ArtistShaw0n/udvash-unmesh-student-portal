import { AuthSetPasswordScreen } from "@/components/screens/AuthSetPasswordScreen";

/* Figma V2 — Registration · Set Your Password. light empty 1:15496 · light filled 1:15582
 * (dark frame not yet located). frame 376×812. Renders the register variant. */
export default function RegisterSetPasswordPage() {
  return <AuthSetPasswordScreen nextHref="/register/done" variant="register" />;
}
