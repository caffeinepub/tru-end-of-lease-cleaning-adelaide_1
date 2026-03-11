import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  DollarSign,
  Leaf,
  MapPin,
  MessageCircle,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { suburbs } from "../data/suburbs";

const services = [
  {
    title: "End of Lease Cleaning",
    description:
      "Complete top-to-bottom clean following a real estate–approved checklist.",
    icon: "🏠",
  },
  {
    title: "Bond Cleaning",
    description:
      "Get every cent of your bond back with our thorough bond clean service.",
    icon: "🔑",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Professional steam cleaning removes stains, odours, and allergens.",
    icon: "🧹",
  },
  {
    title: "Oven Cleaning",
    description:
      "We make your oven spotless — the most-checked item on every inspection.",
    icon: "🍳",
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal-clear windows inside and out, tracks and fly screens included.",
    icon: "🪟",
  },
  {
    title: "Deep Cleaning",
    description:
      "For heavily soiled properties that need extra attention and care.",
    icon: "✨",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    description:
      "If your property manager isn't happy, we come back for free within 72 hours.",
  },
  {
    icon: Users,
    title: "Trained & Insured Cleaners",
    description:
      "Our team is fully trained, background-checked, and insured for your peace of mind.",
  },
  {
    icon: ClipboardCheck,
    title: "Real Estate Approved Checklist",
    description:
      "We follow the exact checklist that Adelaide real estate agents use for inspections.",
  },
  {
    icon: DollarSign,
    title: "Affordable Fixed Pricing",
    description:
      "No hidden costs. You get a clear, fixed quote before we start — no surprises.",
  },
  {
    icon: MapPin,
    title: "All Adelaide Suburbs Covered",
    description:
      "From CBD to Glenelg, Mawson Lakes to Morphett Vale — we cover all of Adelaide.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use environmentally friendly, non-toxic cleaning products that are safe for your family.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Norwood, SA",
    rating: 5,
    text: "Absolutely brilliant service! I got my full bond back after Tru did my end of lease clean. They cleaned every single corner — even the oven was spotless. My property manager was impressed. I'll definitely use them again for my next move.",
  },
  {
    name: "Jake T.",
    suburb: "Glenelg, SA",
    rating: 5,
    text: "Booked via WhatsApp and the whole process was so easy. They turned up on time, worked hard all day, and left the place looking brand new. Got my $2,400 bond back in full. Can't recommend them enough!",
  },
  {
    name: "Priya K.",
    suburb: "Mawson Lakes, SA",
    rating: 5,
    text: "I was really stressed about moving out but Tru End of Lease Cleaning made it so much easier. The team was professional, friendly and thorough. My real estate agent said it was one of the best cleans she'd seen. Worth every dollar!",
  },
];

