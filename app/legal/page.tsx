import { LegalLayout } from "@/components/legal-layout";

export default function LegalPage() {
  return (
    <LegalLayout title="Legal">
      <p>
        NIVO is an independent project and is not affiliated with or endorsed by Robinhood or
        Solana.
      </p>
      <p>
        All token launches involve risk. Information displayed by NIVO is intended to improve
        transparency and does not constitute financial advice or a guarantee of value or
        performance.
      </p>
      <p>
        This website is a Coming Soon / pre-launch experience. Product interfaces shown here are
        simulated previews and do not deploy tokens, connect wallets, or verify legal identity.
      </p>
    </LegalLayout>
  );
}
