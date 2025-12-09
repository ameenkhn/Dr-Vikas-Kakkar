import { Scan } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function NeuroScanPage() {
  return (
    <ServiceDetailTemplate
      title="Neuro Scan (Neuropathy Screening)"
      subtitle="Advanced neurological assessment for early neuropathy detection"
      description="Our Neuro Scan provides comprehensive neurological assessment to detect diabetic peripheral neuropathy at its earliest stages. Early detection allows for interventions that can slow progression and prevent the complications of sensory loss."
      icon={Scan}
      category="Assessment & Diagnostics"
      categoryColor="bg-blue-500/10 text-blue-600"
      duration="30-45 minutes"
      recovery="N/A - diagnostic"
      indications={[
        "All diabetic patients as part of annual screening",
        "Symptoms of numbness, tingling, or burning in feet",
        "History of foot ulcers (indicates likely neuropathy)",
        "Unexplained balance problems or frequent falls",
        "Poor blood sugar control increasing neuropathy risk",
      ]}
      procedureSteps={[
        "Review of symptoms including any sensory changes, pain, or weakness.",
        "Quantitative sensory testing to measure detection thresholds for touch, vibration, and temperature.",
        "Monofilament testing at key points to assess protective sensation.",
        "Nerve conduction studies if indicated for detailed nerve function assessment.",
        "Autonomic function testing for sweating and temperature regulation.",
        "Risk score calculation and detailed report generation.",
        "Discussion of results and management recommendations.",
      ]}
      candidates={[
        "All patients with diabetes duration >5 years",
        "Those with poor glycemic control (high HbA1c)",
        "Patients with symptoms suggesting neuropathy",
        "Individuals with other diabetic complications",
        "Anyone with unexplained foot problems or gait changes",
      ]}
      benefits={[
        "Early detection",
        "Quantitative results",
        "Tracks progression",
        "Guides treatment",
      ]}
      faqs={[
        {
          question: "What does it feel like to have neuropathy?",
          answer: "Common symptoms include numbness, tingling ('pins and needles'), burning sensations, or pain, often starting in the toes and progressing upward. Some patients have no symptoms initially.",
        },
        {
          question: "Can neuropathy be reversed?",
          answer: "While nerve damage is often permanent, early detection and improved glucose control can slow or stop progression. Some symptoms may improve with treatment.",
        },
        {
          question: "Is the testing uncomfortable?",
          answer: "Most tests are painless. Nerve conduction studies involve small electrical impulses that feel like brief tingling – slightly uncomfortable but well tolerated.",
        },
      ]}
      relatedServices={[
        { name: "Foot Assessment", href: "/services/foot-assessment" },
        { name: "Podoscan", href: "/services/podoscan" },
        { name: "Diabetic Footwear", href: "/services/diabetic-footwear" },
      ]}
    />
  );
}
