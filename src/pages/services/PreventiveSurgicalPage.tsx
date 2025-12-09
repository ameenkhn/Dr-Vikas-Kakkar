import { Syringe } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function PreventiveSurgicalPage() {
  return (
    <ServiceDetailTemplate
      title="Preventive Surgical Procedures"
      subtitle="Proactive surgical interventions to prevent diabetic foot complications"
      description="Our preventive surgical procedures are designed to address biomechanical abnormalities and high-risk conditions before they lead to ulceration or amputation. These carefully planned interventions can significantly reduce the risk of serious complications in diabetic patients."
      icon={Syringe}
      category="Surgical Procedures"
      categoryColor="bg-primary/10 text-primary"
      duration="30-90 minutes"
      recovery="2-6 weeks"
      indications={[
        "High-risk foot deformities that predispose to ulceration",
        "Recurrent ulcers in specific pressure areas",
        "Toe deformities causing friction and skin breakdown",
        "Equinus contracture with forefoot pressure overload",
        "Previous partial amputation requiring prophylactic procedures",
      ]}
      procedureSteps={[
        "Comprehensive pre-operative assessment including vascular studies and biomechanical analysis to identify all risk factors.",
        "Detailed surgical planning with consideration of wound healing potential and patient mobility goals.",
        "Procedure performed under appropriate anesthesia with meticulous tissue handling to optimize healing.",
        "Application of appropriate off-loading device or cast to protect the surgical site.",
        "Regular follow-up monitoring with progressive weight-bearing as healing allows.",
      ]}
      candidates={[
        "Diabetic patients with identified biomechanical abnormalities",
        "Patients with adequate vascular supply for healing",
        "Those with recurrent ulcers despite conservative management",
        "Patients committed to post-operative compliance and follow-up",
        "Individuals seeking to preserve limb function and mobility",
      ]}
      benefits={[
        "Prevents future ulceration",
        "Reduces amputation risk",
        "Improves foot function",
        "Long-term cost savings",
      ]}
      faqs={[
        {
          question: "How do I know if I need preventive surgery?",
          answer: "Your doctor will evaluate your foot structure, pressure points, and history of ulcers to determine if preventive surgery could benefit you. Risk factors include toe deformities, high-pressure areas, and recurrent wounds.",
        },
        {
          question: "Is the surgery painful?",
          answer: "The procedure is performed under anesthesia, so you won't feel pain during surgery. Post-operative discomfort is managed with appropriate pain medication and typically subsides within a few days.",
        },
        {
          question: "How long until I can walk normally?",
          answer: "Recovery varies by procedure, but most patients begin protected weight-bearing within 2-4 weeks and return to normal activities within 6-8 weeks with proper healing.",
        },
      ]}
      relatedServices={[
        { name: "Keller's Arthroplasty", href: "/services/kellers-arthroplasty" },
        { name: "Flexor Tenotomy", href: "/services/flexor-tenotomy" },
        { name: "TAL", href: "/services/tal" },
        { name: "Flap Surgery", href: "/services/flap-surgery" },
      ]}
    />
  );
}
