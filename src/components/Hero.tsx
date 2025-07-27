
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-blue-400 text-sm font-medium mb-6 animate-glow">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-float">Building</span> advance
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-float"> AI Chatbots </span>
            for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-float">Startups</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with intelligent automation, AI-powered chatbots, and seamless workflow solutions designed for the modern enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
  size="lg"
  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold group animate-glow"
  onClick={() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Start Free Trial
  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open("/chatbot-demos", "_blank")}
              className="border-2 border-slate-600 px-8 py-4 text-lg font-semibold hover:bg-slate-800 group text-white hover:text-white"
            >  
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
