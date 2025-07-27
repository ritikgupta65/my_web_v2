import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, Volume2, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const ChatbotDemos = () => {
const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  
  const demos = [
    {
      id: "fashion",
      title: "Fashion Stylist Bot",
      description: "Personal style advisor that understands fashion trends, provides styling tips, suggests outfit combinations, and helps customers make informed fashion choices.",
      features: [
        "Smart Outfit suggestions through Cards",
       "Order tracking & updates",
       "Live Call support",
      "Lead generation and deep Sales Analysis",
      "Image upload suggestions",
       {label: "demo link", url: "https://files.catbox.moe/v9s3oo.mp4"}
      ],
      videoUrl: "https://files.catbox.moe/v9s3oo.mp4",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      // audioDescription: "Fashion voicebot demo - providing style advice and outfit recommendations"
    } ,
    {
      id: "Beauty",
      title: "Skincare Beauty Chatbot",
      description: "AI-powered beauty assistant for D2C skincare and cosmetics brands. Handles personalized product recommendations, skin type quizzes, routine building, and provides instant beauty advice to customers 24/7,",
      features: [
        "Personalized Product Recommendations",
        "Skin Quiz & Routine Builde",
        "24/7 Query Handling through Chat and voice",
        "Analytics & Insights Dashboard",
        {label: "demo link", url: "https://files.catbox.moe/we5bvg.mp4"}
      ],
      videoUrl: "https://files.catbox.moe/we5bvg.mp4",
      // audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      // audioDescription: "Healthcare voicebot demo - natural conversation about symptoms and appointment booking"
    },
    {
      id: "ecommerce",
      title: "E-commerce Shopping Assistant",
      description: "Smart shopping companion that helps customers find products, track orders, handle returns, and provide personalized recommendations based on browsing history and preferences.",
      features: [
        "Product recommendation engine",
        "Order tracking & updates",
        "Return & refund processing",
        "Live Call support",
        "Personalized shopping experience" ,
        "Lead generation and deep Sales Analysis" ,
        {label: "demo link", url: "https://files.catbox.moe/c0c287.mp4"}
      ],
      videoUrl: "https://files.catbox.moe/c0c287.mp4",
      audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      // audioDescription: "E-commerce voicebot demo - helping customers find products and complete purchases"
    }
  ];

  const toggleAudio = (demoId: string) => {
    if (playingAudio === demoId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(demoId);
      // Simulate audio stopping after 5 seconds for demo
      setTimeout(() => setPlayingAudio(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="autosite_logo.webp" 
                alt="Autosite Logo" 
                className="w-10 h-10 brightness-0 invert filter" 
              />
              <span className="text-2xl font-bold text-white">Autosite</span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <Bot className="inline-block mr-4 w-12 h-12 text-blue-400" />
              Chatbot <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Demos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI-powered chatbots and voicebots in action across different industries. Each demo showcases real-world applications and capabilities.
            </p>
          </div>

          <div className="space-y-12">
            {demos.map((demo, index) => (
              <Card 
                key={demo.id}
                className="border-gray-600 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800/90 transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl text-white mb-4 flex items-center">
                        <Bot className="mr-3 w-8 h-8 text-blue-400" />
                        {demo.title}
                      </CardTitle>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {demo.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>


                       
                       <ul className="space-y-2">
  {demo.features.map((feature, idx) => (
    <li key={idx} className="flex items-center text-gray-300">
      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
      {typeof feature === "string" ? (
        feature
      ) : (
        <a
          href={feature.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          [{feature.label}]
        </a>
      )}
    </li>
  ))}
</ul>




                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          variant="outline" 
                          className="border-gray-600 text-white hover:bg-gray-700 flex-1"
                          onClick={() => toggleAudio(demo.id)}
                        >
                          {playingAudio === demo.id ? (
                            <>
                              <Pause className="mr-2 w-4 h-4" />
                              Stop Voice Demo
                            </>
                          ) : (
                            <>
                              <Volume2 className="mr-2 w-4 h-4" />
                              Voice Demo
                            </>
                          )}
                        </Button>
                      </div>

                      {playingAudio === demo.id && (
                        <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <p className="text-gray-300 text-sm italic">
                              {/* 🎵 {demo.audioDescription} */}
                            </p>
                            <audio src={demo.audioUrl} autoPlay />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="h-full bg-gray-700 rounded-lg overflow-hidden m-8 border border-gray-600">
                      <video 
                        src={demo.videoUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotDemos;
