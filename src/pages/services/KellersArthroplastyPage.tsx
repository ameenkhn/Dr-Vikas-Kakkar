import { Syringe } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function KellersArthroplastyPage() {
  return (
    <ServiceDetailTemplate
      title="Keller's Arthroplasty"
      subtitle="Joint-preserving surgery to relieve pressure on the great toe"
      description="Keller's Arthroplasty is a surgical procedure that removes a portion of the proximal phalanx of the great toe to relieve pressure, reduce deformity, and prevent or heal ulcers. This time-tested technique is particularly effective for diabetic patients with rigid hallux deformities."
      icon={Syringe}
      category="Preventive Surgical Procedures"
      categoryColor="bg-primary/10 text-primary"
      duration="30-45 minutes"
      recovery="3-4 weeks"
      indications={[
        "Rigid hallux valgus with ulceration risk",
        "Hallux rigidus causing pressure on the tip of the toe",
        "Non-healing ulcer on the great toe due to deformity",
        "Severe arthritis of the first metatarsophalangeal joint",
        "Previous failed conservative treatment for toe deformity",
      ]}
      procedureSteps={[
        "Local or regional anesthesia is administered for patient comfort.",
        "A small incision is made over the affected joint.",
        "The base of the proximal phalanx is carefully excised to decompress the joint.",
        "Soft tissue is balanced to maintain toe alignment.",
        "Wound closure with appropriate dressing and protective splinting.",
        "Transition to protective footwear as healing progresses.",
      ]}
      candidates={[
        "Diabetic patients with great toe deformity",
        "Those with adequate blood supply to the foot",
        "Patients with ulcers or pre-ulcerative lesions on the great toe",
        "Individuals with limited joint mobility making fusion unnecessary",
        "Patients seeking to avoid more extensive surgery",
      ]}
      benefits={[
        "Immediate pressure relief",
        "Minimally invasive",
        "Quick recovery time",
        "Preserves toe function",
      ]}
      faqs={[
        {
          question: "Will I be able to walk after Keller's Arthroplasty?",
          answer: "Yes, most patients can begin protected walking within a few days using a special post-operative shoe. Full normal walking typically resumes within 3-4 weeks.",
        },
        {
          question: "Is this procedure permanent?",
          answer: "Yes, the procedure provides permanent relief. The removed bone does not regrow, and the pressure reduction is long-lasting.",
        },
        {
          question: "Will my toe look different after surgery?",
          answer: "The toe may appear slightly shorter, but this is usually not noticeable in shoes. The cosmetic result is generally good while achieving the functional goal of pressure relief.",
        },
      ]}
      relatedServices={[
        { name: "Flexor Tenotomy", href: "/services/flexor-tenotomy" },
        { name: "TAL", href: "/services/tal" },
        { name: "Custom Insoles", href: "/services/custom-insoles" },
      ]}
    />
  );
}
