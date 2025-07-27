
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Suyash Ranjan",
      role: "Founder",
      company: "Mercato Agency",
      content: "Autosite's AI chatbots have revolutionized our customer service. We've seen a 40% reduction in response time and 95% customer satisfaction rate.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Beares",
      role: "Founder & CEO",
      company: "Clutch.co",
      content: "The workflow automation has streamlined our processes incredibly. What used to take hours now happens in minutes with their intelligent systems.",
      rating: 4,
      avatar: "MC"
    },
    {
      name: "Puneet Anil Sehgal",
      role: "Co-Founder",
      company: "Freakins",
      content: "Their fashion industry chatbot understands our customers' needs perfectly. Sales conversions have increased by 40% since implementation.",
      rating: 3,
      avatar: "ER"
    },
    // {
    //   name: "David Thompson",
    //   role: "Hospital Administrator",
    //   company: "Metro General Hospital",
    //   content: "The healthcare voicebot has transformed patient interactions. It handles appointment scheduling and basic queries flawlessly, freeing up our staff.",
    //   rating: 4,
    //   avatar: "DT"
    // },
    {
      name: "Tanmay Kumar",
      role: "CEO",
      company: "sellular",
      content: "Awesome AI solutions! The integration was seamless and the results are good. Highly recommend Autosite for any startup.",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "Kushagra Swami",
      role: "Founder",
      company: "Identityforgestidio",
      content: "The Email automation system has optimized our communication workflows.Automatic Emailing with follow-up is now 70% more efficient.",
      rating: 4,
      avatar: "JW"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">What  </span>
             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients </span>Say
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trusted by leading companies worldwide. See how our AI solutions have transformed their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-slate-700 hover:border-blue-500 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900 relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-blue-400" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-300">{testimonial.role}</p>
                    <p className="text-sm text-blue-400 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
