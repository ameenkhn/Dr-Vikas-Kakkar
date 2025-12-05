import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "25+", label: "Years Experience", icon: Award },
  { number: "10,000+", label: "Patients Treated", icon: Users },
  { number: "95%", label: "Limb Salvage Rate", icon: Heart },
  { number: "500+", label: "Surgeries/Year", icon: GraduationCap },
];

const qualifications = [
  "MS (General Surgery)",
  "MCh (Plastic Surgery)",
  "Fellow - Diabetic Foot Surgery",
  "Member - ISAPS & APSI",
];

export function About() {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <div className="absolute inset-4 bg-primary/10 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="src\assets\doctors-portrait.png"
                  alt="Dr. Vikas Kakkar"
                  className="w-full h-full object-cover"  
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated"
              >
                <p className="text-4xl font-display font-bold">25+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About the Doctor</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
              Dr. Vikas Kakkar
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A pioneer in diabetic foot care and limb salvage surgery with over 25 years of dedicated experience. 
              Dr. Kakkar has transformed thousands of lives through his expertise in preventing amputations 
              and restoring mobility to patients with complex foot conditions.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              His multidisciplinary approach combines advanced surgical techniques with preventive care strategies, 
              ensuring comprehensive treatment for each patient. As a recognized expert in both diabetic foot surgery 
              and plastic & reconstructive procedures, Dr. Kakkar brings a unique perspective to patient care.
            </p>

            {/* Qualifications */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {qualifications.map((qual) => (
                <div key={qual} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{qual}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Read Full Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-display font-bold text-foreground">{stat.number}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
