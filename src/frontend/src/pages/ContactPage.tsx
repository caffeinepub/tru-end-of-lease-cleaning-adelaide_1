import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { CheckCircle, Clock, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const serviceOptions = [
  { id: "end-of-lease", label: "End of Lease Clean" },
  { id: "carpet", label: "Carpet Cleaning" },
  { id: "oven", label: "Oven Cleaning" },
  { id: "window", label: "Window Cleaning" },
  { id: "deep-clean", label: "Deep Clean" },
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
  "Golden Grove",
  "Other",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [moveOutDate, setMoveOutDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitEnquiry, isPending } = useSubmitEnquiry();

  const toggleService = (id: string) => {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedServices = serviceOptions
      .filter((s) => services.includes(s.id))
      .map((s) => s.label)
      .join(", ");

    const bodyText = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Suburb: ${suburb}`,
      `Property Type: ${propertyType}`,
      `Services Needed: ${selectedServices || "Not specified"}`,
      `Move Out Date: ${moveOutDate || "Not specified"}`,
      `Message: ${message || "None"}`,
    ].join("%0D%0A");

    const subject = encodeURIComponent(
      `Bond Cleaning Enquiry - ${name} - ${suburb} - ${propertyType}`,
    );

    const mailtoLink = `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${bodyText}`;

    // Submit to backend
    const fullMessage = `Services: ${selectedServices}. Move Out: ${moveOutDate}. ${message}`;
    submitEnquiry(
      { name, phone, email, suburb, propertyType, message: fullMessage },
      {
        onSuccess: () => {
          setSubmitted(true);
          toast.success("Enquiry submitted! We'll reply within 2 hours.");
        },
        onError: () => {
          // Still open mailto even if backend fails
        },
      },
    );

    // Open mailto link
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get a Free Quote
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 2 hours
            with a fixed price quote.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">
                  Contact Us
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Chat on WhatsApp
                      </p>
                      <a
                        href="https://wa.me/61488841883"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="contact.primary_button"
                        className="text-green-600 font-bold text-lg hover:text-green-700"
                      >
                        0488 841 883
                      </a>
                      <p className="text-foreground/60 text-xs mt-1">
                        Tap to chat on WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Response Time
                      </p>
                      <p className="text-foreground/70 text-sm">
                        We reply within 2 hours
                      </p>
                      <p className="text-foreground/50 text-xs">
                        Available 7 days a week
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Service Area
                      </p>
                      <p className="text-foreground/70 text-sm">
                        All Adelaide suburbs
                      </p>
                      <p className="text-foreground/50 text-xs">
                        Metropolitan Adelaide & surrounds
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Areas We Cover</h3>
                  <div className="flex flex-wrap gap-2">
                    {suburbs.slice(0, 10).map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-secondary text-foreground/70 px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="text-xs text-primary font-medium">
                      + many more
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="text-center py-16 px-8 bg-green-50 rounded-2xl border border-green-200"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-green-800 mb-2">
                    Enquiry Sent!
                  </h3>
                  <p className="text-green-700">
                    Your email client has opened with your enquiry details.
                    We'll get back to you within 2 hours.
                  </p>
                  <p className="text-green-600 mt-3 font-medium">
                    Or WhatsApp us now for an instant reply: 0488 841 883
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-ocid="contact.modal"
                >
                  <h2 className="text-2xl font-display font-bold">
                    Send Your Enquiry
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Johnson"
                        required
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0412 345 678"
                        required
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@gmail.com"
                        required
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="suburb" className="mb-2 block">
                        Suburb *
                      </Label>
                      <Input
                        id="suburb"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        placeholder="e.g. Norwood"
                        required
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-2 block">Property Type *</Label>
                      <Select
                        value={propertyType}
                        onValueChange={setPropertyType}
                        required
                      >
                        <SelectTrigger data-ocid="contact.select">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 bed unit">1 Bed Unit</SelectItem>
                          <SelectItem value="2 bed unit">2 Bed Unit</SelectItem>
                          <SelectItem value="3 bed house">
                            3 Bed House
                          </SelectItem>
                          <SelectItem value="4 bed house">
                            4 Bed House
                          </SelectItem>
                          <SelectItem value="4+ bed house">
                            4+ Bed House
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="moveOutDate" className="mb-2 block">
                        Move Out Date
                      </Label>
                      <Input
                        id="moveOutDate"
                        type="date"
                        value={moveOutDate}
                        onChange={(e) => setMoveOutDate(e.target.value)}
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Services Needed</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center gap-2"
                        >
                          <Checkbox
                            id={service.id}
                            checked={services.includes(service.id)}
                            onCheckedChange={() => toggleService(service.id)}
                            data-ocid="contact.checkbox"
                          />
                          <Label
                            htmlFor={service.id}
                            className="cursor-pointer text-sm"
                          >
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block">
                      Message / Special Requirements
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us anything special about your property, any problem areas, or questions you have..."
                      rows={4}
                      data-ocid="contact.textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                    data-ocid="contact.submit_button"
                  >
                    {isPending ? "Sending..." : "Send My Enquiry"}
                  </Button>

                  <p className="text-center text-foreground/50 text-xs">
                    By submitting this form, your email client will open with
                    your enquiry details ready to send. We reply within 2 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="bg-green-50 border-y border-green-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold text-green-800 mb-3">
            Prefer to Chat? WhatsApp Us Directly
          </h2>
          <p className="text-green-700 mb-6">
            We reply within 2 hours, 7 days a week.
          </p>
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.secondary_button"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp: 0488 841 883
          </a>
        </div>
      </section>
    </div>
  );
}
