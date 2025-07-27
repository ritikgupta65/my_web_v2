
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
