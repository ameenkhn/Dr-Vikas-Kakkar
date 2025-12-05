import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";

// FOMO Configuration - Can be disabled by setting ENABLED to false
const FOMO_CONFIG = {
  ENABLED: true,
  INITIAL_DELAY: 5000, // 5 seconds before first toast
  INTERVAL: 30000, // 30 seconds between toasts
  DISPLAY_DURATION: 6000, // 6 seconds to show each toast
};

const bookingMessages = [
  { service: "Preventive Foot Assessment", time: "just now" },
  { service: "Diabetic Wound Care", time: "2 min ago" },
  { service: "Consultation", time: "5 min ago" },
  { service: "Follow-up Visit", time: "8 min ago" },
  { service: "Podoscan Assessment", time: "12 min ago" },
];

export function FomoToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(bookingMessages[0]);

  useEffect(() => {
    if (!FOMO_CONFIG.ENABLED) return;

    let messageIndex = 0;
    let showTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    const showToast = () => {
      setCurrentMessage(bookingMessages[messageIndex]);
      setIsVisible(true);
      messageIndex = (messageIndex + 1) % bookingMessages.length;

      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, FOMO_CONFIG.DISPLAY_DURATION);
    };

    // Initial delay
    showTimeout = setTimeout(() => {
      showToast();
      // Set up recurring toasts
      const interval = setInterval(showToast, FOMO_CONFIG.INTERVAL);
      return () => clearInterval(interval);
    }, FOMO_CONFIG.INITIAL_DELAY);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!FOMO_CONFIG.ENABLED) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-40 max-w-xs"
        >
          <div className="bg-card rounded-xl shadow-elevated border border-border p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">New Booking</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Someone booked <span className="font-medium text-foreground">{currentMessage.service}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">{currentMessage.time}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
