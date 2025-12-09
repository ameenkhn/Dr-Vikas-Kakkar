import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle, Clock, AlertCircle, LucideIcon } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  category: string;
  categoryColor: string;
  duration?: string;
  recovery?: string;
  indications: string[];
  procedureSteps: string[];
  candidates: string[];
  benefits: string[];
  faqs?: { question: string; answer: string }[];
  relatedServices?: { name: string; href: string }[];
}

export function ServiceDetailTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  category,
  categoryColor,
  duration,
  recovery,
  indications,
  procedureSteps,
  candidates,
  benefits,
  faqs,
  relatedServices,
}: ServiceDetailProps) {
  return (
    <>
      <Helmet>
        <title>{title} | Kakkar Clinic - Dr. Vikas Kakkar</title>
        <meta name="description" content={description} />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${categoryColor} mb-4`}>
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  {title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">{subtitle}</p>
                <p className="text-muted-foreground mb-8">{description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {duration && (
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border/50">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Duration:</span>{" "}
                        <strong>{duration}</strong>
                      </span>
                    </div>
                  )}
                  {recovery && (
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border/50">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Recovery:</span>{" "}
                        <strong>{recovery}</strong>
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/book">
                    <Button variant="hero" size="lg">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Consultation
                    </Button>
                  </Link>
                  <a href="https://wa.me/919876543210?text=I'm interested in learning more about your services">
                    <Button variant="heroOutline" size="lg">
                      WhatsApp Inquiry
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon className="w-32 h-32 text-primary/40" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-card border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Expert Care</p>
                      <p className="text-sm text-muted-foreground">25+ Years Experience</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Key Benefits
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages of this procedure for your foot health
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-soft border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Indications */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  When Is This Procedure Indicated?
                </h2>
                <ul className="space-y-4">
                  {indications.map((indication, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{indication}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Who Is a Good Candidate?
                </h2>
                <ul className="space-y-4">
                  {candidates.map((candidate, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{candidate}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Procedure Steps */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                The Procedure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What to expect during your treatment journey
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
                {procedureSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12 md:pl-20 pb-8 last:pb-0"
                  >
                    <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50">
                      <p className="text-foreground">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <section className="py-16">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-xl border border-border/50 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-semibold text-foreground">{faq.question}</span>
                      <span className="text-primary group-open:rotate-180 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Related Services
                </h2>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-4">
                {relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="bg-card px-6 py-3 rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all text-foreground font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </Layout>
    </>
  );
}
