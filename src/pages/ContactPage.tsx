import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Kakkar Clinic - Dr. Vikas Kakkar</title>
        <meta name="description" content="Contact Kakkar Clinic for appointments, inquiries, or emergencies. Call, email, or visit us at our Delhi location." />
      </Helmet>

      <Layout>
        <div className="pt-20">
          <Contact />
        </div>
      </Layout>
    </>
  );
}
