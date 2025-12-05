import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "Preventive Foot Assessment",
  "Diabetic Wound Care",
  "Neuro Scan (Neuropathy Screening)",
  "Podoscan / 3D Foot Scan",
  "Consultation - General",
  "Consultation - Follow-up",
  "Surgical Consultation",
  "Plastic Surgery Consultation",
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    consultationType: "in-person",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.consent) newErrors.consent = "Please agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call - Replace with actual endpoint
    // Example POST: await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(formData) })
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        consultationType: "in-person",
        message: "",
        consent: false,
      });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-card rounded-2xl shadow-elevated w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-foreground">Book Appointment</h2>
                  <p className="text-sm text-muted-foreground">Fill in your details below</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success State */}
            {isSuccess ? (
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Booking Submitted!
                </h3>
                <p className="text-muted-foreground">
                  We'll contact you within 24 hours to confirm.
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Name */}
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                {/* Service */}
                <div>
                  <Label>Select Service *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-sm text-destructive mt-1">{errors.service}</p>}
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className={errors.date ? "border-destructive" : ""}
                    />
                    {errors.date && <p className="text-sm text-destructive mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                        <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                        <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                        <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                        <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                        <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                        <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                        <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                        <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <Label>Consultation Type</Label>
                  <div className="flex gap-4 mt-2">
                    {["in-person", "online"].map((type) => (
                      <label
                        key={type}
                        className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.consultationType === type
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultationType"
                          value={type}
                          checked={formData.consultationType === type}
                          onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium capitalize">
                          {type === "in-person" ? "In-Person" : "Online Video"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any specific concerns or requirements..."
                    rows={3}
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: !!checked })}
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    I consent to Kakkar Clinic collecting my information for appointment scheduling. 
                    I understand my data will be handled per the{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </a>
                    .
                  </Label>
                </div>
                {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}

                {/* Submit */}
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      Request Appointment
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
