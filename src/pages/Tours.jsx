import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Check, X, Clock, Map, Calendar, Info } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Tours() {
  return (
    <>
      <div className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1619382997249-4b126250d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BlZWRib2F0fGVufDB8fDB8fHww"
            alt="About Us"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <Section className="py-20 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Our Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Choose the adventure that fits your schedule. Our 3D2N package is
            the most popular choice for a complete Derawan experience.
          </motion.p>
        </Section>
      </div>

      {/* Package Header */}
      <Section className="py-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2601&auto=format&fit=crop"
                alt="Derawan Boat"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                MOST POPULAR
              </span>
              <h2 className="text-3xl font-bold mb-4">3D2N Derawan Island</h2>
              <p className="text-gray-600 mb-6">
                Explore 4 gorgeous islands in one trip: Derawan, Maratua,
                Kakaban, and Sangalaki. Witness whale sharks, swim with
                non-stinging jellyfish, and meet the giant sea turtles.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price Start From</p>
                  <p className="text-3xl font-bold text-primary">
                    IDR 1,650,000
                  </p>
                  <p className="text-s text-gray-400">
                    + IDR 300,000 for tourist
                  </p>
                  <p className="text-xs text-gray-400">per person</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    <span className="font-semibold">3 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Map className="text-primary" size={20} />
                    <span className="font-semibold">4 Islands</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                Book This Trip
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2601&auto=format&fit=crop"
                alt="Derawan Boat"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">4D3N Labuan Cermin</h2>
              <p className="text-gray-600 mb-6">
                Explore 6 gorgeous islands in one trip: Derawan, Maratua,
                Kakaban, Sangalaki, Sanggalau, and Manimbora island. Witness
                whale sharks, swim with non-stinging jellyfish, Manta Ray, and
                meet the giant sea turtles.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price Start From</p>
                  <p className="text-3xl font-bold text-primary">
                    IDR 3,600,000
                  </p>
                  <p className="text-s text-gray-400">
                    + IDR 300,000 for tourist
                  </p>
                  <p className="text-xs text-gray-400">per person</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    <span className="font-semibold">4 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Map className="text-primary" size={20} />
                    <span className="font-semibold">6 Islands</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                Book This Trip
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Itinerary */}
      <Section className="bg-gray-50">
        <motion.h2 {...fadeIn} className="text-3xl font-bold mb-12 text-center">
          Trip Itinerary
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {/* Day 1 */}
          <motion.div
            {...fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 px-4 z-10">
              <span className="font-bold text-sm">D1</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-900">
                  Arrival & Check-in
                </div>
              </div>
              <div className="text-gray-500 text-sm mb-2">Afternoon</div>
              <p className="text-gray-600">
                Pick up from Berau Airport (BEJ). Transfer to Tanjung Batu port.
                Speedboat to Derawan Island. Check-in and sunset dinner at the
                water villa. Free time for night walk around the village.
              </p>
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            {...fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 px-4 z-10">
              <span className="font-bold text-sm">D2</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-900">Island Hopping</div>
              </div>
              <div className="text-gray-500 text-sm mb-2">
                Full Day (07:00 - 17:00)
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>
                  Visit <strong>Maratua Island</strong> for snorkeling and photo
                  spots.
                </li>
                <li>
                  Swim with stingless jellyfish at <strong>Kakaban Lake</strong>
                  .
                </li>
                <li>Snorkeling at Kakaban wall.</li>
                <li>
                  Visit <strong>Sangalaki</strong> to see Manta Rays and Turtle
                  conservation.
                </li>
                <li>Wait for sunset at Gusung Pasir (Sandbar).</li>
              </ul>
            </div>
          </motion.div>

          {/* Day 3 */}
          <motion.div
            {...fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 px-4 z-10">
              <span className="font-bold text-sm">D3</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-900">
                  Whale Sharks & Departure
                </div>
              </div>
              <div className="text-gray-500 text-sm mb-2">Morning</div>
              <p className="text-gray-600">
                Early morning trip to Talisayan for Whale Shark sightseeing
                (seasonal/optional). Back to Derawan for breakfast and
                check-out. Speedboat to Tanjung Batu and transfer to Berau
                Airport.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Inclusions */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <motion.div {...fadeIn}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Check className="text-green-500" /> What's Included
            </h3>
            <ul className="space-y-3">
              {[
                "Travel Insurance",
                "Private Speedboat for Island Hopping",
                "2 Nights Accommodation (Water Villa available)",
                "Meals (Breakfast, Lunch, Dinner) during tour",
                "Mineral water during on boat",
                "Snorkeling gear (Mask + Snorkel)",
                "Entrance fees to all tourism spots",
                "Professional Guide & Documentation (Drone/GoPro/Mirrorless/HP)",
                "P3K First Aid Kit",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-gray-700">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeIn}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <X className="text-red-500" /> What's Excluded
            </h3>
            <ul className="space-y-3">
              {["Flights to/from Berau (BEJ)", "Personal expenses"].map(
                (item, i) => (
                  <li key={i} className="flex gap-3 items-start text-gray-700">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary/5 rounded-3xl text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="mb-8 text-gray-600">
          Slots are filling up fast for next month. Secure your spot today.
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/628115929789?text=Hi%20I%20want%20to%20book%20a%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Button size="lg">Contact Us to Book</Button>
          </a>
        </div>
      </Section>
    </>
  );
}
