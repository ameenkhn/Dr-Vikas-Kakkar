import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import BookingPage from "./pages/BookingPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";

// Service detail pages
import PreventiveSurgicalPage from "./pages/services/PreventiveSurgicalPage";
import SurgicalOffloadingPage from "./pages/services/SurgicalOffloadingPage";
import KellersArthroplastyPage from "./pages/services/KellersArthroplastyPage";
import FlexorTenotomyPage from "./pages/services/FlexorTenotomyPage";
import TALPage from "./pages/services/TALPage";
import FlapSurgeryPage from "./pages/services/FlapSurgeryPage";
import PreventiveCastingPage from "./pages/services/PreventiveCastingPage";
import TCCPage from "./pages/services/TCCPage";
import WalkingCastPage from "./pages/services/WalkingCastPage";
import FootAssessmentPage from "./pages/services/FootAssessmentPage";
import NeuroScanPage from "./pages/services/NeuroScanPage";
import PodoscanPage from "./pages/services/PodoscanPage";
import PedobarographyPage from "./pages/services/PedobarographyPage";
import FootwearOrthoticsPage from "./pages/services/FootwearOrthoticsPage";
import CustomInsolesPage from "./pages/services/CustomInsolesPage";
import DiabeticFootwearPage from "./pages/services/DiabeticFootwearPage";
import OffloadingInsolesPage from "./pages/services/OffloadingInsolesPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Service Detail Pages */}
            <Route path="/services/preventive-surgical" element={<PreventiveSurgicalPage />} />
            <Route path="/services/surgical-offloading" element={<SurgicalOffloadingPage />} />
            <Route path="/services/kellers-arthroplasty" element={<KellersArthroplastyPage />} />
            <Route path="/services/flexor-tenotomy" element={<FlexorTenotomyPage />} />
            <Route path="/services/tal" element={<TALPage />} />
            <Route path="/services/flap-surgery" element={<FlapSurgeryPage />} />
            <Route path="/services/preventive-casting" element={<PreventiveCastingPage />} />
            <Route path="/services/tcc" element={<TCCPage />} />
            <Route path="/services/walking-cast" element={<WalkingCastPage />} />
            <Route path="/services/foot-assessment" element={<FootAssessmentPage />} />
            <Route path="/services/neuro-scan" element={<NeuroScanPage />} />
            <Route path="/services/podoscan" element={<PodoscanPage />} />
            <Route path="/services/pedobarography" element={<PedobarographyPage />} />
            <Route path="/services/footwear-orthotics" element={<FootwearOrthoticsPage />} />
            <Route path="/services/custom-insoles" element={<CustomInsolesPage />} />
            <Route path="/services/diabetic-footwear" element={<DiabeticFootwearPage />} />
            <Route path="/services/offloading-insoles" element={<OffloadingInsolesPage />} />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<PrivacyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
