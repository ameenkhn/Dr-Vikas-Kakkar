import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../assets/logo1.png";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Meet the Doctors", href: "/about#doctors" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

const services = [
  { label: "Diabetic Foot Care", href: "/services/diabetic-foot" },
  { label: "Reconstructive Surgery", href: "/services/reconstructive" },
  { label: "Plastic Surgery", href: "/services/plastic-surgery" },
  { label: "Wound Care", href: "/services/wound-care" },
  { label: "Preventive Care", href: "/services/preventive" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
            <img src={logo} alt="Kakkar Clinic" className="w-8 h-8 object-contain" />
              <div>
                <h3 className="font-display text-xl font-semibold">Kakkar Clinic</h3>
                <p className="text-sm text-background/60">Dr. Vikas Kakkar</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Specializing in diabetic foot care, limb salvage, and plastic & reconstructive surgery with over 25 years of experience.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </a>
              <a href="mailto:info@kakkarclinic.com" className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@kakkarclinic.com
              </a>
              <div className="flex items-start gap-3 text-sm text-background/80">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>123 Medical Complex, Sector 15,<br />New Delhi - 110001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/80">
                <Clock className="w-4 h-4 text-primary" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background hover:pl-2 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-background/70 hover:text-background hover:pl-2 transition-all"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-background/70 mb-4">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="accent" className="w-full">
                Subscribe
              </Button>
            </form>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Kakkar Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-background/60 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
