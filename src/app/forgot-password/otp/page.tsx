import { AuthOtpScreen } from "@/components/screens/AuthOtpScreen";

/* Figma V2 — Forgot Password · sent-OTP (OTP entry). light 1:12705 · dark 1:12757. frame 376×812. */
export default function ForgotPasswordOtpPage() {
  return <AuthOtpScreen title="Forgot Password" nextHref="/forgot-password/set-password" />;
}
