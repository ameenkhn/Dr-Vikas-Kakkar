import { Syringe } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function SurgicalOffloadingPage() {
  return (
    <ServiceDetailTemplate
      title="Surgical Off-loading Procedures"
      subtitle="Advanced surgical techniques to redistribute pressure and promote healing"
      description="Surgical off-loading procedures are specialized interventions designed to permanently reduce pressure on vulnerable areas of the diabetic foot. By modifying bone structure or tendon tension, these procedures address the root cause of pressure-related complications."
      icon={Syringe}
      category="Surgical Procedures"
      categoryColor="bg-primary/10 text-primary"
      duration="45-120 minutes"
      recovery="4-8 weeks"
      indications={[
        "Non-healing ulcers due to excessive plantar pressure",
        "Bony prominences creating localized pressure points",
        "Charcot foot deformity with rocker-bottom configuration",
        "Failed conservative off-loading approaches",
        "Metatarsal head prominence with recurrent ulceration",
      ]}
      procedureSteps={[
        "Thorough biomechanical evaluation with pressure mapping to identify exact areas of concern.",
        "Preoperative vascular assessment to ensure adequate blood supply for healing.",
        "Surgical correction of the underlying structural abnormality causing pressure overload.",
        "Immediate post-operative off-loading with TCC or specialized boot.",
        "Progressive rehabilitation with custom orthotic fitting once healed.",
      ]}
      candidates={[
        "Patients with identifiable structural causes of pressure ulcers",
        "Those with adequate healing capacity and blood flow",
        "Individuals who have not responded to conservative treatment",
        "Patients able to comply with post-operative restrictions",
        "Those motivated to prevent future complications",
      ]}
      benefits={[
        "Permanent pressure reduction",
        "Promotes wound healing",
        "Prevents recurrence",
        "Preserves foot function",
      ]}
      faqs={[
        {
          question: "What's the difference between surgical and non-surgical off-loading?",
          answer: "Non-surgical off-loading uses devices like casts or special shoes to temporarily reduce pressure. Surgical off-loading permanently changes foot structure to eliminate pressure points, offering a long-term solution.",
        },
        {
          question: "Will I need special shoes after surgery?",
          answer: "Most patients benefit from custom orthotics or diabetic footwear after healing to optimize pressure distribution and protect the surgical correction.",
        },
        {
          question: "Can this surgery prevent amputation?",
          answer: "Yes, by addressing the underlying cause of recurrent ulcers, surgical off-loading can significantly reduce the risk of progression to amputation.",
        },
      ]}
      relatedServices={[
        { name: "Keller's Arthroplasty", href: "/services/kellers-arthroplasty" },
        { name: "Total Contact Cast", href: "/services/tcc" },
        { name: "Custom Insoles", href: "/services/custom-insoles" },
      ]}
    />
  );
}
