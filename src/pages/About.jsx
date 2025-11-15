// src/pages/About.jsx

import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Leaf,
  Handshake,
  ShieldCheck,
  Globe2,
  Package,
} from "lucide-react";
import { Button } from "../components/ui/button";

const About = () => {
  const highlights = [
    {
      icon: Leaf,
      title: "Farmer–First Sourcing",
      description:
        "We work directly with local farmers and trusted processors to ensure freshness, traceability and fair pricing.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Before Quantity",
      description:
        "As a growing exporter, we focus on limited products but strict quality checks at every stage of cleaning, grading and packing.",
    },
    {
      icon: Globe2,
      title: "Export-Ready Documentation",
      description:
        "Support for FSSAI compliance, APEDA-related processes and export documentation for smooth shipments.",
    },
  ];

  const values = [
    {
      title: "Honesty & Transparency",
      text: "No exaggerated claims or hidden practices. We clearly share product specifications, moisture levels, grading and packing details.",
    },
    {
      title: "Long-Term Relationships",
      text: "We are building Vaibhav Industries slowly and steadily with clients who value reliability, clear communication and consistency.",
    },
    {
      title: "Careful Handling of Every Order",
      text: "Being a new company, every enquiry and every shipment is important for us. Orders are monitored personally from sourcing to dispatch.",
    },
  ];

  const steps = [
    "Understand your product requirements, packing style and target market.",
    "Share honest samples, photos and specifications for your approval.",
    "Finalize commercial terms, documentation and logistics plan.",
    "Pack, inspect and dispatch your order with regular status updates.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Intro Section */}
      <section className="border-b bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-muted-foreground">
                About Vaibhav Industries
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                A Young Agro Exporter with a Serious Focus on Quality
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Vaibhav Industries is a growing agro-products exporter based in
                Gujarat, India. We may be new as a brand, but our sourcing
                network and understanding of Indian spices, seeds and dry fruits
                comes from years of working closely with farmers and local
                traders.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Instead of making big claims, we believe in starting with
                realistic commitments – clean products, honest communication and
                reliable deliveries. Our goal is to become a long-term partner
                for importers, wholesalers and brands who value transparency and
                consistency over hype.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-gold">
                    Discuss Your Requirements
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Our Product Range
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side card – instead of fake stats, genuine message */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 shadow-lg">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-center mb-6">
                Why Work with a Growing Export Partner?
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed mb-6">
                As a new exporter, Vaibhav Industries treats every enquiry as an
                opportunity to prove our reliability. You are not just another
                order in a long queue – your shipment receives careful attention
                from selection to dispatch.
              </p>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    Flexible with trial orders and mixed-product consignments
                    for new buyers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    Quick and clear communication via email, phone or WhatsApp
                    during the entire process.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    Realistic timelines and honest updates – we prefer clarity
                    over overpromising.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent and quality-driven process from farm to
              shipment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-card p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction and every shipment we
              handle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card border p-7 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                A Simple Process to Start Working Together
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Whether you are an importer, distributor or brand, we will guide
                you step-by-step – from discussing your requirements to packing
                and dispatching your first order with Vaibhav Industries.
              </p>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-3">
                <Handshake className="h-7 w-7 text-accent" />
                Let&apos;s Build a Long-Term Partnership
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed mb-6">
                We understand that choosing a new supplier takes trust. Our aim
                is to make you feel confident about every shipment you book with
                us – through clear details, timely updates and consistent
                quality.
              </p>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <Package className="mt-1 h-5 w-5 text-accent" />
                  <span>Support for small and trial orders to get started.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-accent" />
                  <span>Focus on clean, safe and export-ready packing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe2 className="mt-1 h-5 w-5 text-accent" />
                  <span>
                    Ready to discuss requirements for your specific market or
                    country.
                  </span>
                </li>
              </ul>

              <div className="pt-6">
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-emerald-50"
                  >
                    Contact Our Export Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
