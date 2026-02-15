import { Section } from '../components/ui/Section';
import { Card, CardImage } from '../components/ui/Card';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
            <img 
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2694&auto=format&fit=crop" 
                alt="About Us" 
                className="w-full h-full object-cover opacity-50"
            />
        </div>
        {/* <div className="relative z-10 p-4">
            <h1 className="text-5xl font-bold mb-4">About ngetripkuy</h1>
            <p className="text-xl max-w-2xl mx-auto">Connecting travelers to the beauty of Borneo since 2020.</p>
        </div> */}

        <Section className="py-20 text-center z-10">
          <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
     
              className="text-5xl font-bold mb-4"
          >
              About ngetripkuy
          </motion.h1>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl max-w-2xl mx-auto">
              Connecting travelers to the beauty of Borneo since 2020.
          </motion.p>
        </Section>
      </div>

      {/* Mission */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-loose mb-12">
                At <strong>ngetripkuy</strong>, we believe that travel should be more than just visiting a place; 
                it should be about connecting with nature and local culture. Our mission is to provide 
                sustainable, fun, and hassle-free tours to Derawan Islands, ensuring that our guests 
                leave with unforgettable memories while respecting the delicate marine ecosystem.
            </p>
        </div>
      </Section>

      {/* Team/Values */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                    alt="Our Team" 
                    className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-6">Local Adventurers</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    We are a team of locals who grew up exploring these waters. 
                    We know every hidden cove, every turtle nesting spot, and the best time to see the dolphins.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-semibold">Passionate Guides</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-semibold">Sustainable Tourism</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-semibold">Community Driven</span>
                    </li>
                </ul>
            </div>
        </div>
      </Section>
    </>
  );
}
