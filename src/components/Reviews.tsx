import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useFadeIn } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    text: "Outstanding mobile detailing service! My car looks brand new.",
    author: "Sophie Williams",
    rating: 5,
    avatar: "SW"
  },
  {
    text: "Professional service and incredible attention to detail.",
    author: "Emily Carter", 
    rating: 5,
    avatar: "EC"
  },
  {
    text: "Excellent communication and amazing results. Highly recommend!",
    author: "Jonathan S.",
    rating: 5,
    avatar: "JS"
  },
  {
    text: "Best mobile detailing service in Tuscaloosa. Worth every penny!",
    author: "Michael B.",
    rating: 5,
    avatar: "MB"
  },
  {
    text: "Fast, reliable, and my car has never looked better.",
    author: "Sarah M.",
    rating: 5,
    avatar: "SM"
  },
  {
    text: "Top-notch ceramic coating service with incredible results.",
    author: "David L.",
    rating: 5,
    avatar: "DL"
  },
  {
    text: "Amazing work! My car interior looks and smells fantastic.",
    author: "Lisa K.",
    rating: 5,
    avatar: "LK"
  }
];

const Reviews = () => {
  const headerRef = useFadeIn(200);
  const reviewsRef = useFadeIn(400);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-red-500 font-semibold mb-3 tracking-[0.2em] uppercase text-xs">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black tracking-tight">
            100% Recommend Rate
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            16 reviews from satisfied customers in Tuscaloosa, AL.
          </p>
        </div>
        
        <div ref={reviewsRef} className="max-w-none">
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            <div className="flex space-x-4 animate-scroll w-max">
              {[...reviews, ...reviews].map((review, index) => (
                <Card key={index} className="bg-white border border-gray-100 shadow-md min-w-[300px] flex-shrink-0 rounded-xl">
                  <CardContent className="p-5">
                    <StarRating rating={review.rating} />
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {review.text}
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white font-semibold text-xs">
                          {review.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm">
                          {review.author}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;