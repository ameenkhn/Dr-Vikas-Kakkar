import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rajesh M.",
    location: "Delhi",
    rating: 5,
    text: "Dr. Kakkar saved my foot when other doctors had given up. His expertise in diabetic foot care is unmatched. After 6 months of treatment, I'm walking again without pain.",
    service: "Diabetic Foot Care",
  },
  {
    id: 2,
    name: "Sunita K.",
    location: "Noida",
    rating: 5,
    text: "Excellent care and attention to detail. The staff is very supportive, and Dr. Kakkar takes time to explain everything. My wound healing was much faster than expected.",
    service: "Wound Management",
  },
  {
    id: 3,
    name: "Amit S.",
    location: "Gurgaon",
    rating: 5,
    text: "I was scared of amputation, but Dr. Kakkar's preventive approach and advanced treatments saved my limb. Forever grateful for his expertise and compassion.",
    service: "Limb Salvage",
  },
  {
    id: 4,
    name: "Priya V.",
    location: "Delhi",
    rating: 5,
    text: "The best decision I made was consulting Dr. Kakkar. His team provided comprehensive care from diagnosis to recovery. Highly recommend for anyone with diabetic foot issues.",
    service: "Preventive Care",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-primary/5" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Patient Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from patients who trusted us with their care.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
            >
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-display">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* JSON-LD for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Kakkar Clinic",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": testimonials.length,
            },
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
              },
              "reviewBody": t.text,
            })),
          }),
        }}
      />
    </section>
  );
}
