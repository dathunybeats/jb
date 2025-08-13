import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Portfolio from "@/components/Portfolio";
import Appointment from "@/components/Appointment";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Portfolio />
      <Appointment />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
