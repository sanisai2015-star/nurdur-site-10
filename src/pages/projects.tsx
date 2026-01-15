import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  { title: "The Industrial City Project", location: "Al Nahrawan", client: "Balad Al Shomukh Company", type: "Infrastructure", status: "Completed", description: "Construction of road networks, including compacted road areas, sidewalks, and approaches." },
  { title: "Residential Complex Infrastructure", location: "Baghdad", client: "Private Sector", type: "Civil Works", status: "In Progress", description: "Execution of sewerage and water networks for a new residential development." },
  { title: "Power Substation Upgrade", location: "Basra", client: "Ministry of Electricity", type: "Electrical", status: "Completed", description: "Installation of medium voltage panels and electrical storage facilities." },
  { title: "Public School Construction", location: "Diyala", client: "Ministry of Education", type: "Building", status: "Completed", description: "Full construction of a 3-story school building including all mechanical and electrical services." },
  { title: "Highway Maintenance", location: "International Road", client: "Roads & Bridges Directorate", type: "Roads", status: "Completed", description: "Asphalt paving and rehabilitation of key highway segments." },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <PageHero
          titleEn="Projects"
          titleAr="المشاريع"
          subtitleEn="Selected works across construction, infrastructure, and electrical projects."
          subtitleAr="نماذج من أعمالنا في البناء والبنى التحتية والمشاريع الكهربائية."
        />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-slate-200 w-full relative group">
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-600">
                        <span className="font-semibold">Project Image</span>
                      </div>
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-semibold">View Details</span>
                      </div>
                    </div>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.type}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.location} • {project.client}</p>
                      </div>
                      <p className="text-sm text-slate-600">{project.description}</p>
                    </CardContent>
                  </Card>
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
