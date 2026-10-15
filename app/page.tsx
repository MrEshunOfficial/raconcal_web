import AboutUsParent from "@/components/sections/about-us/AboutUsParent";
import CurrentProject from "@/components/sections/CurrentProject";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroParent";
import Navbar from "@/components/sections/Navbar";
import OurServices from "@/components/sections/OurServices";
import QuickContact from "@/components/sections/QuickContact";

export default function page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsParent />
        <OurServices />
        <CurrentProject />
      </main>
      <FooterSection />
      <QuickContact />
    </>
  );
}
