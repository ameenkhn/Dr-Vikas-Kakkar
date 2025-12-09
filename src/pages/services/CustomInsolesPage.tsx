import { Footprints } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export default function CustomInsolesPage() {
  return (
    <ServiceDetailTemplate
      title="Custom Insoles"
      subtitle="Precision-crafted insoles designed for your unique feet"
      description="Our custom insoles are manufactured using your 3D foot scan and pressure mapping data to provide optimal support, cushioning, and pressure redistribution. Each pair is unique to your feet and your specific needs."
      icon={Footprints}
      category="Footwear & Orthotics"
      categoryColor="bg-green-500/10 text-green-600"
      duration="2-3 weeks fabrication"
      recovery="N/A"
      indications={[
        "Diabetic neuropathy requiring pressure redistribution",
        "Plantar fasciitis or heel pain",
        "Flat feet or high arches causing discomfort",
        "Leg length discrepancy",
        "Arthritis affecting foot mechanics",
      ]}
      procedureSteps={[
        "Initial consultation to understand your needs and symptoms.",
        "Comprehensive foot examination including gait analysis.",
        "3D foot scanning to capture precise measurements.",
        "Pressure mapping to identify areas needing off-loading.",
        "Material selection based on your activity level and condition.",
        "Fabrication in our lab using CAD/CAM technology.",
        "Fitting and adjustment for optimal comfort.",
        "Break-in period guidance and follow-up.",
      ]}
      candidates={[
        "Diabetic patients needing protective insoles",
        "Athletes seeking performance optimization",
        "Workers who stand for long hours",
        "Patients with foot pain or fatigue",
        "Anyone with abnormal foot mechanics",
      ]}
      benefits={[
        "Perfect fit",
        "Targeted pressure relief",
        "Long-lasting support",
        "Multiple material options",
      ]}
      faqs={[
        {
          question: "How long do custom insoles last?",
          answer: "With normal use, custom insoles typically last 2-5 years. Diabetic patients may need replacement sooner (annually) due to material compression.",
        },
        {
          question: "Can I use my custom insoles in different shoes?",
          answer: "Yes, if the shoes have similar sizing and depth. We recommend having insoles for each pair of frequently worn shoes.",
        },
        {
          question: "Will custom insoles fit in my regular shoes?",
          answer: "Custom insoles work best in shoes with removable insoles and adequate depth. We can recommend appropriate footwear to pair with your orthotics.",
        },
      ]}
      relatedServices={[
        { name: "Podoscan", href: "/services/podoscan" },
        { name: "Pressure Mapping", href: "/services/pedobarography" },
        { name: "Diabetic Footwear", href: "/services/diabetic-footwear" },
      ]}
    />
  );
}