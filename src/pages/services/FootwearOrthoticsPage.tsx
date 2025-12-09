import { Footprints } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function FootwearOrthoticsPage() {
  return (
    <ServiceDetailTemplate
      title="Preventive Footwear & Orthotics"
      subtitle="Customized solutions to protect your feet every step of the way"
      description="Proper footwear and orthotics are fundamental to diabetic foot protection. Our comprehensive footwear program provides personalized solutions ranging from custom insoles to therapeutic shoes, all designed to reduce pressure and prevent complications."
      icon={Footprints}
      category="Footwear & Orthotics"
      categoryColor="bg-green-500/10 text-green-600"
      duration="30-60 minutes fitting"
      recovery="N/A"
      indications={[
        "All diabetic patients with peripheral neuropathy",
        "History of foot ulcers requiring protective footwear",
        "Foot deformities needing accommodation",
        "High-pressure areas identified on pressure mapping",
        "Post-healing maintenance after ulcer resolution",
      ]}
      procedureSteps={[
        "Comprehensive foot assessment and risk evaluation.",
        "3D foot scanning for precise measurements.",
        "Pressure mapping to identify off-loading needs.",
        "Selection of appropriate footwear type and style.",
        "Custom orthotic fabrication based on scan and pressure data.",
        "Fitting session with gait assessment.",
        "Education on proper wear and foot care.",
        "Follow-up to ensure comfort and efficacy.",
      ]}
      candidates={[
        "All diabetic patients (benefits from proper footwear)",
        "Those with loss of protective sensation",
        "Patients with foot deformities or bunions",
        "Individuals with arthritis affecting foot function",
        "Anyone with foot pain or fatigue when walking",
      ]}
      benefits={[
        "Prevents ulcers",
        "Reduces pressure",
        "Improves comfort",
        "Enhances mobility",
      ]}
      faqs={[
        {
          question: "How often should I replace my diabetic shoes?",
          answer: "Typically every 12-18 months, or sooner if they show significant wear. Inspect your shoes regularly for worn areas that could affect protection.",
        },
        {
          question: "Are diabetic shoes covered by insurance?",
          answer: "Many insurance plans cover therapeutic footwear for qualifying diabetic patients. Our team can help verify your coverage and handle documentation.",
        },
        {
          question: "Can diabetic shoes look stylish?",
          answer: "Yes! Modern diabetic footwear comes in many attractive styles. While protection is the priority, you don't have to sacrifice appearance.",
        },
      ]}
      relatedServices={[
        { name: "Custom Insoles", href: "/services/custom-insoles" },
        { name: "Diabetic Footwear", href: "/services/diabetic-footwear" },
        { name: "Off-loading Insoles", href: "/services/offloading-insoles" },
      ]}
    />
  );
}
