import { Footprints } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function OffloadingInsolesPage() {
  return (
    <ServiceDetailTemplate
      title="Off-loading Insoles / Pressure-reducing Insoles"
      subtitle="Specialized insoles to protect high-pressure areas and promote healing"
      description="Off-loading insoles are specifically designed to reduce pressure on vulnerable or healing areas of the foot. Using strategic cutouts, softer materials, and advanced cushioning, these insoles protect at-risk spots from the forces of walking."
      icon={Footprints}
      category="Footwear & Orthotics"
      categoryColor="bg-green-500/10 text-green-600"
      duration="1-2 weeks fabrication"
      recovery="N/A"
      indications={[
        "Active or healing plantar ulcers requiring pressure reduction",
        "High-pressure areas identified on pedobarography",
        "Post-ulcer maintenance to prevent recurrence",
        "Localized calluses from excessive pressure",
        "Bony prominences at risk for breakdown",
      ]}
      procedureSteps={[
        "Pressure mapping to precisely identify high-pressure zones.",
        "3D foot scanning for accurate insole fabrication.",
        "Design of off-loading features targeting specific areas.",
        "Selection of appropriate multi-density materials.",
        "Fabrication with pressure-reducing cutouts or soft spots.",
        "Fitting and pressure re-test to verify effectiveness.",
        "Education on proper use and care.",
        "Regular follow-up to monitor and adjust.",
      ]}
      candidates={[
        "Patients with active ulcers transitioning from TCC",
        "Those with healed ulcers at risk for recurrence",
        "Individuals with pressure hot spots on mapping",
        "Patients with metatarsal head prominence",
        "Anyone with localized areas of high pressure",
      ]}
      benefits={[
        "Targeted pressure relief",
        "Promotes ulcer healing",
        "Prevents recurrence",
        "Customized protection",
      ]}
      faqs={[
        {
          question: "How do off-loading insoles work?",
          answer: "They use a combination of cutouts (apertures), softer materials in specific zones, and strategic contouring to shift pressure away from vulnerable areas to surrounding healthier tissue.",
        },
        {
          question: "Can I use these in any shoes?",
          answer: "Off-loading insoles work best in shoes with adequate depth and a rigid sole. They're often paired with diabetic shoes or athletic shoes for best results.",
        },
        {
          question: "How often should off-loading insoles be replaced?",
          answer: "Due to the compression of specialized materials, off-loading insoles typically need replacement every 6-12 months, or sooner if cushioning decreases.",
        },
      ]}
      relatedServices={[
        { name: "Pressure Mapping", href: "/services/pedobarography" },
        { name: "Total Contact Cast", href: "/services/tcc" },
        { name: "Diabetic Footwear", href: "/services/diabetic-footwear" },
      ]}
    />
  );
}
