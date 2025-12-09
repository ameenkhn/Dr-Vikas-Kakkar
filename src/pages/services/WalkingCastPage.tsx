import { Bandage } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function WalkingCastPage() {
  return (
    <ServiceDetailTemplate
      title="Walking Cast / Removable Walker Boot"
      subtitle="Versatile off-loading solutions for healing and protection"
      description="Walking casts and removable walker boots provide effective off-loading while offering flexibility for wound care and bathing. These devices are essential tools in the diabetic foot treatment arsenal, suitable for various conditions and healing stages."
      icon={Bandage}
      category="Casting Techniques"
      categoryColor="bg-accent/10 text-accent"
      duration="30-45 minutes fitting"
      recovery="Varies by condition"
      indications={[
        "Diabetic foot ulcers in compliant patients",
        "Post-operative protection after foot surgery",
        "Charcot foot (subacute or chronic stages)",
        "Fractures requiring protected weight bearing",
        "Transition from TCC as ulcer heals",
      ]}
      procedureSteps={[
        "Assessment of the condition and selection of appropriate device.",
        "Wound care and dressing if applicable.",
        "Fitting of the walking cast or boot with attention to pressure distribution.",
        "Adjustments to straps and padding for optimal fit.",
        "Gait training to ensure safe ambulation.",
        "Education on wear schedule and importance of compliance.",
        "Regular follow-up to monitor healing and adjust as needed.",
      ]}
      candidates={[
        "Patients needing off-loading but requiring removability",
        "Those with conditions requiring frequent wound inspection",
        "Individuals who can reliably keep the device on as instructed",
        "Patients transitioning out of a TCC",
        "Those with balance or mobility concerns making TCC unsafe",
      ]}
      benefits={[
        "Removable for care",
        "Adjustable fit",
        "Allows wound checks",
        "Good for transitions",
      ]}
      faqs={[
        {
          question: "How many hours a day should I wear the walking boot?",
          answer: "Ideally, wear it at all times when weight bearing or standing. You may remove it only for sleeping, bathing, and wound care if approved by your doctor.",
        },
        {
          question: "Can I get the boot wet?",
          answer: "The boot itself can handle some moisture, but remove it for bathing. Never wear it in the shower as this can damage the padding and affect fit.",
        },
        {
          question: "How do I know if the boot fits correctly?",
          answer: "A properly fitted boot should feel snug but not tight, with no areas of excessive pressure. If you notice any redness or pressure marks, contact us for adjustment.",
        },
      ]}
      relatedServices={[
        { name: "Total Contact Cast", href: "/services/tcc" },
        { name: "Custom Insoles", href: "/services/custom-insoles" },
        { name: "Diabetic Footwear", href: "/services/diabetic-footwear" },
      ]}
    />
  );
}
