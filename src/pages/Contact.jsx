// src/pages/Contact.jsx

import { MapPin, Mail, Phone, Globe, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* Company Card */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-6 md:p-8 shadow-lg">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
                  Vaibhav Industries
                </h2>
                <p className="text-sm md:text-base text-primary-foreground/90 mb-6 leading-relaxed">
                  We're here to answer your questions and discuss how we can
                  meet your export requirements with premium Indian agro products.
                </p>

                <div className="space-y-5">

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-70">
                        Location
                      </p>
                      <p className="text-sm md:text-base">
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-70">
                        Email
                      </p>
                      <p className="text-sm md:text-base">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vaibhavindus.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-accent transition"
                        >
                          info@vaibhavindus.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-70">
                        Phone / WhatsApp
                      </p>
                      <p className="text-sm md:text-base">
                        <a
                          href="tel:+919898613009"
                          className="underline hover:text-accent transition"
                        >
                          +91 98986 13009
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                      <Globe className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-70">
                        Website
                      </p>
                      <a
                        href="https://www.vaibhavindus.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base underline hover:text-accent transition"
                      >
                        www.vaibhavindus.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-muted rounded-3xl p-6 md:p-7 shadow-sm border border-border/40">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">
                      Business Hours
                    </h3>
                    <div className="text-sm md:text-base opacity-70 space-y-1.5">
                      <p>Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                      <p>Saturday: 9:00 AM – 2:00 PM IST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (ONLY GMAIL BOX) */}
            <div>
              <div className="bg-card rounded-3xl p-6 md:p-8 shadow-md border border-border/60 text-center space-y-6">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                  Contact Us Directly
                </h2>

                <p className="text-sm md:text-base text-muted-foreground">
                  For export inquiries, bulk orders, prices or packaging —
                  reach out to our team directly on email.
                </p>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <Mail className="h-6 w-6 text-accent" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vaibhavindus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg underline hover:text-accent transition"
                  >
                    info@vaibhavindus.com
                  </a>
                </div>

                <p className="text-xs text-muted-foreground">
                  Clicking the email will open Gmail compose directly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
