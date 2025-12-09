import { Scan } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function FootAssessmentPage() {
  return (
    <ServiceDetailTemplate
      title="Preventive Foot Assessment & Diagnostics"
      subtitle="Comprehensive evaluation to identify and prevent foot complications"
      description="Our preventive foot assessment combines clinical examination with advanced diagnostic technology to identify risk factors before they lead to serious problems. Early detection is the key to preventing diabetic foot complications."
      icon={Scan}
      category="Assessment & Diagnostics"
      categoryColor="bg-blue-500/10 text-blue-600"
      duration="45-60 minutes"
      recovery="N/A - diagnostic"
      indications={[
        "All diabetic patients (recommended annually or more frequently based on risk)",
        "History of previous foot ulcers or amputation",
        "Known peripheral neuropathy or vascular disease",
        "Foot deformities or callus formation",
        "Symptoms like numbness, tingling, or cold feet",
      ]}
      procedureSteps={[
        "Detailed medical history review focusing on diabetes control and complications.",
        "Visual inspection of both feet for deformities, skin changes, and nail conditions.",
        "Neurological testing using monofilaments, tuning fork, and reflexes.",
        "Vascular assessment including pulse examination and ankle-brachial index.",
        "Biomechanical evaluation of foot structure and gait.",
        "Advanced diagnostics as indicated (Neuro Scan, Podoscan, Pressure Mapping).",
        "Risk stratification and personalized prevention plan development.",
      ]}
      candidates={[
        "All patients with diabetes (Type 1 and Type 2)",
        "Those with prediabetes and risk factors",
        "Patients with peripheral neuropathy from any cause",
        "Individuals with foot pain, numbness, or changes",
        "Anyone concerned about their foot health",
      ]}
      benefits={[
        "Early risk detection",
        "Personalized prevention",
        "Comprehensive evaluation",
        "Prevents complications",
      ]}
      faqs={[
        {
          question: "How often should I have a foot assessment?",
          answer: "Low-risk patients should have annual assessments. Moderate-risk patients every 3-6 months, and high-risk patients every 1-3 months. Your doctor will determine your schedule.",
        },
        {
          question: "Is the assessment painful?",
          answer: "The assessment is non-invasive and should not be painful. Some tests check your ability to feel light touch or vibration, which may feel unusual but not painful.",
        },
        {
          question: "What should I bring to my assessment?",
          answer: "Wear shoes and socks you typically wear. Bring a list of medications, your glucose log, and any questions you have about foot care.",
        },
      ]}
      relatedServices={[
        { name: "Neuro Scan", href: "/services/neuro-scan" },
        { name: "Podoscan", href: "/services/podoscan" },
        { name: "Pressure Mapping", href: "/services/pedobarography" },
      ]}
    />
  );
}
