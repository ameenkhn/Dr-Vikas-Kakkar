import { Activity } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function PedobarographyPage() {
  return (
    <ServiceDetailTemplate
      title="Foot Pressure Mapping (Pedobarography)"
      subtitle="Dynamic analysis to identify high-pressure ulcer risk areas"
      description="Pedobarography measures the pressure distribution under your feet while standing and walking. This dynamic assessment identifies high-pressure areas at risk for ulceration, enabling targeted off-loading interventions."
      icon={Activity}
      category="Assessment & Diagnostics"
      categoryColor="bg-blue-500/10 text-blue-600"
      duration="20-30 minutes"
      recovery="N/A - diagnostic"
      indications={[
        "Risk assessment for plantar ulcer development",
        "Planning for custom orthotic or footwear prescription",
        "Post-operative assessment after pressure-reducing surgery",
        "Evaluating effectiveness of current off-loading devices",
        "Recurrent ulcers requiring pressure analysis",
      ]}
      procedureSteps={[
        "Calibration of the pressure platform for accurate measurements.",
        "Static standing assessment to measure pressure at rest.",
        "Dynamic walking assessment – multiple passes across the platform.",
        "Data collection with synchronized video for gait analysis.",
        "Computer analysis generating color-coded pressure maps.",
        "Peak pressure identification and comparison with normal values.",
        "Discussion of results and off-loading recommendations.",
      ]}
      candidates={[
        "Diabetic patients with neuropathy (loss of protective sensation)",
        "Those with foot deformities causing abnormal pressure distribution",
        "Patients with history of plantar ulcers",
        "Individuals with calluses indicating high-pressure areas",
        "Anyone needing evidence-based orthotic prescription",
      ]}
      benefits={[
        "Identifies risk areas",
        "Guides treatment",
        "Objective measurements",
        "Tracks improvement",
      ]}
      faqs={[
        {
          question: "What do the pressure maps show?",
          answer: "The maps use colors (like a heat map) to show pressure levels. Red indicates high pressure, yellow moderate, and blue/green low pressure. High-pressure areas are at greater ulcer risk.",
        },
        {
          question: "Will I walk barefoot for the test?",
          answer: "Yes, initial testing is done barefoot to see your natural pressure pattern. Additional tests may be done with your orthotics or shoes to evaluate their effectiveness.",
        },
        {
          question: "How accurate is pressure mapping?",
          answer: "Modern platforms measure pressure with excellent accuracy and reproducibility. Results correlate well with actual ulcer risk when combined with clinical assessment.",
        },
      ]}
      relatedServices={[
        { name: "Custom Insoles", href: "/services/custom-insoles" },
        { name: "Off-loading Insoles", href: "/services/offloading-insoles" },
        { name: "Podoscan", href: "/services/podoscan" },
      ]}
    />
  );
}
