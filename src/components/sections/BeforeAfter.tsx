import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import before1 from "../../assets/before.jpg";
import after1 from "../../assets/after.jpg";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  caption: string;
}

function BeforeAfterSlider({ before, after, caption }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 5));
        }}
      >
        {/* After Image (Background) */}
        <img
          src={after}
          alt="After treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before}
            alt="Before treatment"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (sliderPosition / 100)}%` }}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-background shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-primary rounded-full" />
              <div className="w-0.5 h-4 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm font-medium">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          After
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-3 text-center">{caption}</p>
    </div>
  );
}

// Placeholder images - replace with actual before/after images
const cases = [
  {
    id: 1,
    before: before1,
    after: after1,
    caption: "Diabetic foot ulcer healing - 8 week treatment progression",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop&grayscale",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop",
    caption: "Wound reconstruction - Complete healing achieved",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop&grayscale",
    after: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop",
    caption: "Post-surgical recovery - Restored mobility",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28" id="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Results</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the transformative results of our treatments. Drag the slider to compare before and after.
          </p>
        </motion.div>

        {/* Consent Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-muted/50 rounded-xl p-4 mb-10 flex items-start gap-3 max-w-3xl mx-auto"
        >
          <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            All images are shared with patient consent and are for educational purposes only. 
            Individual results may vary. Please consult with Dr. Kakkar to understand what results 
            you can expect based on your specific condition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                caption={item.caption}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
