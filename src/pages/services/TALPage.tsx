import { Syringe } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function TALPage() {
  return (
    <ServiceDetailTemplate
      title="Tendo-Achilles Lengthening (TAL)"
      subtitle="Surgical release to reduce forefoot pressure and improve mobility"
      description="Tendo-Achilles Lengthening (TAL) is a procedure that lengthens a tight Achilles tendon to reduce excessive pressure on the front of the foot. This is crucial for diabetic patients with equinus deformity, where the tight tendon contributes to forefoot ulcers."
      icon={Syringe}
      category="Preventive Surgical Procedures"
      categoryColor="bg-primary/10 text-primary"
      duration="20-30 minutes"
      recovery="6-8 weeks"
      indications={[
        "Equinus deformity (inability to dorsiflex the ankle)",
        "Forefoot ulcers due to excessive pressure from tight heel cord",
        "Charcot foot with associated Achilles contracture",
        "Failed stretching and physical therapy for tight Achilles",
        "Recurrent metatarsal head ulcers despite off-loading",
      ]}
      procedureSteps={[
        "Patient positioning and local or regional anesthesia administration.",
        "Three small percutaneous incisions are made along the Achilles tendon.",
        "Partial cuts are made at different levels to allow controlled lengthening.",
        "The ankle is gently dorsiflexed to achieve the desired lengthening.",
        "Application of a below-knee cast in neutral position for protection.",
        "Gradual progression from non-weight bearing to full weight bearing over 6 weeks.",
      ]}
      candidates={[
        "Patients with documented equinus contracture on examination",
        "Those with forefoot ulcers and elevated plantar pressures",
        "Individuals with Charcot foot requiring tendon balancing",
        "Patients who have failed conservative stretching programs",
        "Those with adequate vascular supply for healing",
      ]}
      benefits={[
        "Reduces forefoot pressure",
        "Prevents recurrent ulcers",
        "Improves gait mechanics",
        "Minimally invasive technique",
      ]}
      faqs={[
        {
          question: "Will TAL weaken my calf muscle?",
          answer: "You may notice some initial weakness, but with proper rehabilitation, most patients regain full strength. The benefit of reduced forefoot pressure typically far outweighs any minor weakness.",
        },
        {
          question: "How long will I be in a cast?",
          answer: "A cast or walking boot is typically worn for 6 weeks to protect the healing tendon. During this time, you'll gradually progress from non-weight bearing to full weight bearing.",
        },
        {
          question: "Can the tendon re-tighten over time?",
          answer: "With proper stretching exercises and appropriate footwear, most patients maintain the lengthening. Regular follow-up helps monitor for any recurrence.",
        },
      ]}
      relatedServices={[
        { name: "Total Contact Cast", href: "/services/tcc" },
        { name: "Walking Cast", href: "/services/walking-cast" },
        { name: "Pressure Mapping", href: "/services/pedobarography" },
      ]}
    />
  );
}
