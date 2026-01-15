import { Building2, Zap, Droplets, Hammer, HardHat, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Building2, title: "Building Construction", description: "Commercial, residential, and public building works including sanitary, electrical, and HVAC services." },
  { icon: Truck, title: "Civil Works & Infrastructure", description: "Earthworks, concreting, asphalt paving, and piling works for roads, bridges, and infrastructure projects." },
  { icon: Zap, title: "Electrical Works", description: "Installation of medium/high voltage systems, substations, poles, and optical cables." },
  { icon: Droplets, title: "Water & Sewerage", description: "Sewerage networks, raw water networks, treatment plants, and pumping stations." },
  { icon: HardHat, title: "Project Supervision", description: "Complete supervision, execution, and design services ensuring technical specifications are met." },
  { icon: Hammer, title: "Specialized Contracting", description: "Special civil works for oil and gas fields and associated industrial facilities." },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Comprehensive Construction Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We deliver integrated services across all contracting sectors with a focus on quality, safety, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg" variant="secondary" className="font-semibold bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
