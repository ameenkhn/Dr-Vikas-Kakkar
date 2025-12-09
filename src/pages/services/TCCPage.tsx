import { Bandage } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function TCCPage() {
  return (
    <ServiceDetailTemplate
      title="Total Contact Cast (TCC)"
      subtitle="The gold standard for healing diabetic foot ulcers"
      description="Total Contact Cast (TCC) is considered the gold standard for off-loading plantar diabetic foot ulcers. By distributing pressure evenly across the entire sole and ensuring compliance, TCC achieves healing rates superior to other methods."
      icon={Bandage}
      category="Casting Techniques"
      categoryColor="bg-accent/10 text-accent"
      duration="45-60 minutes"
      recovery="4-12 weeks to heal"
      indications={[
        "Non-infected plantar diabetic foot ulcers",
        "Neuropathic ulcers in patients with sensory loss",
        "Ulcers that have failed to heal with other methods",
        "Midfoot Charcot neuroarthropathy",
        "Post-surgical off-loading requirements",
      ]}
      procedureSteps={[
        "Thorough wound assessment and debridement of any callus or non-viable tissue.",
        "Application of appropriate wound dressing based on ulcer characteristics.",
        "Placement of minimal padding over bony prominences to prevent pressure points.",
        "Application of well-molded plaster or fiberglass cast in total contact with the plantar surface.",
        "Cast extended to below the knee for stability and to prevent removal.",
        "Education on weight bearing limits and warning signs.",
        "Weekly cast changes for wound monitoring and care.",
      ]}
      candidates={[
        "Patients with Grade 1 or 2 plantar ulcers (Wagner classification)",
        "Those without active infection or significant ischemia",
        "Patients able to balance and walk safely in a cast",
        "Individuals without severe visual impairment preventing self-monitoring",
        "Those committed to weekly follow-up appointments",
      ]}
      benefits={[
        "Highest healing rates",
        "Ensures compliance",
        "Equal pressure distribution",
        "Proven effectiveness",
      ]}
      faqs={[
        {
          question: "Why is TCC better than a removable cast?",
          answer: "TCC ensures complete compliance – patients cannot remove it, guaranteeing continuous off-loading. Studies show significantly better healing rates with TCC compared to removable devices.",
        },
        {
          question: "Can I drive with a TCC?",
          answer: "No, you should not drive while wearing a TCC. Arrange for alternative transportation to your appointments.",
        },
        {
          question: "What happens if the cast gets wet?",
          answer: "A wet cast must be replaced immediately as it can cause skin maceration and infection. Use a cast cover when bathing.",
        },
      ]}
      relatedServices={[
        { name: "Walking Cast", href: "/services/walking-cast" },
        { name: "Pressure Mapping", href: "/services/pedobarography" },
        { name: "Custom Insoles", href: "/services/custom-insoles" },
      ]}
    />
  );
}
