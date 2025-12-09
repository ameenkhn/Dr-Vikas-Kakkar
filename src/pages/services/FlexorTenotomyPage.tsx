import { Syringe } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function FlexorTenotomyPage() {
  return (
    <ServiceDetailTemplate
      title="Flexor Tenotomy"
      subtitle="Minimally invasive procedure to correct claw and hammer toe deformities"
      description="Flexor tenotomy is a quick, minimally invasive procedure that releases tight flexor tendons to straighten curled toes. This simple intervention can prevent or heal tip-of-toe ulcers in diabetic patients with neuropathy and toe deformities."
      icon={Syringe}
      category="Preventive Surgical Procedures"
      categoryColor="bg-primary/10 text-primary"
      duration="10-15 minutes per toe"
      recovery="1-2 weeks"
      indications={[
        "Claw toe or hammer toe deformity",
        "Ulcer at the tip of the toe due to deformity",
        "Callus formation on toe tips from curled position",
        "Failure of conservative measures like padding and footwear",
        "Multiple toe deformities requiring correction",
      ]}
      procedureSteps={[
        "Local anesthetic is injected at the base of the affected toe.",
        "A tiny stab incision is made on the bottom of the toe.",
        "The flexor tendon is identified and divided, allowing the toe to straighten.",
        "No stitches are typically required – just a small dressing.",
        "The patient can walk immediately in a protective sandal.",
        "Dressing changes at home until the small wound heals.",
      ]}
      candidates={[
        "Patients with flexible or semi-rigid toe deformities",
        "Those with tip-of-toe ulcers or calluses",
        "Diabetic patients with peripheral neuropathy",
        "Individuals wanting a quick, office-based procedure",
        "Patients who cannot tolerate more extensive surgery",
      ]}
      benefits={[
        "Minimally invasive",
        "Immediate weight bearing",
        "No stitches required",
        "Quick healing time",
      ]}
      faqs={[
        {
          question: "Is flexor tenotomy painful?",
          answer: "The procedure is performed under local anesthesia, so you won't feel pain during the procedure. Afterward, most patients experience only mild discomfort that resolves quickly.",
        },
        {
          question: "Can multiple toes be treated at once?",
          answer: "Yes, multiple toes can be treated in the same session. This is common in patients with multiple toe deformities.",
        },
        {
          question: "Will my toe be floppy after the procedure?",
          answer: "The toe will be straighter and more relaxed, but not floppy. Most patients find the toe functions better after the tight tendon is released.",
        },
      ]}
      relatedServices={[
        { name: "Keller's Arthroplasty", href: "/services/kellers-arthroplasty" },
        { name: "Custom Insoles", href: "/services/custom-insoles" },
        { name: "Diabetic Footwear", href: "/services/diabetic-footwear" },
      ]}
    />
  );
}
