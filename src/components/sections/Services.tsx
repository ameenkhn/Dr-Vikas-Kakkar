import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Footprints, Stethoscope, Sparkles, ArrowRight, Heart, Syringe, Bone, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    icon: Footprints,
    title: "Diabetic Foot Care",
    description: "Comprehensive preventive and therapeutic care for diabetic foot complications, ulcer management, and limb salvage.",
    services: [
      "Preventive Foot Assessment",
      "Neuro Scan (Neuropathy)",
      "Podoscan / 3D Foot Scan",
      "Foot Pressure Mapping",
      "Custom Insoles & Footwear",
    ],
    href: "/services/diabetic-foot",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Syringe,
    title: "Surgical Procedures",
    description: "Advanced surgical interventions including off-loading procedures, tenotomy, and reconstructive techniques.",
    services: [
      "Keller's Arthroplasty",
      "Flexor Tenotomy",
      "Tendo-Achilles Lengthening",
      "Flap Reconstructive Surgery",
      "Preventive Casting (TCC)",
    ],
    href: "/services/surgical",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "Plastic & Cosmetic Surgery",
    description: "Aesthetic and reconstructive procedures performed with precision and artistry for natural-looking results.",
    services: [
      "Facial Rejuvenation",
      "Body Contouring",
      "Scar Revision",
      "Skin Grafting",
      "Cosmetic Enhancements",
    ],
    href: "https://kakkarclinic.com",
    external: true,
    color: "bg-pink-500/10 text-pink-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Specialized Medical Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From preventive care to complex reconstructive surgery, we offer comprehensive solutions 
            tailored to your unique needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/20">
                <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {service}
                    </li>
                  ))}
                </ul>

                {category.external ? (
                  <a
                    href={category.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={category.href}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
