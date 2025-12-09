import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Play, MessageCircle, Star, Award, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import herobackground from "../../assets/1.jpg";
import doctorsPortrait from "../../assets/doctors-portrait1.png";

const trustBadges = [
  { icon: Award, label: "25+ Years Experience" },
  { icon: Shield, label: "Limb Salvage Specialist" },
  { icon: Users, label: "10,000+ Patients" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src={herobackground}
          alt="herobackground"
          className="w-full h-full object-cover"
          loading="eager"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-background/90">Rated 4.9/5 by patients</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-6">
              Expert Care for
              <span className="block text-primary mt-2">Diabetic Foot & Limb Salvage</span>
            </h1>

            <p className="text-lg text-background/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Specialized in preventive care, advanced wound management, and reconstructive surgery. 
              Saving limbs, restoring mobility, transforming lives.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consult
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-background/80">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={doctorsPortrait}
                  alt="Dr. Vikas Kakkar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dr. Vikas Kakkar</p>
                    <p className="text-sm text-muted-foreground">MS, MCh Plastic Surgery</p>
                  </div>
                </div>
              </motion.div>

              {/* Slots Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-semibold">3 slots left today!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-background/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
