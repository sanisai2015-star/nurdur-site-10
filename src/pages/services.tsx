import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { motion } from "framer-motion";

import excavatorImage from "@assets/generated_images/excavator.jpg";
import substationImage from "@assets/generated_images/substation.jpg";

const servicesList = [
  {
    category: "Construction & Civil Works",
    image: excavatorImage,
    items: [
      "Commercial, residential, and public building works",
      "Sanitary services, electrical, elevators, and air conditioning",
      "Earthworks, concreting, and asphalt paving for roads and bridges",
      "Sewerage networks, raw water networks, and drinking water networks",
      "Construction of water treatment plants and pumping stations",
      "Piling works of all types",
      "Special civil works for infrastructure of oil and gas fields",
    ],
  },
  {
    category: "Electrical Engineering",
    image: substationImage,
    items: [
      "Electricity line poles, laying cables, connectivity, and wiring",
      "Installation of distribution and operation panels",
      "Measurement devices and operation switches",
      "Electrical storage facilities for power substations",
      "Medium and High Voltage installations",
      "Laying optical cables and necessary equipment",
      "All preparatory, execution, and finishing works in power",
    ],
  },
];

const machineryList = [
  { name: "Bulldozer", count: 3 },
  { name: "Grader", count: 2 },
  { name: "Wheel Loader", count: 6 },
  { name: "Backhoe Loader (Excavator)", count: 4 },
  { name: "Wheeled Excavator", count: 2 },
  { name: "Sheepsfoot Roller", count: 6 },
  { name: "Steel Drum Roller", count: 4 },
  { name: "Backhoe Hammer", count: 2 },
  { name: "Water Tanker", count: 2 },
  { name: "Dump Truck", count: 10 },
  { name: "Concrete Pump", count: 2 },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <PageHero
          titleEn="Our Services"
          titleAr="خدماتنا"
          subtitleEn="Integrated contracting, civil engineering, and electrical solutions."
          subtitleAr="حلول متكاملة للمقاولات والهندسة المدنية والأعمال الكهربائية."
        />

        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4 space-y-24">
            {servicesList.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                  <img src={service.image} alt={service.category} className="w-full h-full object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">{service.category}</h2>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4">Machinery & Equipment</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We possess a large fleet of modern equipment maintained daily to ensure efficiency and reliability on every project site.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {machineryList.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-primary transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">{item.count}</div>
                  <div className="text-sm font-medium text-slate-300 uppercase tracking-wide">{item.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
