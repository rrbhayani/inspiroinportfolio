import { HeroAuth } from "@/components/sections/HeroAuth";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WorkforceSection } from "@/components/sections/WorkforceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BgShift } from "@/components/anim/BgShift";

// Subtle canvas-color shifts between transparent-background sections.
const bgSteps = [
  { selector: '[aria-label="Our solutions"]', color: "#f7f9ff" },
  { selector: '[aria-label="Workforce solutions"]', color: "#f5f2fd" },
  { selector: '[aria-label="Industries we serve"]', color: "#eef9f6" },
  { selector: '[aria-label="Tools we use"]', color: "#eef5ff" },
];

export default function HomePage() {
  return (
    <>
      <BgShift steps={bgSteps} />
      <HeroAuth />
      <SolutionsSection />
      <ProductsSection />
      <WorkforceSection />
      <ServicesSection />
      <ApproachSection />
      <IndustriesSection />
      <ClientsSection />
      <ToolsSection />
      <PartnershipSection />
      <FinalCTA />
    </>
  );
}
