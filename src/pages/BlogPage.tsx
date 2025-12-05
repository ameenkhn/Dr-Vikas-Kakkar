import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const blogPosts = [
  {
    id: 1,
    slug: "preventing-diabetic-foot-ulcers",
    title: "10 Essential Tips for Preventing Diabetic Foot Ulcers",
    excerpt: "Diabetic foot ulcers are a serious complication that can lead to infection and amputation. Learn how to protect your feet with these preventive measures.",
    category: "Prevention",
    author: "Dr. Vikas Kakkar",
    date: "December 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    slug: "understanding-neuropathy",
    title: "Understanding Diabetic Neuropathy: Signs, Symptoms & Treatment",
    excerpt: "Diabetic neuropathy affects millions worldwide. Recognizing the early signs can help prevent serious complications and preserve your quality of life.",
    category: "Education",
    author: "Dr. Vikas Kakkar",
    date: "November 25, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    slug: "importance-of-custom-orthotics",
    title: "Why Custom Orthotics Matter for Diabetic Feet",
    excerpt: "Off-the-shelf insoles may not provide the protection diabetic feet need. Discover the benefits of custom orthotics designed specifically for your feet.",
    category: "Treatment",
    author: "Dr. Vikas Kakkar",
    date: "November 18, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    slug: "wound-care-at-home",
    title: "Diabetic Wound Care: What You Can Do at Home",
    excerpt: "Proper wound care is crucial for healing. Learn the dos and don'ts of caring for diabetic wounds between medical appointments.",
    category: "Self-Care",
    author: "Dr. Vikas Kakkar",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    slug: "when-to-see-specialist",
    title: "When Should You See a Diabetic Foot Specialist?",
    excerpt: "Don't wait until it's too late. Learn the warning signs that indicate you need professional help for your diabetic foot concerns.",
    category: "Prevention",
    author: "Dr. Vikas Kakkar",
    date: "November 3, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    slug: "limb-salvage-surgery",
    title: "Limb Salvage Surgery: Saving Limbs, Saving Lives",
    excerpt: "Amputation is not always the only option. Learn about modern limb salvage techniques that can preserve your mobility and independence.",
    category: "Treatment",
    author: "Dr. Vikas Kakkar",
    date: "October 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Prevention", "Education", "Treatment", "Self-Care"];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog & Articles | Kakkar Clinic - Diabetic Foot Care Insights</title>
        <meta name="description" content="Expert insights on diabetic foot care, prevention tips, and treatment options from Dr. Vikas Kakkar. Stay informed about your foot health." />
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
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Blog</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                Health Insights & Articles
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert advice, educational content, and the latest developments in diabetic foot care 
                and limb salvage surgery from Dr. Vikas Kakkar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container">
            {/* Featured Post */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Link to={`/blog/${blogPosts[0].slug}`} className="group grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>

            {/* Rest of Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
