import { AuthOtpScreen } from "@/components/screens/AuthOtpScreen";

/* Figma V2 — Forgot Registration Number · sent-OTP (OTP entry). light 1:14110 · dark 1:14163. frame 376×812. */
export default function ForgotRegistrationNumberOtpPage() {
  return <AuthOtpScreen variant="forgot-reg-number" nextHref="/forgot-registration-number/done" />;
}
