import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useFadeIn } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    vehicleMake: "",
    year: "",
    vehicleModel: "",
    services: [],
    packages: "",
    addOns: "",
    message: ""
  });

  const services = [
    "Mobile Detailing", "Ceramic Coating", "Paint Correction", 
    "Paint Touch-up", "Interior Detailing", "Exterior Detailing",
    "Professional Grade Coatings", "Maintenance Wash", "Special Events",
    "New Car Protection", "Window Tinting", "Vinyl Wrap"
  ];

  const headerRef = useFadeIn(200);
  const infoRef = useFadeIn(400);
  const formRef = useFadeIn(600);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-black">
            BOOK YOUR APPOINTMENT
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          <div ref={infoRef} className="lg:col-span-1 lg:sticky lg:top-32 lg:self-start">
            <div className="text-white p-8 rounded-2xl shadow-2xl" style={{backgroundColor: 'rgba(59,59,59,255)'}}>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">What happens next?</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                We know you're busy, which is why we'll take care of all the details. We have a specialist 
                waiting to help answer any questions or concerns - just fill out this form and they'll get 
                back with you ASAP with a time to come to your location. Many pricing options are available, 
                however feel free to contact us if you have any additional questions or to customize a package 
                specific to your needs. We would look forward to hearing from you!
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="text-white"><strong>Service Area:</strong> Tuscaloosa, AL & Surrounding Areas</div>
                <div className="text-white"><strong>Phone:</strong> Call or Text (205) 872-5994</div>
                <div className="text-white"><strong>Email:</strong> Jbsmobiledetail@gmail.com</div>
                <div className="text-white"><strong>Hours:</strong> Always Open - Appointments Only</div>
                <div className="text-white"><strong>Online Booking:</strong> Available</div>
                <div className="text-white"><strong>Delivery:</strong> We Come To You</div>
              </div>
              
              <Button className="w-full mt-6 bg-white text-black font-semibold h-11 rounded-md hover:bg-gray-100 transition-colors duration-300 text-sm">
                CALL US NOW
              </Button>
            </div>
          </div>

          <div ref={formRef} className="lg:col-span-2">
            <form className="space-y-8 bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
            {/* Step 1: Contact Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black tracking-tight">Step 1: Your Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-black">Name <span className="text-red-500">*</span></Label>
                  <Input id="name" placeholder="Enter your name" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-black">Mobile Number <span className="text-red-500">*</span></Label>
                  <Input id="mobile" placeholder="Enter your mobile number" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-black">Email <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" placeholder="Enter your email address" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
                </div>
              </div>
            </div>

            {/* Step 2: Vehicle Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black tracking-tight">Step 2: Your Vehicle Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="make" className="text-black">Vehicle Make <span className="text-red-500">*</span></Label>
                  <Input id="make" placeholder="e.g. Ford, Toyota, BMW" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
                </div>
                <div>
                  <Label htmlFor="year" className="text-black">Year <span className="text-red-500">*</span></Label>
                  <Input id="year" placeholder="e.g. 2020" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="model" className="text-black">Vehicle Model <span className="text-red-500">*</span></Label>
                <Input id="model" placeholder="e.g. F-150, Camry, X5" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
              </div>
            </div>

            {/* Step 3: Select Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black tracking-tight">Step 3: Select your services</h3>
              <div>
                <Label className="text-black">Which services are you interested in? <span className="text-red-500">*</span></Label>
                <div className="grid md:grid-cols-2 gap-2 mt-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`service-${index}`} />
                      <Label 
                        htmlFor={`service-${index}`} 
                        className="text-sm text-black cursor-pointer"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <Label htmlFor="packages" className="text-black">Did any packages catch your eye?</Label>
                <Input id="packages" placeholder="e.g. Standard Detailing Package" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
              </div>
              
              <div className="mt-4">
                <Label htmlFor="addons" className="text-black">Do you want any add ons?</Label>
                <Input id="addons" placeholder="e.g. Engine bay cleaning" className="mt-1 bg-white border-gray-300 h-11 rounded-md" />
              </div>
              
              <div className="mt-4">
                <Label htmlFor="message" className="text-black">Anything else you would like us to know?</Label>
                <Textarea 
                  id="message" 
                  placeholder="Enter your message here" 
                  className="mt-1 min-h-[120px] bg-white border-gray-300 rounded-md" 
                />
              </div>
            </div>

              <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 h-11 rounded-md text-sm transition-all duration-300">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;