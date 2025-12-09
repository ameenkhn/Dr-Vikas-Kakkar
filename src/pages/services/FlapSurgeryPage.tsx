import { Syringe } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function FlapSurgeryPage() {
  return (
    <ServiceDetailTemplate
      title="Flap Reconstructive Surgery"
      subtitle="Advanced tissue coverage for complex diabetic foot wounds"
      description="Flap reconstructive surgery involves transferring healthy tissue to cover wounds that cannot heal on their own. For high-risk or recurrent ulcer areas in diabetic feet, this technique provides durable soft tissue coverage and can be limb-saving."
      icon={Syringe}
      category="Preventive Surgical Procedures"
      categoryColor="bg-primary/10 text-primary"
      duration="2-4 hours"
      recovery="8-12 weeks"
      indications={[
        "Large or deep ulcers with exposed bone or tendon",
        "Wounds over weight-bearing surfaces requiring durable coverage",
        "Recurrent ulcers at the same location despite treatment",
        "Post-surgical defects requiring soft tissue reconstruction",
        "Wounds that have failed to respond to conservative care",
      ]}
      procedureSteps={[
        "Comprehensive wound assessment and vascular evaluation to ensure adequate blood supply.",
        "Debridement of all non-viable tissue to create a clean wound bed.",
        "Selection of appropriate flap based on wound location and size – local, regional, or free flap.",
        "Meticulous surgical transfer of the tissue flap with attention to blood supply.",
        "Careful wound closure and application of protective dressing.",
        "Close monitoring in the immediate post-operative period for flap viability.",
        "Gradual rehabilitation with protected weight bearing as healing allows.",
      ]}
      candidates={[
        "Patients with complex wounds not amenable to simpler treatments",
        "Those with adequate vascular supply (may require revascularization first)",
        "Individuals motivated to comply with post-operative restrictions",
        "Patients with reasonable nutritional status for healing",
        "Those seeking limb salvage as an alternative to amputation",
      ]}
      benefits={[
        "Durable wound coverage",
        "Limb-saving potential",
        "Restores tissue padding",
        "Prevents recurrence",
      ]}
      faqs={[
        {
          question: "What is the success rate for flap surgery in diabetic patients?",
          answer: "With proper patient selection and surgical technique, success rates exceed 80%. The key factors are adequate blood supply, infection control, and post-operative compliance.",
        },
        {
          question: "How long is the hospital stay?",
          answer: "Most patients stay 3-7 days for monitoring, depending on the complexity of the procedure and flap type used.",
        },
        {
          question: "Will I need additional surgeries?",
          answer: "Some flaps require a secondary procedure (debulking) to optimize appearance, but many patients achieve good results with a single surgery.",
        },
      ]}
      relatedServices={[
        { name: "Total Contact Cast", href: "/services/tcc" },
        { name: "Preventive Surgery", href: "/services/preventive-surgical" },
        { name: "Walking Cast", href: "/services/walking-cast" },
      ]}
    />
  );
}
