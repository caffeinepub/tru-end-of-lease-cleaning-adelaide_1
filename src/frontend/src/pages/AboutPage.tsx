import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Award,
    title: "Quality Above All",
    description:
      "We never cut corners. Every clean is done to the same high standard we'd want in our own homes.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "We show up on time, every time. We do what we say we will do, and we stand behind our work.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "We know Adelaide's rental market inside out and understand exactly what local real estate agents expect.",
  },
];

const suburbs = [
  "Adelaide CBD",
  "North Adelaide",
  "Glenelg",
  "Norwood",
  "Prospect",
  "Mawson Lakes",
  "Salisbury",
  "Modbury",
  "Tea Tree Gully",
  "Marion",
  "Morphett Vale",
  "Noarlunga",
  "Hackney",
  "Burnside",
  "Unley",
  "Mitcham",
  "Campbelltown",
  "Para Hills",
  "Elizabeth",
  "Parafield",
  "Golden Grove",
  "Aberfoyle Park",
  "Reynella",
  "Victor Harbor",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About Tru End of Lease Cleaning Adelaide
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Adelaide's trusted local bond cleaning company, dedicated to getting
            your full bond back — guaranteed.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/generated/bond-back-guarantee-adelaide.dim_800x500.jpg"
                alt="Tru End of Lease Cleaning Adelaide team - bond back guarantee"
                className="rounded-2xl shadow-card w-full object-cover h-80"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Tru End of Lease Cleaning Adelaide is a local, dedicated bond
                  and end of lease cleaning company serving tenants across all
                  Adelaide suburbs. We started with one simple goal: to give
                  Adelaide renters a reliable, professional cleaning service
                  that takes the stress out of moving out.
                </p>
                <p>
                  Moving out of a rental property is stressful enough without
                  having to worry about whether your clean will be good enough
                  for your property manager. That's where we come in. Our
                  experienced team of professional cleaners know exactly what
                  Adelaide real estate agents look for during a rental
                  inspection — and we clean to that standard every single time.
                </p>
                <p>
                  We are passionate about what we do. We take pride in
                  transforming rental properties from lived-in to
                  inspection-ready. We love hearing from our customers when they
                  call to tell us they got their full bond back. That's what
                  drives us every day.
                </p>
                <p>
                  Our team is fully trained in all aspects of end of lease
                  cleaning, from deep kitchen degreasing to carpet steam
                  cleaning, window cleaning, and bathroom restoration. We use
                  professional-grade, eco-friendly cleaning products that are
                  tough on grime but safe for your family and the environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bond Back Guarantee */}
      <section className="section-gradient py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-4">
              Our 100% Bond Back Guarantee
            </h2>
            <p className="text-foreground/60 text-lg">
              We are so confident in the quality of our work that we back every
              single clean with our 100% Bond Back Guarantee.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  If your property manager or real estate agent is not fully
                  satisfied with any part of our clean, we will return to the
                  property within 72 hours and re-clean the affected areas —
                  completely free of charge. No arguments, no excuses, no extra
                  cost to you.
                </p>
                <p>
                  This guarantee exists because we believe in the quality of our
                  work. We've helped hundreds of Adelaide tenants get their full
                  bond back, and we know what it takes to pass a rental
                  inspection. Our detailed checklist, experienced team, and
                  professional equipment mean that the vast majority of our
                  customers pass their inspection first time.
                </p>
                <p>
                  But we know that rental inspections can be unpredictable.
                  That's why our guarantee gives you total peace of mind. When
                  you book Tru End of Lease Cleaning Adelaide, you are not just
                  booking a clean — you are booking a result.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Free re-clean within 72 hours",
                  "No questions asked",
                  "100% satisfaction guaranteed",
                  "Covers all areas of the clean",
                  "Valid for the full property",
                  "Real estate agent approved",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-10">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border shadow-xs text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-foreground/60 text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-gradient py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Adelaide Suburbs We Serve
          </h2>
          <p className="text-foreground/60 text-center mb-8">
            We cover all of Adelaide — from the inner city to the outer suburbs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {suburbs.map((suburb) => (
              <span
                key={suburb}
                className="bg-white border border-border text-foreground/70 text-sm px-4 py-2 rounded-full shadow-xs"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free quote today. We reply within 2 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" data-ocid="about.primary_button">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Get a Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.secondary_button"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
