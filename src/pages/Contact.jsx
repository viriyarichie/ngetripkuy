import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <div className="relative h-[360px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2694&auto=format&fit=crop"
            alt="Contact"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-2xl px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-white/80"
          >
            Ready to book your trip or have some questions? We’re here to help.
          </motion.p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-12">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone / WhatsApp</p>
                    <a
                      href="https://wa.me/628115929789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold"
                    >
                      +62 811-5929-789
                    </a>
                    <p className="text-sm text-gray-400">
                      Mon – Sun, 9am – 9pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <p className="text-gray-600">ngetripkuy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Office</p>
                    <p className="text-gray-600">
                      Tarakan, North Kalimantan, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <details className="group bg-white p-4 rounded-xl border border-gray-100">
                  <summary className="font-semibold flex justify-between items-center cursor-pointer">
                    How do I book a tour?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    You can book by contacting us via WhatsApp. We require a 30%
                    deposit to secure your dates.
                  </p>
                </details>

                <details className="group bg-white p-4 rounded-xl border border-gray-100">
                  <summary className="font-semibold flex justify-between items-center cursor-pointer">
                    Is snorkeling gear included?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Yes! Mask and snorkel are included. Fins are available for
                    rent if needed.
                  </p>
                </details>

                <details className="group bg-white p-4 rounded-xl border border-gray-100">
                  <summary className="font-semibold flex justify-between items-center cursor-pointer">
                    Can you arrange airport transfer?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Absolutely. Our packages typically start from Berau Airport
                    (BEJ) or Tanjung Batu Port.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — WHATSAPP CTA */}
          <div className="bg-primary/5 rounded-3xl p-10 text-center shadow-sm sticky top-28">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Plan Your Trip?
            </h2>

            <p className="mb-8 text-gray-600 max-w-md mx-auto">
              Chat directly with our team on WhatsApp and get instant answers
              about packages, availability, and prices.
            </p>

            <a
              href="https://wa.me/628115929789?text=Hi%20I%20want%20to%20ask%20about%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center"
            >
              <Button size="lg">Chat on WhatsApp</Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