const faqs = [
  {
    q: "What is Bond Cleaning and why is it required?",
    a: "Bond cleaning (also called end of lease cleaning or vacate cleaning) is a thorough top-to-bottom clean of a rental property when a tenant moves out. It is required by most landlords and property managers in Australia to ensure the property is returned in the same condition as when you moved in. If the property is not cleaned to the required standard, your landlord can use your bond money to pay for a professional clean. Getting a proper bond clean done means you get your full bond deposit back — which can be anywhere from $1,000 to $5,000 depending on how long you've been renting.",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because it directly affects whether you get your bond money back. In South Australia, tenants must leave the property reasonably clean. If the place is dirty when you leave, your real estate agent can claim part or all of your bond to cover cleaning costs. A professional bond clean ensures every area meets the high standard required — kitchen, bathrooms, carpets, walls, windows, and more. It also protects your rental history, making it easier to rent your next home.",
  },
  {
    q: "How much for a bond clean?",
    a: "Bond cleaning in Adelaide typically costs between $250 and $800 depending on the size of the property. A 1-bedroom unit usually starts from $250–$350. A 3-bedroom house typically costs $400–$600. A 4-bedroom house can cost $500–$800 or more. Prices also depend on whether you need carpet steam cleaning, oven cleaning, or window cleaning added on. At Tru End of Lease Cleaning Adelaide, we offer transparent fixed pricing with no hidden costs. Contact us for a free quote tailored to your property.",
  },
  {
    q: "What is full bond cleaning?",
    a: "Full bond cleaning means a complete top-to-bottom clean of every area of your rental property. This includes cleaning all rooms, kitchen (including oven, rangehood, stovetop), bathrooms, toilets, laundry, all floors (vacuumed and mopped), skirting boards, light switches, window tracks, fly screens, and more. Many full bond cleans also include carpet steam cleaning and window cleaning as add-ons. A full bond clean follows a real estate–approved checklist to make sure nothing gets missed.",
  },
  {
    q: "Which are the top rated bond cleaning companies near me?",
    a: `Here are the top-rated bond cleaning companies in Adelaide:\n\n1. Jim's Cleaning Adelaide (jimscleaning.com.au) — Jim's Cleaning is one of Australia's most well-known cleaning franchises. They offer end of lease cleaning, carpet cleaning, window cleaning, and more. Their franchised model means consistent, professional service backed by the Jim's brand guarantee. Trained and insured cleaners with a comprehensive checklist.\n\n2. Electrodry Adelaide (electrodry.com.au) — Nationally recognised for their carpet dry cleaning technology. Also offer end of lease packages. Their advanced dry cleaning method is gentler on carpets and dries faster than steam cleaning. Well-reviewed by Adelaide renters and property managers.\n\n3. Clean2Move Adelaide (clean2move.com.au) — Dedicated end of lease specialists following a REISA-approved checklist. They offer transparent upfront pricing, a re-clean guarantee, and are trusted by many Adelaide renters for their specialist focus.\n\n4. Superclean Adelaide (superclean.com.au) — Respected for their attention to detail and reliable, punctual team. Cater to tenants, landlords, and property managers with flexible scheduling and eco-friendly products.\n\n5. Tru End of Lease Cleaning Adelaide (trubondcleaningbrisbane.com) — Your local Adelaide bond cleaning specialists with a 100% bond back guarantee. We cover all Adelaide suburbs, offer upfront fixed pricing, use eco-friendly products, and are available 7 days a week. WhatsApp us on 0488 841 883 for a fast, free quote.`,
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "The best products for bond cleaning are: Selleys Sugar Soap (great for walls and surfaces), Exit Mould spray (for bathroom grout and tiles), Easy-Off Oven Cleaner (for oven and rangehood), Goo Gone (for sticky residue), White King bleach (for toilets and grout), Windex glass cleaner (for windows and mirrors), and Dettol disinfectant (for bathrooms and kitchens). For floors, a pH-neutral floor cleaner works best on tiles and timber. Always test products on a small area first and follow the label instructions.",
  },
  {
    q: "How much does a professional bond cleaning typically cost?",
    a: "A professional bond clean in Adelaide typically costs: 1-bedroom unit: $250–$350. 2-bedroom unit: $320–$450. 3-bedroom house: $400–$600. 4-bedroom house: $500–$800. Carpet steam cleaning adds $80–$200 depending on rooms. Oven cleaning adds $50–$80. Window cleaning adds $50–$150. These prices vary based on the condition of the property and which add-on services you need. At Tru End of Lease Cleaning Adelaide, we give you a clear, fixed quote upfront so there are no surprises on the day.",
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: "For carpet bond cleaning, the best products and tools are: Bissell or Rug Doctor carpet cleaning machines (available at Bunnings or online), Resolve Carpet Cleaner Spray, Vanish Carpet Powder for odours, baking soda and white vinegar for natural stain removal, Woolite Carpet Cleaner for wool or delicate carpets, and OxiClean Carpet Stain Remover for tough stains. For professional-grade results, hire a carpet steam cleaner from Kennards Hire or Bunnings. You can find these products at Woolworths, Coles, or Amazon Australia.",
  },
  {
    q: "How to choose a reliable bond cleaner?",
    a: "To choose a reliable bond cleaner in Adelaide: (1) Check Google reviews — look for companies with 4.5 stars or more and many reviews. (2) Ask if they offer a bond back guarantee or re-clean policy. (3) Make sure they follow a real estate–approved cleaning checklist. (4) Get a fixed price quote upfront — avoid companies that give vague 'from' pricing. (5) Check they are insured and their cleaners are trained. (6) Ask if they have experience with your specific real estate agency. (7) Check how quickly they can fit you in around your move-out date.",
  },
  {
    q: "Can I book a bond cleaning company online with a Satisfaction Guarantee?",
    a: "Yes! You can book Tru End of Lease Cleaning Adelaide online or via WhatsApp. We offer a 100% Satisfaction Guarantee — if your property manager finds anything that needs re-cleaning, we come back and fix it for free within 72 hours of the original clean. No questions asked. Simply fill out our online booking form or WhatsApp us on 0488 841 883. We confirm your booking within 2 hours and send you a detailed checklist of everything we will clean so you know exactly what to expect.",
  },
  {
    q: "How much is a cleaner per hour in Adelaide?",
    a: "A cleaner in Adelaide typically charges $35–$55 per hour for regular domestic cleaning. For specialist end of lease or bond cleaning, hourly rates are usually $45–$65 per hour. Most bond cleaning companies charge a fixed price rather than hourly so you know the total cost upfront. If you need a quick hourly clean for maintenance purposes, expect to pay around $40–$50 per hour. For most tenants, a fixed-price bond clean is better value because the cleaner works until the job is done to the required standard.",
  },
  {
    q: "How much is end of lease clean in Australia?",
    a: "End of lease cleaning in Australia costs on average $350–$700 for a standard 3-bedroom home. Prices vary by state and city: Sydney and Melbourne tend to be slightly more expensive ($400–$800), while Adelaide, Brisbane and Perth are generally more affordable ($300–$650). The final price depends on property size, condition, and add-on services like carpet cleaning and oven cleaning. Always get 2–3 quotes before booking and make sure each quote covers the same scope of work.",
  },
  {
    q: "How much to pay a cleaner for 3 hours?",
    a: "For 3 hours of cleaning in Adelaide, you would typically pay $120–$165 (at $40–$55/hour). This is suitable for a small apartment or a quick maintenance clean. For an end of lease clean, 3 hours is generally not enough for a full bond clean — a standard 3-bedroom home usually takes 6–10 hours. For bond cleaning, always book a fixed-price service so you know the job will be completed to the required standard regardless of how long it takes.",
  },
  {
    q: "What is the 20 minute rule in cleaning?",
    a: "The 20 minute rule in cleaning means you set a timer for 20 minutes and focus only on cleaning for that entire time without getting distracted. This technique helps people who feel overwhelmed by cleaning tasks. In 20 minutes, a good cleaner can scrub a bathroom, clean a kitchen benchtop, or vacuum 2–3 rooms. For bond cleaning, the 20-minute rule is not really enough — a thorough end of lease clean requires several hours of focused work to meet real estate standards.",
  },
  {
    q: "What is bond back cleaning?",
    a: "Bond back cleaning is just another name for end of lease cleaning or vacate cleaning. It means a full professional clean of your rental property done specifically to get your bond deposit back from your landlord. The term 'bond back' refers to the goal: getting 100% of your rental bond returned. A bond back clean covers every area of the property and follows the real estate agent's exit condition report checklist. At Tru End of Lease Cleaning Adelaide, bond back cleaning is our specialty.",
  },
  {
    q: "Is bond cleaning required in WA?",
    a: "In Western Australia (WA), bond cleaning (also called vacate cleaning) is required if the property was professionally cleaned at the start of the tenancy. If the original condition report shows the property was professionally cleaned, tenants are required to have it professionally cleaned when they leave. If it wasn't professionally cleaned at the start, tenants just need to leave it reasonably clean. It's always best to check your original lease agreement and condition report. Getting a professional bond clean done is the safest way to ensure you get your full bond back regardless of which state you're in.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Adelaide's #1 Bond Cleaning Company
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
              Adelaide's Most Trusted End of Lease Cleaning Service
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Get Your Full Bond Back — Guaranteed. Trusted by Adelaide tenants
              since day one. We clean every corner so your landlord is happy and
              you walk away with your full deposit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-cta" data-ocid="hero.primary_button">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold shadow-lg"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.secondary_button"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/assets/generated/hero-end-of-lease-cleaning-adelaide.dim_1200x600.jpg"
              alt="Professional end of lease cleaning service in Adelaide - Tru End of Lease Cleaning"
              className="rounded-2xl shadow-hero w-full object-cover h-80 md:h-96"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> 100% Bond Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Trained & Insured
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> All Adelaide Suburbs
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Free Re-clean Within 72hrs
            </span>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-gradient py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
              Adelaide's Go-To End of Lease Cleaning Team
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We are Adelaide's go-to end of lease cleaning team. We clean every
              corner of your property so your landlord is happy and you get your
              bond back in full. Our trained cleaners follow a detailed
              checklist that real estate agents love. Whether you're in a small
              unit or a big family home, we have the team, the tools, and the
              experience to get the job done right — every single time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">
              Our Cleaning Services
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Everything you need to get your full bond back — all under one
              roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <Link to="/services">
                  <Card className="h-full hover:shadow-card transition-shadow cursor-pointer group border-border">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{service.icon}</div>
                      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" data-ocid="services.primary_button">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">
              Why Choose Tru End of Lease Cleaning?
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              We make your move-out stress-free and your bond return guaranteed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex gap-4 p-5 bg-white rounded-xl shadow-xs border border-border">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">
              What Our Customers Say
            </h2>
            <p className="text-foreground/60">
              Hundreds of happy Adelaide tenants have gotten their bond back
              with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <Card className="h-full shadow-xs border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].slice(0, t.rating).map((starNum) => (
                        <Star
                          key={`${t.name}-star-${starNum}`}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 italic">
                      "{t.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {t.name}
                      </p>
                      <p className="text-foreground/50 text-xs">{t.suburb}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs We Serve */}
      <section className="py-16 bg-white" id="suburbs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">
              End of Lease Cleaning Across Adelaide Suburbs
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              We serve every corner of Adelaide. Click your suburb to find out
              exactly how we help renters there get their full bond back.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {suburbs.map((suburb, i) => (
              <motion.div
                key={suburb.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                data-ocid={`suburbs.item.${i + 1}`}
              >
                <Link
                  to={`/end-of-lease-cleaning-${suburb.slug}` as never}
                  data-ocid="suburbs.link"
                >
                  <Card className="h-full hover:shadow-card hover:border-primary transition-all cursor-pointer group border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            End of Lease Cleaning {suburb.name}
                          </h3>
                          <p className="text-xs text-foreground/50 mt-0.5">
                            SA {suburb.postcode}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-gradient py-16" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/60">
              Everything you need to know about bond and end of lease cleaning
              in Adelaide.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="faq.panel"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q.slice(0, 30)}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-border px-6 shadow-xs"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-4 whitespace-pre-line">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="hero-gradient text-white py-16" id="contact-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Book? Get a Free Quote Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            We reply within 2 hours. 100% bond back guarantee. Serving all
            Adelaide suburbs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" data-ocid="cta.primary_button">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold shadow-lg"
              >
                Book Online Now
              </Button>
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.secondary_button"
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
