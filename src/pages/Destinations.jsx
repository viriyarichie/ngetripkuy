import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';

const destinations = [
  {
    name: "Derawan Island",
    description: "Known for its turtle conservation, crystal clear waters, and traditional water villas. The heart of the archipelago.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2694&auto=format&fit=crop"
  },
  {
    name: "Kakaban Island",
    description: "Home to the famous stingless jellyfish lake, a rare prehistoric natural wonder surrounded by dense mangrove forests.",
    image: "https://images.unsplash.com/photo-1692271373579-2d7c5740441d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Maratua Island",
    description: "The 'Maldives of Indonesia' with stunning turquoise lagoons, luxury resorts, and high cliffs dropping into the sea.",
    image: "https://images.unsplash.com/photo-1578508493865-1d07b46182c1?q=80&w=2669&auto=format&fit=crop"
  },
  {
    name: "Sangalaki Island",
    description: "A sanctuary for Manta Rays and green turtles. The best spot for diving and witnessing baby turtles hatch.",
    image: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Whale Shark Point",
    description: "Located near Talisayan, this is where you can swim alongside the gentle giants of the ocean in their natural habitat.",
    image: "https://images.unsplash.com/photo-1540206395-688085723adb?q=80&w=2669&auto=format&fit=crop"
  },
  {
    name: "Gusung Pasir",
    description: "A pristine sandbar that emerges at low tide, offering perfect white sand surrounded by turquoise water for miles.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop"
  }
];

export default function Destinations() {
  return (
    <>
      <div className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden"> 
      
        <div className="absolute inset-0 bg-gray-900 z-0">
          <img 
              src="https://images.unsplash.com/photo-1659559108523-4bd5d4f17fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyb3BpY2FsJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D" 
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
              The Islands
          </motion.h1>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl max-w-2xl mx-auto">
              Discover the unique charm of each island in the Derawan Archipelago.
          </motion.p>
        </Section>
      </div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <Card className="h-full">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={dest.image} 
                                alt={dest.name} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                        <CardContent className="pt-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">{dest.name}</h3>
                            <p className="text-gray-600 leading-relaxed">{dest.description}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>
    </>
  );
}
