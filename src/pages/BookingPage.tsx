import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Check, Loader2, Phone, MessageCircle, Clock, Shield, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
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

const services = [
  "Preventive Foot Assessment",
  "Diabetic Wound Care",
  "Neuro Scan (Neuropathy Screening)",
  "Podoscan / 3D Foot Scan",
  "Foot Pressure Mapping",
  "Custom Insoles Fitting",
  "Consultation - General",
  "Consultation - Follow-up",
  "Surgical Consultation",
  "Plastic Surgery Consultation",
];

const benefits = [
  { icon: Clock, text: "Same-day appointments available" },
  { icon: Shield, text: "Confidential consultations" },
  { icon: Award, text: "25+ years of expertise" },
];

export default function BookingPage() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment | Kakkar Clinic - Dr. Vikas Kakkar</title>
        <meta name="description" content="Book your appointment with Dr. Vikas Kakkar. Expert diabetic foot care and limb salvage surgery. Online and in-person consultations available." />
      </Helmet>

      <Layout>
        <section className="pt-28 pb-20 min-h-screen">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:sticky lg:top-28"
              >
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Book Now</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                  Schedule Your Consultation
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Take the first step towards better health. Book your appointment with Dr. Vikas Kakkar 
                  and receive expert care tailored to your needs.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Alternative Contact */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Prefer to call?</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" asChild>
                      <a href="tel:+919876543210">
                        <Phone className="w-4 h-4" />
                        +91 98765 43210
                      </a>
                    </Button>
                    <Button variant="whatsapp" asChild>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {isSuccess ? (
                  <div className="bg-card rounded-2xl shadow-card border border-border p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
                      Booking Submitted!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Thank you for booking with us. Our team will contact you within 24 hours 
                      to confirm your appointment.
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>
                      Book Another Appointment
                    </Button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="bg-card rounded-2xl shadow-card border border-border p-8 space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-display font-semibold text-foreground">Appointment Details</h2>
                        <p className="text-sm text-muted-foreground">Fill in your information below</p>
                      </div>
                    </div>

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

                    {/* Phone & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
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
                    <div className="grid sm:grid-cols-2 gap-4">
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
                            {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"].map((t) => (
                              <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
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
                      <Label htmlFor="message">Additional Notes (Optional)</Label>
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
                        I consent to Kakkar Clinic collecting my information for appointment scheduling and agree to the{" "}
                        <a href="/privacy" className="text-primary hover:underline">privacy policy</a>.
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
          </div>
        </section>
      </Layout>
    </>
  );
}
