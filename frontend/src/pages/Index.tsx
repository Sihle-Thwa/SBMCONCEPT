import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { PricingPreview } from "@/components/home/PricingPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ValueProps />
      <PricingPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
