import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Sun, Camera, Shirt, DollarSign, Plug, Droplets } from "lucide-react";

const tips = [
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: "Best Time to Visit",
    content:
      "The best time to visit is during the dry season from April to October. The sea is calmer, perfect for boat trips and underwater visibility.",
  },
  {
    icon: <Shirt className="w-8 h-8 text-primary" />,
    title: "What to Wear",
    content:
      "Bring light, breathable clothing, swimwear, sunglasses, and a hat. Don't forget reef-safe sunscreen to protect the marine life.",
  },
  {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "Stay Hydrated",
    content:
      "The tropical heat can be intense. We provide mineral water, but bringing your own reusable bottle is highly encouraged to reduce plastic waste.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Cash is King",
    content:
      "ATMs are scarce on the islands. Please withdraw enough cash in Berau or Balikpapan before heading to the port. Credit cards are rarely accepted.",
  },
  {
    icon: <Plug className="w-8 h-8 text-primary" />,
    title: "Electricity",
    content:
      "Electricity on Derawan Island is usually available 24/7, but power outages can happen. Bring a power bank for your devices.",
  },
  {
    icon: <Camera className="w-8 h-8 text-primary" />,
    title: "Photography",
    content:
      "Drones are allowed. Underwater cameras (GoPro) are a must! We also provide documentation services included in your package.",
  },
];

export default function TravelTips() {
  return (
    <>
      <div className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2694&auto=format&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        {/* <Section className="py-20 bg-primary/5 text-center z-10">
        <h1 className="text-4xl font-bold mb-4">Travel Tips</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
            Prepare for your journey to paradise. Here is everything you need to know before you go.
        </p>
      </Section> */}

        <Section className="py-20 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Travel Tips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Prepare for your journey to paradise. Here is everything you need to
            know before you go.
          </motion.p>
        </Section>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
              <p className="text-gray-600">{tip.content}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Need more information?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            If you have specific dietary requirements or questions about
            traveling with children/seniors, feel free to ask.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/628115929789?text=Hi%20I%20want%20to%20book%20a%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <Button size="lg">Contact Us</Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
