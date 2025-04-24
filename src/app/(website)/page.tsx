import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTASection from "./components/FinalCTASection";

export default function HomePage() {
  return (
    <div className="bg-gray-50 mx-auto">
      <HeroSection />
      <HowItWorksSection />
      <FaqSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}
