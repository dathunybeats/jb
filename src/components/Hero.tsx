import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-unsplash.jpg";
import heroImage2 from "@/assets/hero-unsplash2.jpg";
import heroImage3 from "@/assets/hero-wallpaper.jpg";
import heroImage4 from "@/assets/hero-img5539.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundImage: heroImage,
      subtitle: "MOBILE DETAILING",
      title: "ELEVATE YOUR RIDE",
      titleHighlight: "WITH JB'S DETAILING",
      buttonText: "BOOK NOW",
      headingClass: "text-3xl sm:text-5xl md:text-6xl lg:text-6xl"
    },
    {
      id: 2,
      backgroundImage: heroImage2,
      subtitle: "CERAMIC COATINGS",
      title: "PROFESSIONAL GRADE",
      titleHighlight: "PROTECTION",
      buttonText: "BOOK NOW",
      headingClass: "text-4xl md:text-6xl lg:text-7xl"
    },
    {
      id: 3,
      backgroundImage: heroImage3,
      subtitle: "PAINT CORRECTION",
      title: "INTERIOR & EXTERIOR",
      titleHighlight: "DETAILING",
      buttonText: "BOOK NOW",
      headingClass: "text-4xl md:text-6xl lg:text-7xl"
    },
    {
      id: 4,
      backgroundImage: heroImage4,
      subtitle: "JB'S MOBILE DETAILING",
      title: "100% RECOMMEND",
      titleHighlight: "16 REVIEWS",
      buttonText: "BOOK NOW",
      headingClass: "text-4xl md:text-6xl lg:text-7xl"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[75vh] lg:h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundPosition: 'center 70%'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto -mt-20 hero-text">
          <p className="text-white/85 font-medium mb-3 tracking-[0.2em] uppercase text-xs opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            {slides[currentSlide].subtitle}
          </p>
          <h1 className={`${slides[currentSlide].headingClass} font-extrabold mb-8 leading-[1.1] tracking-tight text-white opacity-0 animate-fade-in hero-text`} style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            {slides[currentSlide].title}<br />
            <span className="text-white">{slides[currentSlide].titleHighlight}</span>
          </h1>
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-black font-semibold px-10 h-12 rounded-md text-base transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {/* Previous Arrow */}
        <button
          onClick={goToPrevious}
          className="text-white/70 hover:text-white transition-colors duration-300"
        >
            <ChevronLeft size={30} />
        </button>
        
        {/* Slide Indicators */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        {/* Next Arrow */}
        <button
          onClick={goToNext}
          className="text-white/70 hover:text-white transition-colors duration-300"
        >
            <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default Hero;