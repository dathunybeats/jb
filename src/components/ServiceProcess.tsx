import { Calendar, Settings, CheckCircle, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    id: "01",
    title: "BOOK AN APPOINTMENT", 
    description: "Contact us via phone, email, or online booking to schedule your mobile detailing service. We'll work around your schedule and come to your location in Tuscaloosa.",
    icon: Calendar
  },
  {
    id: "02", 
    title: "CHOOSE YOUR SERVICE",
    description: "Select from our range of services including mobile detailing, ceramic coatings, paint correction, paint touch-up, and interior/exterior detailing packages.",
    icon: Settings
  },
  {
    id: "03",
    title: "WE COME TO YOU", 
    description: "Our professional team arrives at your location with all necessary equipment and supplies. No need to drive anywhere - we bring the service to you.",
    icon: CheckCircle
  },
  {
    id: "04",
    title: "ENJOY THE RESULTS",
    description: "Your vehicle receives professional detailing treatment and you enjoy the convenience of mobile service. Payment is collected upon completion of services.", 
    icon: Car
  }
];

const ServiceProcess = () => {
  return (
    <section id="process" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wider uppercase">
            YOUR MOBILE DETAILING EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ELEVATE YOUR RIDE<br />
            WITH OUR<br />
            <span className="text-primary">PROCESS</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={step.id} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.id}
                  </div>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;