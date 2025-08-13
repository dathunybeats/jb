import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFadeIn } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive mobile detailing services including ceramic coating, paint correction, paint touch-up, interior and exterior detailing, professional grade ceramic coatings, and maintenance services. We come to your location in Tuscaloosa and surrounding areas."
  },
  {
    question: "How long does a typical detailing service take?",
    answer: "The duration depends on the service type and vehicle condition. Basic detailing takes 2-4 hours, while premium services like ceramic coating can take 1-2 days. We'll provide an accurate time estimate when you book your appointment."
  },
  {
    question: "Do you offer mobile detailing services?",
    answer: "Yes! We are a mobile detailing service that comes to your location. This is perfect for busy schedules and we bring all necessary equipment and supplies to provide professional quality service at your doorstep in Tuscaloosa, AL."
  },
  {
    question: "What is ceramic coating and how long does it last?",
    answer: "Ceramic coating is a protective layer that bonds to your vehicle's paint, providing superior protection against UV rays, chemicals, and environmental contaminants. Our professional grade ceramic coatings typically last 2-5 years depending on the product and maintenance."
  },
  {
    question: "How often should I have my car detailed?",
    answer: "We recommend professional detailing every 3-4 months for optimal protection and appearance. However, this can vary based on your driving conditions, storage, and personal preferences. Regular maintenance helps keep your vehicle in top condition between details."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards (Visa, MasterCard, American Express), and digital payments. Payment is due upon completion of services unless prior arrangements have been made."
  },
  {
    question: "Do you provide warranties on your services?",
    answer: "Yes, we stand behind our work with service warranties. Ceramic coating comes with manufacturer warranties ranging from 2-5 years. Other services include satisfaction guarantees - we'll make it right if you're not completely satisfied."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Tuscaloosa, Alabama and surrounding areas. We're always open for appointments and offer online booking for your convenience. Contact us to confirm if we service your specific location."
  }
];

const FAQ = () => {
  const headerRef = useFadeIn(200);
  const accordionRef = useFadeIn(400);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className="text-center mb-16">
            <p className="text-red-500 font-semibold mb-3 tracking-[0.2em] uppercase text-xs">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tight">FREQUENTLY ASKED<br />QUESTIONS</h2>
            <p className="text-muted-foreground text-lg">Find answers to common questions about our mobile detailing services</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4" ref={accordionRef}>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-black hover:text-red-500 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;