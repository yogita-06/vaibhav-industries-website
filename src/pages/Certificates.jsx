// src/pages/Certificates.jsx

import { Globe, Package, Clock, Shield, Users } from "lucide-react";

const Certificates = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Delivering Quality, Reliability, and Global Reach
          </p>
        </div>

        {/* Intro text */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            At Vaibhav Industries, we believe that exporting is not just about trade —
            it’s about trust, relationships, and commitment. We work closely with our
            partners to ensure smooth and professional export operations at every stage.
          </p>
        </div>

        {/* Key Offerings grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Global Export Services */}
          <div className="premium-card p-6 md:p-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                🌍 Global Export Services
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Supplying premium Indian agro products to international markets with full
              compliance and documentation.
            </p>
          </div>

          {/* Private Label & OEM Solutions */}
          <div className="premium-card p-6 md:p-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Package className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                🧾 Private Label & OEM
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We provide customized packaging, branding, and labeling as per your business
              needs for different markets.
            </p>
          </div>

          {/* On-Time & Safe Delivery */}
          <div className="premium-card p-6 md:p-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                ⏱ On-Time & Safe Delivery
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our logistics network ensures every shipment reaches you in perfect condition
              and on schedule.
            </p>
          </div>

          {/* Stringent Quality Control */}
          <div className="premium-card p-6 md:p-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                🔍 Stringent Quality Control
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Each product undergoes multiple checks — from sourcing to packaging — ensuring
              international quality standards.
            </p>
          </div>

          {/* Long-Term Collaboration */}
          <div className="premium-card p-6 md:p-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                💼 Long-Term Collaboration
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We focus on building sustainable business relationships that benefit both sides
              for years to come.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="max-w-3xl mx-auto">
          <div className="premium-card p-7 md:p-9 text-center bg-muted/60">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              With Vaibhav Industries, you don’t just buy a product — you partner with a team
              that genuinely cares about your satisfaction and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
