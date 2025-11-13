import Navbar from "./components/Header/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import CTASection from "./components/Sections/CTASection/CTASection";
import FeaturesSection from "./components/Sections/FeatureSection/FeatureSection";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import PricingSection from "./components/Sections/PriceCardSection/PricingSection";
import Testimonials from "./components/Sections/TestimonialsSection/Testimonials";


function App() {
  return (
    <>
      <Navbar /> 
      
      <main>
        <HeroSection /> 
        <FeaturesSection /> 
        <PricingSection />
        <Testimonials/> 
        <CTASection />
      </main>
      
      <Footer /> 
    </>
  );
}

export default App;