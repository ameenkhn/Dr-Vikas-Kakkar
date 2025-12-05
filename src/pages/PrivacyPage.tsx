import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Kakkar Clinic</title>
        <meta name="description" content="Privacy policy for Kakkar Clinic. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <Layout>
        <section className="pt-28 pb-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-display font-bold text-foreground mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-foreground font-medium">Last updated: December 1, 2024</p>

                <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you book an appointment, 
                  contact us, or sign up for our newsletter. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Medical history and health information relevant to your treatment</li>
                  <li>Appointment preferences and communication preferences</li>
                  <li>Payment information for services rendered</li>
                </ul>

                <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Schedule and manage your appointments</li>
                  <li>Provide medical care and treatment</li>
                  <li>Communicate with you about your care</li>
                  <li>Send appointment reminders and follow-up communications</li>
                  <li>Process payments for services</li>
                  <li>Improve our services and patient experience</li>
                </ul>

                <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your consent for referrals to other healthcare providers</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect the rights and safety of our patients and staff</li>
                </ul>

                <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. Medical 
                  records are maintained in accordance with applicable healthcare regulations.
                </p>

                <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt out of marketing communications</li>
                </ul>

                <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-foreground">
                  Email: privacy@kakkarclinic.com<br />
                  Phone: +91 98765 43210<br />
                  Address: 123 Medical Complex, Sector 15, New Delhi - 110001
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
