
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "AI-powered chatbots and voicebots for seamless customer interactions across multiple domains including healthcare, e-commerce, and fashion.",
      features: ["Multi-domain expertise", "Voice & Text support", "24/7 availability", "Smart responses"],
      link: "/chatbot-demos"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline your business processes with intelligent custom automation solutions for operational workflows.",
      features: ["Process automation","Call management", "Integration ready", "Analytics dashboard"],
      link: "/workflow-demos"
    },
    {
      icon: Users,
      title: "Customer Support AI",
      description: "Enhance customer experience with intelligent support systems that understand context and provide personalized solutions.",
      features: ["onboarding Automation", "Multi-language", "Escalation handling", "Performance metrics"],
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and enhance customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-slate-700 hover:border-blue-500 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 border-slate-600 text-white hover:text-white"
                  >
                    Discover More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
