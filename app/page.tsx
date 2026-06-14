import { HeroAuth } from "@/components/sections/HeroAuth";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WorkPreviewSection } from "@/components/sections/WorkPreviewSection";
import { WorkforceSection } from "@/components/sections/WorkforceSection";
import { CustomWebSection } from "@/components/sections/CustomWebSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AIAutomationSection } from "@/components/sections/AIAutomationSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { BgShift } from "@/components/anim/BgShift";

const bgSteps = [
  { selector: '[aria-label="Our solutions"]', color: "#f7f9ff" },
  { selector: '[aria-label="Featured work"]', color: "#f5f2fd" },
  { selector: '[aria-label="Store management"]', color: "#eef9f6" },
  { selector: '[aria-label="AI automation"]', color: "#f5f2fd" },
  { selector: '[aria-label="Industries we serve"]', color: "#eef9f6" },
];

export default function HomePage() {
  return (
    <>
      <BgShift steps={bgSteps} />
      <HeroAuth />
      <SolutionsSection />
      <WorkPreviewSection />
      <WorkforceSection />
      <CustomWebSection />
      <AIAutomationSection />
      <ServicesSection />
      <ApproachSection />
      <IndustriesSection />
      <ClientsSection />
      <ToolsSection />
      <PartnershipSection />
    </>
  );
}
