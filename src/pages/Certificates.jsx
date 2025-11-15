import { useState } from "react";
import { Award, FileCheck, X } from "lucide-react";
import fssaiCert from "../../src/assets/fssai-cert.jpg";
import exportCert from "../../src/assets/export-cert.jpg";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // ✅ Only 2 certificates now
  const certificates = [
    {
      name: "FSSAI Certificate",
      image: fssaiCert,
      icon: Award,
      description:
        "Food Safety and Standards Authority of India certification ensuring our products meet national food safety standards.",
    },
    {
      name: "Export License",
      image: exportCert,
      icon: FileCheck,
      description:
        "Official Indian Government Export License authorizing international trade of agricultural products.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Certifications & Compliance
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Maintaining the highest standards through certified quality assurance and regulatory compliance
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="premium-card p-6 cursor-pointer group"
              onClick={() => setSelectedCert(cert.image)}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <cert.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Certificate Preview */}
              <div className="relative overflow-hidden rounded-lg border-2 border-accent/20 group-hover:border-accent/40 transition-colors">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium">
                    Click to view full size
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Statement */}
        <div className="premium-card p-8 md:p-12 bg-muted/50 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Commitment to Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Vaibhav Industries, we maintain strict adherence to all international food safety standards, export regulations, and quality control protocols. Our certifications reflect our unwavering commitment to delivering products that meet and exceed global expectations.
            </p>

            {/* Updated badges (APEDA + QA removed) */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">
                FSSAI Certified
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">
                Export Licensed
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">
                ISO Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
