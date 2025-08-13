import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Instagram, Facebook, Twitter, Linkedin, Send, Mail, User, MessageSquare } from "lucide-react";
import { useFadeIn } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting JB's Mobile Detailing. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (e.target as HTMLFormElement).querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput.value) {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      emailInput.value = "";
    }
  };


  const leftRef = useFadeIn(200);
  const rightRef = useFadeIn(400);

  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
            <div ref={leftRef} className="text-center flex flex-col justify-center h-full">
              <h3 className="text-3xl font-extrabold tracking-tight mb-6">
                GET IN TOUCH WITH<br />
                <span className="text-primary">JB'S MOBILE DETAILING!</span>
              </h3>
              
              <h4 className="text-xl font-semibold mb-4 tracking-tight">
                STAY UPDATED WITH OUR NEWSLETTER
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2 mb-8 max-w-lg mx-auto lg:max-w-xl">
                <Input 
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground h-11 rounded-md"
                  required
                />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 w-11 rounded-md">
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
            
            <div ref={rightRef}>
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-foreground tracking-tight">CONTACT INFORMATION</h4>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Mobile Service</p>
                    <p>Tuscaloosa, Alabama</p>
                    <p>United States</p>
                    <div className="border-t border-border pt-4 mt-4">
                      <p className="font-semibold text-foreground">Business Hours:</p>
                      <p>Always Open - Appointments Only</p>
                      <p>100% Recommend (16 Reviews)</p>
                      <p>Online Booking Available</p>
                    </div>
                    <div className="border-t border-border pt-4 mt-4">
                      <p className="font-semibold text-foreground">Contact:</p>
                      <p>Phone: +1 205-872-5994</p>
                      <p>Email: Jbsmobiledetail@gmail.com</p>
                      <p>Instagram: @jbsdetailingandceramics</p>
                      <p>Facebook: JB's Mobile Detailing</p>
                      <p>YouTube: jbdetails205</p>
                      <p>TikTok: @jbsmobiledetailing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;