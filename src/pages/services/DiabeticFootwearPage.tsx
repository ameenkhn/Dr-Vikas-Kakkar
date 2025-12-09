import { Footprints } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function DiabeticFootwearPage() {
  return (
    <ServiceDetailTemplate
      title="Special Diabetic Footwear"
      subtitle="Therapeutic shoes designed specifically for diabetic foot protection"
      description="Diabetic footwear is specially engineered with extra depth, seamless interiors, and protective features to prevent ulcers in at-risk feet. Combined with custom insoles, these shoes provide the ultimate protection for daily activities."
      icon={Footprints}
      category="Footwear & Orthotics"
      categoryColor="bg-green-500/10 text-green-600"
      duration="1-2 weeks for custom orders"
      recovery="N/A"
      indications={[
        "Diabetes with peripheral neuropathy",
        "History of foot ulcers or amputation",
        "Foot deformities like bunions, hammertoes, or Charcot foot",
        "Need for extra-depth shoes to accommodate orthotics",
        "Inability to feel foot injuries in regular shoes",
      ]}
      procedureSteps={[
        "Foot assessment to determine protection level needed.",
        "Measurement of foot length, width, and depth requirements.",
        "Selection from our range of therapeutic footwear options.",
        "Custom modifications if needed (stretching, padding, etc.).",
        "Fitting with your custom insoles.",
        "Gait assessment to ensure proper function.",
        "Education on breaking in new shoes safely.",
        "Follow-up to address any fit issues.",
      ]}
      candidates={[
        "All diabetic patients with loss of protective sensation",
        "Those with foot deformities requiring accommodation",
        "Patients who have healed from foot ulcers",
        "Individuals needing extra-depth for orthotics",
        "Anyone at risk for foot complications",
      ]}
      benefits={[
        "Extra depth for insoles",
        "Seamless interior",
        "Protective construction",
        "Multiple width options",
      ]}
      faqs={[
        {
          question: "What makes diabetic shoes different from regular shoes?",
          answer: "Diabetic shoes feature extra depth, seamless linings to prevent friction, firm heel counters for stability, and protective toe boxes. They're designed to accommodate insoles and prevent injury.",
        },
        {
          question: "Can I get diabetic shoes that look normal?",
          answer: "Absolutely! Today's diabetic footwear comes in many stylish options including dress shoes, casual styles, and athletic shoes – all with therapeutic features.",
        },
        {
          question: "How do I know my diabetic shoes fit correctly?",
          answer: "Shoes should feel snug but not tight, with about a thumb's width of space at the toe. No pressure points should be felt. Our fitting specialists ensure proper fit.",
        },
      ]}
      relatedServices={[
        { name: "Custom Insoles", href: "/services/custom-insoles" },
        { name: "Off-loading Insoles", href: "/services/offloading-insoles" },
        { name: "Podoscan", href: "/services/podoscan" },
      ]}
    />
  );
}
