import { ChainSection } from "@/components/chain-section";
import { CommunitySection } from "@/components/community-section";
import { CreatorHistory } from "@/components/creator-history";
import { CreatorProfile } from "@/components/creator-profile";
import { DiscoveryPreview } from "@/components/discovery-preview";
import { FAQ } from "@/components/faq";
import { FeatureGrid } from "@/components/feature-grid";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { OfficialToken } from "@/components/official-token";
import { LaunchTimeline } from "@/components/launch-timeline";
import { PhilosophySection } from "@/components/philosophy-section";
import { ProblemSection } from "@/components/problem-section";
import { PromiseSection } from "@/components/promise-section";
import { Roadmap } from "@/components/roadmap";
import { SafetySection } from "@/components/safety-section";
import { ThreeStepExperience } from "@/components/three-step-experience";
import { TokenPreview } from "@/components/token-preview";
import { TokenStory } from "@/components/token-story";
import { TransparencyGrid } from "@/components/transparency-grid";
import { Waitlist } from "@/components/waitlist";

export default function Home() {
  return (
    <>
      <main id="content">
        <Hero />
        <OfficialToken />
        <ProblemSection />
        <PhilosophySection />
        <ThreeStepExperience />
        <TokenStory />
        <CreatorProfile />
        <TokenPreview />
        <TransparencyGrid />
        <ChainSection />
        <LaunchTimeline />
        <SafetySection />
        <CreatorHistory />
        <DiscoveryPreview />
        <FeatureGrid />
        <PromiseSection />
        <Roadmap />
        <CommunitySection />
        <Waitlist />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
