import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useFadeIn } from "@/hooks/useScrollAnimation";
import mustangImage from "@/assets/portfolio-mustang.jpg";
import porscheGT3RSImage from "@/assets/portfolio-porsche-gt3rs.jpg";
import lamborghiniImage from "@/assets/portfolio-lamborghini.jpg";
import porsche911Image from "@/assets/portfolio-porsche911.jpg";

const portfolioItems = [
  {
    image: mustangImage,
    title: "Mustang GT500",
    position: "center"
  },
  {
    image: porscheGT3RSImage,
    title: "Porsche GT3 RS",
    position: "center 70%"
  },
  {
    image: lamborghiniImage,
    title: "Lamborghini",
    position: "center"
  },
  {
    image: porsche911Image,
    title: "Porsche 911 GT3",
    position: "center 65%"
  },
  {
    image: mustangImage,
    title: "Ford Mustang",
    position: "center"
  },
  {
    image: lamborghiniImage,
    title: "Supercar Detail",
    position: "center"
  }
];

const Portfolio = () => {
  const headerRef = useFadeIn(200);
  const gridRef = useFadeIn(400);

  return (
    <section className="py-20 lg:py-0 lg:h-screen" style={{backgroundColor: 'rgba(34,34,34,255)'}}>
      {/* Mobile layout - original stacked with horizontal scroll */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-left mb-12">
            <p className="text-red-500 font-semibold mb-3 tracking-[0.2em] uppercase text-xs">
              PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight tracking-tight">
              SEE THE RESULTS FOR YOURSELF
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              JB's Mobile Detailing has taken detailing to a whole new level using only top-of the line products. We make sure every vehicle feels as good, if not better than it did when first bought!
            </p>
            <Button className="text-white font-semibold px-6 h-11 text-sm w-full max-w-md transition-all duration-300 rounded-md mb-8" style={{backgroundColor: 'rgba(59,59,59,255)'}}>
              VIEW ALL
            </Button>
          </div>
          
          <div ref={gridRef} className="overflow-x-auto mb-6 -mx-4">
            <div className="flex gap-4 pb-4 px-4">
              {portfolioItems.map((item, index) => (
                <div key={index} className="relative flex-shrink-0">
                  <div className="relative h-40 w-80 overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.position }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white rounded-full px-4 py-2">
                        <h3 className="font-bold text-black text-sm">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm flex items-center justify-center">
            <ChevronLeft size={16} className="mr-2" />
            <span>Swipe left to view more</span>
          </div>
        </div>
      </div>

      {/* Desktop layout - side by side with no right padding */}
      <div className="hidden lg:flex lg:h-full">
        {/* Left side - Text content */}
        <div className="flex-none" style={{width: '33.333333%'}}>
          <div ref={headerRef} className="h-full flex flex-col justify-center px-8">
            <p className="text-red-500 font-semibold mb-3 tracking-[0.2em] uppercase text-xs">
              PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight tracking-tight">
              SEE THE RESULTS FOR YOURSELF
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              JB's Mobile Detailing has taken detailing to a whole new level using only top-of the line products. We make sure every vehicle feels as good, if not better than it did when first bought!
            </p>
            <Button className="text-white font-semibold px-6 h-11 text-sm transition-all duration-300 rounded-md" style={{backgroundColor: 'rgba(59,59,59,255)'}}>
              VIEW ALL
            </Button>
          </div>
        </div>
        
        {/* Right side - Connected image grid extending to edge */}
        <div className="flex-1 h-full">
          <div className="grid grid-cols-2 gap-0 h-full">
            {portfolioItems.map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative overflow-hidden" style={{height: 'calc(100vh / 3)'}}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: item.position }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-full px-3 py-1">
                      <h3 className="font-bold text-black text-sm">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;