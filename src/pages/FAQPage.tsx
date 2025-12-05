import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Kakkar Clinic</title>
        <meta name="description" content="Find answers to common questions about diabetic foot care, appointments, procedures, and payment options at Kakkar Clinic." />
      </Helmet>

      <Layout>
        <div className="pt-20">
          <FAQ />
        </div>
        <CTA />
      </Layout>
    </>
  );
}
