import { Phone, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function FloatingButtons() {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hello! I would like to book an appointment at Kakkar Clinic.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Book Appointment - Mobile only */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="md:hidden"
      >
        <Link
          to="/book"
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-elevated hover:shadow-glow hover:scale-110 transition-all"
          aria-label="Book Appointment"
        >
          <Calendar className="w-6 h-6" />
        </Link>
      </motion.div>

      {/* WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </motion.div>

      {/* Phone - Mobile only */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="md:hidden"
      >
        <a
          href="tel:+919876543210"
          className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-all"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </motion.div>
    </div>
  );
}
