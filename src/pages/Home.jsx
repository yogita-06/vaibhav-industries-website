// src/pages/Home.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  Mail,
  CheckCircle2,
  Globe,
  Package,
  Clock,
  Shield,
} from "lucide-react";

import { Button } from "../components/ui/button";

import makhanaImg from "../assets/makhana.jpg";
import cardamomImg from "../assets/cardamom.jpg";
import cuminImg from "../assets/cumin.jpg";
import sesameImg from "../assets/sesame.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    { src: makhanaImg, alt: "Premium Makhana" },
    { src: cardamomImg, alt: "Green Cardamom" },
    { src: sesameImg, alt: "Sesame Seeds" },
    { src: cuminImg, alt: "Cumin Seeds" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const trustFeatures = [
    { icon: CheckCircle2, text: "FSSAI Certified" },
    { icon: Globe, text: "APEDA Export Compliance" },
    { icon: Shield, text: "Ethical Sourcing" },
    { icon: Package, text: "Multi-Stage Quality Checks" },
    { icon: Clock, text: "On-Time Global Delivery" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Dark green background like 1st screenshot */}
        <div className="absolute inset-0 bg-[#0f3b2b] z-10" />

        <div className="container mx-auto px-4 relative z-20 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-emerald-200/80">
              Premium Indian Agro Exports
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Vaibhav Industries
            </h1>

            <p className="text-xl md:text-2xl font-serif italic text-primary-foreground/90">
              Exporting the Taste and Quality of India to the World
            </p>

            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Based in Gujarat, India&apos;s global trade hub, Vaibhav Industries
              specializes in exporting premium spices, dry fruits, oilseeds,
              grains, pulses, makhana and cardamom. We partner with trusted
              farmers and processors to deliver high-quality, authentic Indian
              agro products that meet international standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-gold group w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Download Product Catalogue
              </Button>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Export Team
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-primary-foreground/80 text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300" />
                FSSAI &amp; APEDA Compliant
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300" />
                Direct Sourcing from Farmers
              </span>
            </div>
          </div>

          {/* Right - Image Carousel */}
          <div className="relative h-[320px] md:h-[420px] lg:h-[460px]">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            ))}

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-accent w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-muted py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-foreground/80"
              >
                <feature.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products / Image Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Premium Agro Products from India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
              A curated selection of high-quality, export-ready products trusted by
              global buyers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Makhana */}
            <div className="rounded-2xl overflow-hidden shadow-xl group bg-card">
              <div className="overflow-hidden">
                <img
                  src={makhanaImg}
                  alt="Makhana"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Premium Makhana
                </h3>
              </div>
            </div>

            {/* Cardamom */}
            <div className="rounded-2xl overflow-hidden shadow-xl group bg-card">
              <div className="overflow-hidden">
                <img
                  src={cardamomImg}
                  alt="Cardamom"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Green Cardamom
                </h3>
              </div>
            </div>

            {/* Cumin */}
            <div className="rounded-2xl overflow-hidden shadow-xl group bg-card">
              <div className="overflow-hidden">
                <img
                  src={cuminImg}
                  alt="Cumin"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Cumin Seeds (Jeera)
                </h3>
              </div>
            </div>

            {/* Sesame */}
            <div className="rounded-2xl overflow-hidden shadow-xl group bg-card">
              <div className="overflow-hidden">
                <img
                  src={sesameImg}
                  alt="Sesame"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Sesame Seeds
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Vaibhav Industries can meet your export
            requirements with premium Indian agro products.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gold">
              Get in Touch Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
