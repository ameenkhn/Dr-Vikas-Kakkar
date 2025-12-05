import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Phone, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Take the First Step Towards
            <span className="block">Healthier Feet</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10">
            Don't wait until it's too late. Early intervention can prevent complications 
            and save your limbs. Book your assessment today.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Clock, text: "Same-day appointments available" },
              { icon: Shield, text: "Comprehensive care approach" },
              { icon: Phone, text: "Free initial phone consultation" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center gap-2 text-primary-foreground/90"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
              <Link to="/book">
                <Calendar className="w-5 h-5" />
                Book Your Assessment
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Call: +91 98765 43210
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-sm text-primary-foreground/60 mt-8">
            No obligation. No spam. Your health information is kept confidential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
