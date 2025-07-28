
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Workflow, Volume2, Pause, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const WorkflowDemos = () => {
  const [playingMedia, setPlayingMedia] = useState<string | null>(null);

  const demos = [
    {
      id: "inbound-calls",
      title: "Inbound Call Automation",
      description: "Intelligent call routing and manages incoming calls, provides information, and routes callers to appropriate departments or agents with natural voice interactions.",
      features: [
        "Smart call routing & distribution",
        "On-call actions like appointment booking and provide Personal info",
        "Seamless human handover when needed",
        "Integration with CRM systems",
        "Lead qualification & caller intent detection",
        "24/7 multilingual voice support" ,
        {label: "demo link", url: "https://files.catbox.moe/sb148c.mp4"}
    ],
      mediaType: "audio" as const,
      mediaUrl: "https://files.catbox.moe/sb148c.mp4",
      mediaDescription: "🎵 Inbound call automation demo - AI Agent schedule the appointent in the hospital"
    },
    {
      id: "document-processing",
      title: "Email Compaigning ",
      description: "Send personalized email campaigns to high quality leads on mass level , track engagement metrics , real-time email dashboard updation ",
      features: [
        "Send Persioalise Email on mass level with follow-up",
        "Track engagement metrics(open , reply , bounce , conversion rates)",
        "Real -time email dashboard updation",
        "Extact high quality leads",
        "Autoreply to customer queries on email",
        {label: "demo link", url: "https://files.catbox.moe/er1z4v.mp4"}
      ],
      mediaType: "video" as const,
      mediaUrl: "https://files.catbox.moe/er1z4v.mp4",
      mediaDescription: "Document processing workflow demonstration"
    },
    {
      id: "customer-onboarding",
      title: "Instagram and WhataApp Automation",
      description: "Automatically responce to customer queries on Instagram and WhatsApp, send personalized messages, and manage customer interactions seamlessly.",
      features: [
        "Automated response to customer queries through out knowledge base",
        "Perform task like Apppointment scheduling , order tracking, and more",
        "Persioanlise consultation throigh chat and voice",
        "Multi-language Support",
        "Integration with CRM systems",
        "Lead Qualification and deep Sales Analysis",
        {label: "demo link", url: "https://files.catbox.moe/c0c287.mp4"}
      ],
      mediaType: "video" as const,
      mediaUrl: "https://files.catbox.moe/deu0q8.mp4",  
      mediaDescription: "Customer onboarding automation workflow"
    },
  ];

  const toggleMedia = (demoId: string) => {
    if (playingMedia === demoId) {
      setPlayingMedia(null);
    } else {
      setPlayingMedia(demoId);
      // Simulate media stopping after 5 seconds for demo
      setTimeout(() => setPlayingMedia(null), 770000);
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
  <Button 
    variant="ghost"
    className="bg-transparent hover:bg-transparent hover:text-blue-400 border border-gray-600 text-blue-400 rounded-full text-sm hover:border-blue-400 transition-colors duration-200"
  >
    <ArrowLeft className="mr-2 w-4 h-4 text-blue-400" />
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
              <Workflow className="inline-block mr-4 w-12 h-12 text-blue-400" />
              Workflow <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our intelligent workflow automation solutions streamline business processes, reduce manual work, and increase operational efficiency.
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
                        <Workflow className="mr-3 w-8 h-8 text-blue-400" />
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
                          onClick={() => toggleMedia(demo.id)}
                        >
                          {playingMedia === demo.id ? (
                            <>
                              <Pause className="mr-2 w-4 h-4" />
                              Stop {demo.mediaType === 'audio' ? 'Audio' : 'Video'}
                            </>
                          ) : (
                            <>
                              {demo.mediaType === 'audio' ? (
                                <Volume2 className="mr-2 w-4 h-4" />
                              ) : (
                                <Video className="mr-2 w-4 h-4" />
                              )}
                              {demo.mediaType === 'audio' ? 'Audio Demo' : 'Video Demo'}
                            </>
                          )}
                        </Button>
                      </div>

                      {playingMedia === demo.id && (
                        <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <p className="text-gray-300 text-sm italic">
                              {demo.mediaType === 'audio' ? '🎵' : '🎬'} {demo.mediaDescription}
                            </p>
                            {demo.mediaType === 'audio' && (
                              <audio src={demo.mediaUrl} autoPlay />
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="h-full bg-gray-700 rounded-lg overflow-hidden m-8 border border-gray-600">
                      {demo.mediaType === 'video' ? (
                        <video 
                          src={demo.mediaUrl}
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center">
                          <div className="bg-gray-600 rounded-lg p-6 mb-4">
                            <Volume2 className="w-16 h-16 text-blue-400" />
                          </div>
                          <p className="text-gray-300 text-lg font-medium mb-2">{demo.title}</p>
                          <p className="text-gray-400 text-sm text-center px-8">
                            Audio demonstration of automated call processing
                          </p>
                        </div>
                      )}
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

export default WorkflowDemos;
