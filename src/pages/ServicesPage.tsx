import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Footprints, Syringe, Sparkles, Activity, Scan, Footprints as ShoeIcon, Bandage } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const allServices = [
  {
    category: "Preventive Surgical Procedures",
    icon: Syringe,
    color: "bg-primary/10 text-primary",
    services: [
      {
        name: "Keller's Arthroplasty",
        description: "Surgical procedure to relieve pressure and prevent ulceration in high-risk areas of the foot.",
        href: "/services/kellers-arthroplasty",
      },
      {
        name: "Flexor Tenotomy",
        description: "Minimally invasive procedure to correct toe deformities and reduce pressure points.",
        href: "/services/flexor-tenotomy",
      },
      {
        name: "Tendo-Achilles Lengthening (TAL)",
        description: "Surgical lengthening to reduce forefoot pressure and improve foot mechanics.",
        href: "/services/tal",
      },
      {
        name: "Flap Reconstructive Surgery",
        description: "Advanced tissue reconstruction for high-risk or recurrent ulcer areas.",
        href: "/services/flap-surgery",
      },
    ],
  },
  {
    category: "Preventive Casting Techniques",
    icon: Bandage,
    color: "bg-accent/10 text-accent",
    services: [
      {
        name: "Total Contact Cast (TCC)",
        description: "Gold standard for off-loading diabetic foot ulcers to promote healing.",
        href: "/services/tcc",
      },
      {
        name: "Walking Cast / Removable Walker Boot",
        description: "Protective casting options for various stages of healing and mobility needs.",
        href: "/services/walking-cast",
      },
    ],
  },
  {
    category: "Preventive Foot Assessment & Diagnostics",
    icon: Scan,
    color: "bg-blue-500/10 text-blue-600",
    services: [
      {
        name: "Neuro Scan (Neuropathy Screening)",
        description: "Comprehensive neurological assessment to detect early signs of diabetic neuropathy.",
        href: "/services/neuro-scan",
      },
      {
        name: "Podoscan / 3D Foot Scan",
        description: "Advanced 3D imaging for detailed foot structure analysis and custom orthotic design.",
        href: "/services/podoscan",
      },
      {
        name: "Foot Pressure Mapping (Pedobarography)",
        description: "Dynamic pressure analysis to identify high-risk areas and optimize off-loading strategies.",
        href: "/services/pedobarography",
      },
    ],
  },
  {
    category: "Preventive Footwear & Orthotics",
    icon: ShoeIcon,
    color: "bg-green-500/10 text-green-600",
    services: [
      {
        name: "Custom Insoles",
        description: "Precision-made insoles based on your foot scan for optimal support and pressure distribution.",
        href: "/services/custom-insoles",
      },
      {
        name: "Special Diabetic Footwear",
        description: "Therapeutic footwear designed specifically for diabetic foot protection.",
        href: "/services/diabetic-footwear",
      },
      {
        name: "Off-loading Insoles",
        description: "Specialized insoles to reduce pressure on ulcer-prone areas and aid healing.",
        href: "/services/offloading-insoles",
      },
    ],
  },
  {
    category: "Plastic & Cosmetic Surgery",
    icon: Sparkles,
    color: "bg-pink-500/10 text-pink-600",
    services: [
      {
        name: "Facial Rejuvenation",
        description: "Comprehensive facial aesthetic procedures for natural, youthful results.",
        href: "https://kakkarclinic.com",
        external: true,
      },
      {
        name: "Body Contouring",
        description: "Sculpting procedures to enhance body proportions and contours.",
        href: "https://kakkarclinic.com",
        external: true,
      },
      {
        name: "Scar Revision",
        description: "Advanced techniques to minimize scar appearance and improve skin texture.",
        href: "https://kakkarclinic.com",
        external: true,
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Kakkar Clinic - Diabetic Foot Care & Surgery</title>
        <meta name="description" content="Comprehensive diabetic foot care services including preventive surgery, casting techniques, diagnostics, custom orthotics, and plastic surgery." />
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
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                Comprehensive Care for Diabetic Foot & Beyond
              </h1>
              <p className="text-lg text-muted-foreground">
                From preventive diagnostics to advanced surgical interventions, we offer a full spectrum of services 
                designed to preserve your mobility and improve your quality of life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container">
            <div className="space-y-16">
              {allServices.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {category.category}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: serviceIndex * 0.05 }}
                      >
                        {service.external ? (
                          <a
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-card hover:border-primary/20 transition-all h-full group"
                          >
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                            <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </a>
                        ) : (
                          <Link
                            to={service.href}
                            className="block bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-card hover:border-primary/20 transition-all h-full group"
                          >
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                            <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
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
