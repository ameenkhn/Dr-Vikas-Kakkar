import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/sections/CTA";

const testimonials = [
  {
    id: 1,
    name: "Rajesh M.",
    location: "Delhi",
    rating: 5,
    text: "Dr. Kakkar saved my foot when other doctors had given up. His expertise in diabetic foot care is unmatched. After 6 months of treatment, I'm walking again without pain. The entire team was supportive throughout my journey.",
    service: "Diabetic Foot Care",
    date: "November 2024",
  },
  {
    id: 2,
    name: "Sunita K.",
    location: "Noida",
    rating: 5,
    text: "Excellent care and attention to detail. The staff is very supportive, and Dr. Kakkar takes time to explain everything. My wound healing was much faster than expected. I highly recommend this clinic to anyone with diabetic foot problems.",
    service: "Wound Management",
    date: "October 2024",
  },
  {
    id: 3,
    name: "Amit S.",
    location: "Gurgaon",
    rating: 5,
    text: "I was scared of amputation, but Dr. Kakkar's preventive approach and advanced treatments saved my limb. Forever grateful for his expertise and compassion. The follow-up care has been exceptional.",
    service: "Limb Salvage",
    date: "September 2024",
  },
  {
    id: 4,
    name: "Priya V.",
    location: "Delhi",
    rating: 5,
    text: "The best decision I made was consulting Dr. Kakkar. His team provided comprehensive care from diagnosis to recovery. The custom insoles have made a huge difference in my daily comfort.",
    service: "Preventive Care",
    date: "August 2024",
  },
  {
    id: 5,
    name: "Mahendra P.",
    location: "Faridabad",
    rating: 5,
    text: "After struggling with a non-healing ulcer for months, Dr. Kakkar's treatment finally worked. His approach is scientific yet compassionate. I'm grateful for the care I received.",
    service: "Ulcer Treatment",
    date: "July 2024",
  },
  {
    id: 6,
    name: "Kamla D.",
    location: "Ghaziabad",
    rating: 5,
    text: "The podoscan and custom insoles have transformed my life. I can walk without pain now. Dr. Kakkar's team is professional and caring. Highly recommended for anyone with foot issues.",
    service: "Custom Orthotics",
    date: "June 2024",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Patient Testimonials | Kakkar Clinic</title>
        <meta name="description" content="Read what our patients say about their experience at Kakkar Clinic. Real stories of healing and transformation from Dr. Vikas Kakkar's patients." />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                Stories of Healing & Hope
              </h1>
              <p className="text-lg text-muted-foreground">
                Real experiences from patients who trusted us with their care. These stories inspire us 
                to continue delivering exceptional medical services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
                >
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.service}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Placeholder */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Video Testimonials</h2>
              <p className="text-muted-foreground">Coming soon - Watch our patients share their stories</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-card rounded-xl flex items-center justify-center border border-border/50"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}