import AboutComponent from "@/components/AboutComponent";
import CatalogueSection from "@/components/CatalogueSection";
import CategorySwiper from "@/components/CategorySwiper";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
      <CategorySwiper />
      <ContactSection />
    </div>
  );
}
