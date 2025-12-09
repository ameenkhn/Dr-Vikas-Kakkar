import { Scan } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function PodoscanPage() {
  return (
    <ServiceDetailTemplate
      title="Podoscan / 3D Foot Scan"
      subtitle="Precision 3D imaging for custom orthotic design"
      description="Our Podoscan technology creates detailed 3D images of your feet, capturing every contour with millimeter accuracy. This data is essential for designing custom orthotics and insoles that perfectly match your unique foot anatomy."
      icon={Scan}
      category="Assessment & Diagnostics"
      categoryColor="bg-blue-500/10 text-blue-600"
      duration="10-15 minutes"
      recovery="N/A - diagnostic"
      indications={[
        "Need for custom orthotics or insoles",
        "Foot deformities requiring detailed assessment",
        "Pre-operative surgical planning",
        "Monitoring changes in foot structure over time",
        "Fitting for custom diabetic footwear",
      ]}
      procedureSteps={[
        "You stand or sit on the scanning platform as directed.",
        "The scanner captures multiple images of your feet from all angles.",
        "3D model is generated in real-time showing your exact foot shape.",
        "Measurements are automatically extracted – arch height, width, length, etc.",
        "Data is saved for comparison with future scans.",
        "Results are used to design custom orthotics or footwear.",
      ]}
      candidates={[
        "Patients requiring custom insoles or orthotics",
        "Those with foot deformities or structural abnormalities",
        "Diabetic patients needing precision-fit footwear",
        "Athletes or active individuals with specific needs",
        "Anyone interested in understanding their foot structure",
      ]}
      benefits={[
        "Precision measurement",
        "Non-contact scanning",
        "Quick and easy",
        "Perfect fit guarantee",
      ]}
      faqs={[
        {
          question: "Does the scan involve radiation?",
          answer: "No, the Podoscan uses optical technology (light and cameras) – no radiation is involved. It's completely safe and can be repeated as often as needed.",
        },
        {
          question: "Do I need to prepare for the scan?",
          answer: "Simply arrive with clean, bare feet. If you have very long toenails, trimming them may help with accuracy.",
        },
        {
          question: "How is this different from a foot tracing?",
          answer: "Unlike flat tracings, 3D scanning captures the entire contour of your foot including arch shape and height, allowing for much more accurate orthotic design.",
        },
      ]}
      relatedServices={[
        { name: "Custom Insoles", href: "/services/custom-insoles" },
        { name: "Diabetic Footwear", href: "/services/diabetic-footwear" },
        { name: "Pressure Mapping", href: "/services/pedobarography" },
      ]}
    />
  );
}
