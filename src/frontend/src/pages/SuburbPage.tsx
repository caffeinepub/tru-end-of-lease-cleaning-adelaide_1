import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MessageCircle, Star } from "lucide-react";
import { useEffect } from "react";

export interface SuburbData {
  name: string;
  slug: string;
  postcode: string;
  metaTitle: string;
  metaDescription: string;
  heroAlt: string;
  heroImage: string;
  secondImage: string;
  secondImageAlt: string;
  intro: string;
  body1: string;
  body2: string;
  body3: string;
  checklist: string[];
  nearbySuburbs: { name: string; slug: string }[];
}

interface SuburbPageProps {
  suburb: SuburbData;
}

export default function SuburbPage({ suburb }: SuburbPageProps) {
  useEffect(() => {
    document.title = suburb.metaTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setOgMeta = (property: string, content: string) => {
      let el = document.querySelector(
        `meta[property="${property}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", suburb.metaDescription);
    setMeta(
      "keywords",
      `end of lease cleaning ${suburb.name}, bond cleaning ${suburb.name}, vacate cleaning ${suburb.name} Adelaide, bond clean ${suburb.name}`,
    );
    setOgMeta("og:title", suburb.metaTitle);
    setOgMeta("og:description", suburb.metaDescription);
    setOgMeta("og:type", "website");
    setOgMeta(
      "og:url",
      `https://truendofleasecleaningadelaide.com.au/end-of-lease-cleaning-${suburb.slug}`,
    );

    // Canonical
    let canonical = document.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://truendofleasecleaningadelaide.com.au/end-of-lease-cleaning-${suburb.slug}`,
    );

    return () => {
      document.title =
        "Tru End of Lease Cleaning Adelaide | Bond Back Guaranteed";
    };
  }, [suburb]);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {suburb.name}, SA {suburb.postcode}
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-4">
              End of Lease Cleaning {suburb.name} — Get Your Bond Back
            </h1>
            <p className="text-white/85 text-lg mb-6 leading-relaxed">
              {suburb.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" data-ocid="suburb.primary_button">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="suburb.secondary_button"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>
          </div>
          <div>
            <img
              src={suburb.heroImage}
              alt={suburb.heroAlt}
              className="rounded-2xl shadow-hero w-full object-cover h-72 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> 100% Bond Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Trained & Insured Cleaners
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Free Re-clean Within 72hrs
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Serving {suburb.name} Daily
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold mb-3">
                  Bond Cleaning in {suburb.name} Made Easy
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  {suburb.body1}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-3">
                  What We Clean in Your {suburb.name} Property
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {suburb.body2}
                </p>
                <ul className="space-y-2">
                  {suburb.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src={suburb.secondImage}
                alt={suburb.secondImageAlt}
                className="rounded-2xl w-full object-cover h-64"
              />
              <div>
                <h3 className="text-xl font-display font-bold mb-3">
                  Why {suburb.name} Renters Choose Tru
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {suburb.body3}
                </p>
              </div>
              {/* Star rating */}
              <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm">5.0 / 5 Stars</p>
                  <p className="text-xs text-foreground/60">
                    Rated by {suburb.name} tenants on Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Book Your {suburb.name} Bond Clean Today
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            We reply within 2 hours. 100% bond back guarantee. Serving{" "}
            {suburb.name} and all surrounding suburbs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" data-ocid="suburb.cta_button">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Book Online Now
              </Button>
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: 0488 841 883
            </a>
          </div>
        </div>
      </section>

      {/* Nearby suburbs */}
      {suburb.nearbySuburbs.length > 0 && (
        <section className="py-12 section-gradient">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-display font-bold mb-6 text-center">
              We Also Clean in Nearby Suburbs
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {suburb.nearbySuburbs.map((s) => (
                <Link
                  key={s.slug}
                  to={`/end-of-lease-cleaning-${s.slug}` as never}
                  data-ocid="suburb.link"
                  className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to all suburbs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <p className="text-foreground/70 mb-3 text-sm">
                See all suburbs we service in Adelaide
              </p>
              <Link to="/" data-ocid="suburb.home_link">
                <Button variant="outline" size="sm">
                  View All Adelaide Suburbs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
