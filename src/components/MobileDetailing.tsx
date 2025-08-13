import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-car.jpg";

const MobileDetailing = () => {
  const textRef = useFadeIn(200);
  const imageRef = useFadeIn(400);

  return (
    <section className="py-20" style={{backgroundColor: 'rgba(19,19,19,255)'}}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="text-center lg:text-left">
            <p className="text-red-500 font-semibold mb-4 tracking-wider uppercase text-sm">
              MOBILE DETAILING
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              ELEVATE YOUR RIDE<br />
              WITH MOBILE DETAILING
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Professional detailing service that comes to you in Tuscaloosa, AL
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 text-base transition-all duration-300">
              BOOK NOW
            </Button>
          </div>
          
          <div ref={imageRef} className="flex justify-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mobile Detailing Service"
                className="w-full max-w-md h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDetailing;