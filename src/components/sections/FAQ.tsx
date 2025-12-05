import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    name: "General",
    questions: [
      {
        q: "What conditions does Dr. Kakkar treat?",
        a: "Dr. Kakkar specializes in diabetic foot care, limb salvage surgery, wound management, and plastic & reconstructive surgery. He treats diabetic ulcers, neuropathy-related foot problems, chronic wounds, and performs both preventive and corrective surgical procedures.",
      },
      {
        q: "What makes Kakkar Clinic different?",
        a: "Our clinic offers a comprehensive, multidisciplinary approach to diabetic foot care with 25+ years of specialized experience. We focus on limb salvage and prevention, using advanced diagnostic tools and surgical techniques to achieve the best outcomes.",
      },
    ],
  },
  {
    name: "Appointments",
    questions: [
      {
        q: "How do I book an appointment?",
        a: "You can book an appointment through our website by clicking the 'Book Appointment' button, calling us directly at +91 98765 43210, or messaging us on WhatsApp. We also offer online video consultations for initial assessments.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring your medical records, any previous test results or X-rays, a list of current medications, your diabetes management history, and comfortable footwear that we can examine. If you have insurance, bring those details as well.",
      },
      {
        q: "Do you offer online consultations?",
        a: "Yes, we offer video consultations for initial assessments and follow-up appointments. This is especially helpful for patients who live far away or have mobility issues. Book an online consultation through our appointment system.",
      },
    ],
  },
  {
    name: "Procedures",
    questions: [
      {
        q: "What is involved in a preventive foot assessment?",
        a: "Our assessment includes a comprehensive examination of your feet, neurological testing (Neuro Scan), vascular evaluation, Podoscan/3D foot scanning, and pressure mapping (Pedobarography). Based on findings, we create a personalized prevention plan.",
      },
      {
        q: "How long is the recovery for diabetic foot surgery?",
        a: "Recovery time varies depending on the procedure and individual healing capacity. Minor procedures may require 2-4 weeks, while reconstructive surgeries can take 6-12 weeks. We provide detailed post-operative care instructions and follow-up appointments.",
      },
      {
        q: "Are the procedures painful?",
        a: "We use appropriate anesthesia for all procedures to ensure patient comfort. Post-operative pain is managed with medications. Many of our preventive procedures, like casting and orthotic fittings, are non-invasive and pain-free.",
      },
    ],
  },
  {
    name: "Payment & Insurance",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, credit/debit cards, UPI payments, and bank transfers. We also work with various health insurance providers. Please check with our reception for specific insurance coverage details.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we understand that some treatments can be significant investments in your health. We offer flexible payment plans for eligible patients. Please discuss this with our administrative team during your consultation.",
      },
    ],
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const currentCategory = faqCategories.find((c) => c.name === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-muted/30" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and treatments.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setOpenQuestion(null);
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Questions */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl shadow-soft border border-border/50 px-6"
          >
            {currentCategory?.questions.map((item) => (
              <FAQItem
                key={item.q}
                question={item.q}
                answer={item.a}
                isOpen={openQuestion === item.q}
                onToggle={() => setOpenQuestion(openQuestion === item.q ? null : item.q)}
              />
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <HelpCircle className="w-5 h-5" />
              <span>Still have questions?</span>
              <a href="/contact" className="text-primary font-medium hover:underline">
                Contact us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
