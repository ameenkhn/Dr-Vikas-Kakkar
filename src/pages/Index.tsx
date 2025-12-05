import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kakkar Clinic - Dr. Vikas Kakkar | Diabetic Foot Care & Limb Salvage Specialist</title>
        <meta 
          name="description" 
          content="Expert diabetic foot care, limb salvage surgery, and plastic surgery by Dr. Vikas Kakkar. 25+ years experience. Book your appointment today." 
        />
        <meta name="keywords" content="diabetic foot care, limb salvage, plastic surgery, Dr Vikas Kakkar, wound care, Delhi" />
        <link rel="canonical" href="https://kakkarclinic.com" />
      </Helmet>

      <Layout>
        <Hero />
        <Services />
        <About />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </Layout>

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Kakkar Clinic",
            "description": "Expert diabetic foot care, limb salvage surgery, and plastic surgery by Dr. Vikas Kakkar",
            "url": "https://kakkarclinic.com",
            "telephone": "+919876543210",
            "email": "info@kakkarclinic.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Medical Complex, Sector 15",
              "addressLocality": "New Delhi",
              "postalCode": "110001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.6288",
              "longitude": "77.2066"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              }
            ],
            "priceRange": "$$",
            "image": "https://kakkarclinic.com/og-image.jpg",
            "sameAs": [
              "https://facebook.com/kakkarclinic",
              "https://instagram.com/kakkarclinic"
            ]
          })
        }}
      />
    </>
  );
};

export default Index;
