import { LegalLayout } from "@/components/legal-layout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy">
      <p>
        This Coming Soon website collects only the information you choose to submit through the
        waitlist form on your device. The current waitlist is simulated and is not connected to a
        production backend.
      </p>
      <p>
        When NIVO launches, a full privacy policy will describe how creator profiles, social
        connections, and public token information are stored and displayed.
      </p>
      <p>Do not submit sensitive personal information through this pre-launch site.</p>
    </LegalLayout>
  );
}
