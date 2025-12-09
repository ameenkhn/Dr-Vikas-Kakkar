import { Bandage } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function PreventiveCastingPage() {
  return (
    <ServiceDetailTemplate
      title="Preventive Casting Techniques"
      subtitle="Specialized casting methods to off-load and protect the diabetic foot"
      description="Preventive casting techniques are cornerstone treatments for diabetic foot ulcers. By redistributing pressure and immobilizing the foot, these methods create an optimal environment for healing while allowing safe mobility."
      icon={Bandage}
      category="Casting Techniques"
      categoryColor="bg-accent/10 text-accent"
      duration="30-60 minutes"
      recovery="Varies by condition"
      indications={[
        "Plantar ulcers requiring off-loading for healing",
        "Charcot neuroarthropathy (acute or subacute)",
        "Post-operative protection after foot surgery",
        "Infected wounds requiring immobilization",
        "Failed healing with other off-loading methods",
      ]}
      procedureSteps={[
        "Assessment of the wound or condition to determine appropriate casting type.",
        "Wound care and dressing application if an ulcer is present.",
        "Application of protective padding to bony prominences.",
        "Careful application of the cast material with proper technique.",
        "Education on cast care and warning signs to watch for.",
        "Regular follow-up for cast changes and wound monitoring.",
      ]}
      candidates={[
        "Patients with diabetic foot ulcers needing off-loading",
        "Those with acute Charcot foot requiring immobilization",
        "Post-operative patients needing protected weight bearing",
        "Individuals committed to following casting restrictions",
        "Patients with adequate home support for cast care",
      ]}
      benefits={[
        "Proven healing rates",
        "Enforced compliance",
        "Protects from injury",
        "Allows safe mobility",
      ]}
      faqs={[
        {
          question: "How often will the cast need to be changed?",
          answer: "Typically every 1-2 weeks for wound monitoring, or more frequently if there are concerns about infection or fit.",
        },
        {
          question: "Can I shower with the cast?",
          answer: "Traditional casts cannot get wet. We provide instructions for keeping the cast dry. Some removable options may allow for bathing with the cast off.",
        },
        {
          question: "What if my foot swells or I have pain?",
          answer: "Elevate your leg and contact us immediately. Increased pain or swelling may indicate a problem requiring cast removal and assessment.",
        },
      ]}
      relatedServices={[
        { name: "Total Contact Cast", href: "/services/tcc" },
        { name: "Walking Cast", href: "/services/walking-cast" },
        { name: "Custom Insoles", href: "/services/custom-insoles" },
      ]}
    />
  );
}
