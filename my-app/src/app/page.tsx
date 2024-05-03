import AboutComponent from "@/components/AboutComponent";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
    </div>
  );
}