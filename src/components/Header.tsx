import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b border-border/20 shadow-lg transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/85 md:bg-black/40 opacity-100' 
        : 'bg-black/60 md:bg-black/30 opacity-95'
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button 
              onClick={scrollToTop}
              className="text-2xl md:text-3xl font-extrabold text-white hover:text-gray-200 transition-colors cursor-pointer tracking-tight"
              style={{color: '#ffffff'}}
            >
              JB'S
            </button>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">Services</a>
              <a href="#process" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">Process</a>
              <a href="#about" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2 text-white">
              <Phone size={18} />
              <span>+1 205-872-5994</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <MapPin size={18} />
              <span>Tuscaloosa, AL</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="default" className="hidden sm:inline-flex text-sm font-semibold px-5 h-10 rounded-md">
              Book Appointment
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden p-2 rounded-md">
                  <Menu size={36} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-6">
                  <a 
                    href="#services" 
                    className="text-xl text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#process" 
                    className="text-xl text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Process
                  </a>
                  <a 
                    href="#about" 
                    className="text-xl text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    className="text-xl text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                  <div className="pt-6 border-t border-border">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-3 text-white">
                        <Phone size={20} />
                        <span className="text-base">+1 205-872-5994</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white">
                        <MapPin size={20} />
                        <span className="text-base">Tuscaloosa, AL</span>
                      </div>
                    </div>
                    <Button 
                      variant="default" 
                      className="w-full mt-6 text-sm font-semibold h-10 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;