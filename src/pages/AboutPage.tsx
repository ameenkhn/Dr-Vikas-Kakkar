import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Users, Heart, Calendar, MapPin, Building, Trophy } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";
import doctorsPortrait from "../../assets/doctors-portrait.png";


const achievements = [
  { year: "2023", title: "Excellence in Diabetic Foot Care Award", org: "Indian Podiatry Association" },
  { year: "2022", title: "Best Paper Presentation", org: "APSI Annual Conference" },
  { year: "2020", title: "Limb Salvage Pioneer Award", org: "Diabetic Foot Society of India" },
  { year: "2018", title: "Fellowship - Diabetic Foot Surgery", org: "Royal College of Surgeons" },
  { year: "2015", title: "Distinguished Service Award", org: "Delhi Medical Association" },
];

const qualifications = [
  { degree: "MBBS", institution: "Maulana Azad Medical College, Delhi", year: "1990" },
  { degree: "MS (General Surgery)", institution: "AIIMS, New Delhi", year: "1994" },
  { degree: "MCh (Plastic Surgery)", institution: "Post Graduate Institute, Chandigarh", year: "1998" },
  { degree: "Fellowship - Diabetic Foot Surgery", institution: "Royal College of Surgeons, UK", year: "2005" },
];

const memberships = [
  "Indian Society of Plastic Surgeons (ISAPS)",
  "Association of Plastic Surgeons of India (APSI)",
  "Diabetic Foot Society of India",
  "International Working Group on the Diabetic Foot",
  "Indian Medical Association",
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Dr. Vikas Kakkar | Kakkar Clinic</title>
        <meta name="description" content="Learn about Dr. Vikas Kakkar - 25+ years of experience in diabetic foot care, limb salvage surgery, and plastic surgery. Qualifications, achievements, and expertise." />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="text-primary font-medium text-sm uppercase tracking-wider">About the Doctor</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                  Dr. Vikas Kakkar
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  MS, MCh (Plastic Surgery), FRCS
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A pioneer in diabetic foot care and limb salvage surgery with over 25 years of dedicated experience. 
                  Dr. Kakkar has transformed thousands of lives through his expertise in preventing amputations 
                  and restoring mobility to patients with complex foot conditions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={doctorsPortrait}
                    alt="Dr. Vikas Kakkar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated"
                >
                  <p className="text-4xl font-display font-bold">25+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b border-border">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "25+", label: "Years Experience", icon: Award },
                { number: "10,000+", label: "Patients Treated", icon: Users },
                { number: "95%", label: "Limb Salvage Rate", icon: Heart },
                { number: "500+", label: "Surgeries/Year", icon: GraduationCap },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-display font-bold text-foreground">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Approach */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                "Every limb saved is a life transformed. Our mission is to combine cutting-edge medical science 
                with compassionate care to give our patients the best possible outcomes."
              </p>
              <p className="text-primary font-display mt-4">— Dr. Vikas Kakkar</p>
            </motion.div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-16 bg-muted/30" id="qualifications">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Education & Qualifications</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={qual.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border/50 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{qual.degree}</h3>
                    <p className="text-muted-foreground">{qual.institution}</p>
                    <p className="text-sm text-primary">{qual.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16" id="achievements">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Awards & Recognition</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                      <span className="text-sm text-primary font-medium">{achievement.year}</span>
                      <h3 className="font-semibold text-foreground mt-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Professional Memberships</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {memberships.map((membership) => (
                <motion.div
                  key={membership}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-full px-6 py-3 shadow-soft border border-border/50"
                >
                  <span className="text-sm text-foreground">{membership}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}
