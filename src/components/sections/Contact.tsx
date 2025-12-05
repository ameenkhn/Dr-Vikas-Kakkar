import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    description: "Mon-Sat, 9AM-7PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@kakkarclinic.com",
    href: "mailto:info@kakkarclinic.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Medical Complex, Sector 15",
    href: "https://maps.google.com",
    description: "New Delhi - 110001",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9AM - 7PM",
    description: "Sunday by appointment only",
  },
];

export function Contact() {
  return (
    <section className="py-20 lg:py-28" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-card hover:border-primary/20 transition-all h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground mt-1">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </a>
                ) : (
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground mt-1">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card border border-border/50 h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0669668282437!2d77.20598531508096!3d28.62877098242291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kakkar Clinic Location"
            />
          </motion.div>
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              Prefer WhatsApp?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get quick responses to your questions. Chat with us directly on WhatsApp.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
