import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardImage, CardHeader } from '../components/ui/Card';
import { MapPin, Calendar, Clock, Star, Users, ShieldCheck, Heart } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-900">
            <img 
                src="https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?q=80&w=2603&auto=format&fit=crop" 
                alt="Derawan Island" 
                className="w-full h-full object-cover opacity-60"
            />
        </div>
        
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Discover Paradise in <br/> <span className="text-primary">Derawan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-gray-100"
          >
            Experience the crystal clear waters and swimming with gentle whale sharks. 
            The adventure of a lifetime awaits.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/tours"><Button size="lg" className="w-full sm:w-auto">View Packages</Button></Link>
            <Link to="/contact"><Button size="lg" variant="white" className="w-full sm:w-auto">Plan Your Trip</Button></Link>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="text-center">
        <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Welcome to ngetripkuy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are a passionate team dedicated to showing you the best of Derawan Islands. 
              From the stingless jellyfish of Kakaban to the manta rays of Sangalaki, 
              we handle all the details so you can focus on making memories.
            </p>
        </motion.div>
      </Section>

      {/* Featured Package */}
      <div className="bg-gray-50">
        <Section>
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div className="flex-1" {...fadeIn}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1573808645321-beaa7ab67839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoYWxlJTIwc2hhcmt8ZW58MHx8MHx8fDA%3D" 
                            alt="Swimming with Whale Sharks" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
                <div className="flex-1 space-y-6">
                    <motion.div {...fadeIn}>
                        <div className="flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-sm mb-2">
                            <Star className="w-4 h-4" /> Recommended Tour
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">3D2N Derawan Paradise</h3>
                        <p className="text-gray-600 mb-6">
                            Our signature package covers all the must-see spots. Includes accommodation, 
                            boat transport, meals, and snorkeling gear. Perfect for a weekend getaway.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Clock className="text-primary w-6 h-6" />
                                <div>
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <p className="font-semibold">3 Days, 2 Night</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="text-primary w-6 h-6" />
                                <div>
                                    <p className="text-sm text-gray-500">Group Size</p>
                                    <p className="font-semibold">2 - 12 Pax</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-primary">IDR 2.500k</span>
                            <span className="text-gray-400">/ person</span>
                        </div>
                        <Link to="/tours" className="inline-block mt-6">
                            <Button>See Full Itinerary</Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </Section>
      </div>

      {/* Why Choose Us */}
      <Section>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Travel With Us?</h2>
            <p className="text-gray-600">We don't just guide you; we care for you like family.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { 
                    icon: <ShieldCheck className="w-10 h-10 text-primary" />, 
                    title: "Trusted & Safe", 
                    desc: "Your safety is our priority. Experienced guides and well-maintained boats." 
                },
                { 
                    icon: <Heart className="w-10 h-10 text-primary" />, 
                    title: "Best Value", 
                    desc: "Competitive pricing with no hidden fees. High quality service." 
                },
                { 
                    icon: <MapPin className="w-10 h-10 text-primary" />, 
                    title: "Local Experts", 
                    desc: "Our guides are locals who know the secret spots and best times to visit." 
                }
            ].map((feature, idx) => (
                <motion.div 
                    key={idx} 
                    className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm text-center hover:shadow-lg transition-shadow"
                    {...fadeIn}
                    viewport={{ once: true }}
                >
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
            ))}
        </div>
      </Section>
    </>
  );
}
