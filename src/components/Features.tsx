
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, BarChart, Clock, Globe } from "lucide-react";
import CountUp from 'react-countup';
const Features = () => {
  const features = [
  {
    icon: Zap,
    end: 30,
    suffix: "+",
    description: "Project Delivered"
  },
  {
    icon: Users,
    end: 70,
    suffix: "+",
    description: "Happy clients"
  },
  {
    icon: BarChart,
    end: 97,
    suffix: "%",
    description: "Satisfaction Rate",
  }
];


  return (
    <section id="features" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Autosite</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the power of next-generation AI automation with features designed for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-slate-700 hover:border-blue-500 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-800"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
               <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
  <CountUp end={feature.end} duration={1.5} suffix={feature.suffix} />
</h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
