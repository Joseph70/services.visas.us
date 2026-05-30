import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceDetailsSection from "@/components/ServiceDetailsSection";
import VisualStorySection from "@/components/VisualStorySection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollEffects from "@/components/ScrollEffects";
import { WHATSAPP_URL } from "@/components/siteConfig";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header whatsappUrl={WHATSAPP_URL} />
      <main>
        <Hero whatsappUrl={WHATSAPP_URL} />
        <TrustSection />
        <ServicesSection />
        <ServiceDetailsSection />
        <VisualStorySection />
        <ProcessSection />
        <BenefitsSection />
        <CTASection whatsappUrl={WHATSAPP_URL} />
        <FAQSection />
        <ContactSection whatsappUrl={WHATSAPP_URL} />
      </main>
      <Footer whatsappUrl={WHATSAPP_URL} />
      <WhatsAppButton whatsappUrl={WHATSAPP_URL} />
    </>
  );
}
