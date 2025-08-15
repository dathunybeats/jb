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
                <span className="text-foreground font-medium">218-686-6992</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <span className="text-foreground font-medium">CONTACT@DIAMONDEDGEDETAILING.COM</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <MessageCircle className="w-6 h-6 text-primary mr-4" />
                <span className="text-foreground font-medium">ONLINE BOOKING</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <span className="text-foreground font-medium">GRAND FORKS, ND</span>
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
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Interior Detail - $150-$250</h4>
                    <p className="text-sm text-muted-foreground">Seats deep cleaned, floors vacuumed, dashboard and console deep cleaned and dressed, doors cleaned and dressed, windows cleaned, trunk vacuumed, air vents and cup holders brushed and cleaned like new!</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Exterior Detail - $75-$100</h4>
                    <p className="text-sm text-muted-foreground">We perform a rinse, prewash, followed by another rinse, then a shampoo and hand wash. This is then finished by drying the vehicle and applying ceramic spray.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Full Detail - $200-$300</h4>
                    <p className="text-sm text-muted-foreground">Complete interior and exterior detailing package for the ultimate vehicle transformation.</p>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-foreground">Starting From:</span>
                    <span className="text-3xl font-bold text-primary">$75</span>
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