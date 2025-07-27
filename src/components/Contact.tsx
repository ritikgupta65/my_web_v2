"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MessageSquare, Calendar, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

declare global {
  interface Window {
    Calendly: any;
  }
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Replace this with your actual deployed Google Apps Script URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbzVIWqt2fBViiwaMdjhgO3MMs2IL7Ka9JFkUYjdhytzzDGTIxnbZYLylLU8DRmeI4mKCw/exec"; // UPDATE THIS WITH YOUR NEW DEPLOYMENT URL

    try {
      const formDataToSend = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.append("timestamp", new Date().toISOString());

      // For debugging: Log what you're sending
      console.log("Sending form data:", Object.fromEntries(formDataToSend));

      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // Required to make browser allow the call
      });

      // NOTE: You cannot access response in no-cors mode, just assume success
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });

      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-700 border border-gray-600 rounded-full text-blue-400 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies already using our AI solutions. Get started with a free consultation and see the difference automation can make.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-600 bg-gray-700/80 backdrop-blur-sm hover:bg-gray-700/90 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center">
                  <Send className="mr-3 w-8 h-8 text-blue-400" />
                  Get Started Today
                </CardTitle>
                <p className="text-gray-300 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <FormField
                        control={form.control}
                        name="firstName"
                        rules={{ required: "First name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</FormLabel>
                            <FormControl>
                              <Input
                                id="firstName"
                                name="firstName"
                                autoComplete="given-name"
                                placeholder="John"
                                {...field}
                                className="border-gray-500 bg-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* Last Name */}
                      <FormField
                        control={form.control}
                        name="lastName"
                        rules={{ required: "Last name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</FormLabel>
                            <FormControl>
                              <Input
                                id="lastName"
                                name="lastName"
                                autoComplete="family-name"
                                placeholder="Doe"
                                {...field}
                                className="border-gray-500 bg-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              name="email"
                              autoComplete="email"
                              type="email"
                              placeholder="john@company.com"
                              {...field}
                              className="border-gray-500 bg-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Number */}
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="phoneNumber" className="text-sm font-medium text-gray-300">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              id="phoneNumber"
                              name="phoneNumber"
                              autoComplete="tel"
                              placeholder="+1 123 456 7890"
                              {...field}
                              className="border-gray-500 bg-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      rules={{ required: "Message is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              name="message"
                              autoComplete="off"
                              placeholder="Tell us about your project and goals..."
                              {...field}
                              className="min-h-32 border-gray-500 bg-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-4 animate-glow"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Start Your AI Journey"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="border-gray-600 bg-gray-700/80 hover:bg-gray-700/90 transition-all duration-300 group">
              <CardContent className="p-6 flex items-start">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Email Us</h3>
                  <p className="text-gray-300 mb-1">contact@autosite.ai</p>
                  <p className="text-gray-400 text-sm">We respond within 2 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-600 bg-gray-700/80 hover:bg-gray-700/90 transition-all duration-300 group">
              <CardContent className="p-6 flex items-start">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Call Us</h3>
                  <p className="text-gray-300 mb-1">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon–Fri, 9AM–6PM EST</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer border-gray-600 bg-gray-700/80 hover:bg-gray-700/90 transition-all duration-300 group"
              onClick={() => {
                window.Calendly.initPopupWidget({ url: 'https://calendly.com/guptaritik67856/30min' });
              }}
            >
              <CardContent className="p-6 flex items-start">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Book free appointment</h3>
                  <p className="text-blue-400 hover:underline text-sm">Book your free 30 min consultation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;