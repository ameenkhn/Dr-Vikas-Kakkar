import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const categories = ["All", "Clinic", "Procedures", "Equipment", "Events"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop", category: "Clinic", title: "Reception Area" },
  { id: 2, src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop", category: "Clinic", title: "Consultation Room" },
  { id: 3, src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop", category: "Equipment", title: "Advanced Diagnostics" },
  { id: 4, src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop", category: "Equipment", title: "Surgical Suite" },
  { id: 5, src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop", category: "Procedures", title: "Patient Care" },
  { id: 6, src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop", category: "Clinic", title: "Waiting Lounge" },
  { id: 7, src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop", category: "Equipment", title: "3D Foot Scanner" },
  { id: 8, src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop", category: "Events", title: "Medical Conference 2024" },
  { id: 9, src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", category: "Procedures", title: "Wound Assessment" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const currentImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage) 
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImageIndex === -1) return;
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Kakkar Clinic</title>
        <meta name="description" content="Explore our state-of-the-art clinic facilities, advanced equipment, and patient care at Kakkar Clinic." />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                Photo Gallery
              </h1>
              <p className="text-lg text-muted-foreground">
                Take a virtual tour of our facilities and see the care environment we've created for our patients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="container">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-muted border border-border"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence>
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <p className="text-background font-medium">{image.title}</p>
                        <p className="text-background/70 text-sm">{image.category}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-foreground" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-background" />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-background" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-background" />
              </button>

              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-4xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredImages.find(img => img.id === selectedImage) && (
                  <>
                    <img
                      src={filteredImages.find(img => img.id === selectedImage)?.src}
                      alt={filteredImages.find(img => img.id === selectedImage)?.title}
                      className="max-w-full max-h-[75vh] rounded-lg object-contain"
                    />
                    <div className="text-center mt-4">
                      <p className="text-background font-medium">
                        {filteredImages.find(img => img.id === selectedImage)?.title}
                      </p>
                      <p className="text-background/60 text-sm">
                        {currentImageIndex + 1} of {filteredImages.length}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
}
