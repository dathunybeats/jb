import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin, Check } from "lucide-react";

const ServicePackages = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold mb-4 tracking-wider uppercase border-l-4 border-primary pl-4">
              DISCOVER OUR MOBILE DETAILING
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              PREMIUM<br />
              DETAILING<br />
              <span className="text-primary">PACKAGE</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <span className="text-foreground font-medium">+1 205-872-5994</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <span className="text-foreground font-medium">JBSMOBILEDETAIL@GMAIL.COM</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <MessageCircle className="w-6 h-6 text-primary mr-4" />
                <span className="text-foreground font-medium">ONLINE BOOKING</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <span className="text-foreground font-medium">TUSCALOOSA, AL</span>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">PREMIUM</h3>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-foreground">DETAILING</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Complete Interior & Exterior Detailing",
                    "Professional Paint Correction", 
                    "Ceramic Coating Application",
                    "Paint Touch-up Services",
                    "Engine Bay Cleaning",
                    "Wheel & Tire Detailing",
                    "Glass Treatment & Protection"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-foreground">PRICE:</span>
                    <span className="text-3xl font-bold text-primary">$299</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book This Package
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;