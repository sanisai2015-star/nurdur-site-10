import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

type Project = {
  titleEn: string;
  titleAr: string;
  locationEn: string;
  locationAr: string;
  clientEn: string;
  clientAr: string;
  typeEn: string;
  typeAr: string;
  statusEn: "Completed" | "In Progress";
  statusAr: string;
  descriptionEn: string;
  descriptionAr: string;
};

const projects: Project[] = [
  {
    titleEn: "The Industrial City Project",
    titleAr: "مشروع المدينة الصناعية",
    locationEn: "Al Nahrawan",
    locationAr: "النهروان",
    clientEn: "Balad Al Shomukh Company",
    clientAr: "شركة بلد الشموخ",
    typeEn: "Infrastructure",
    typeAr: "بنى تحتية",
    statusEn: "Completed",
    statusAr: "مكتمل",
    descriptionEn:
      "Construction of road networks, including compacted road areas, sidewalks, and approaches.",
    descriptionAr:
      "تنفيذ شبكات الطرق بما يشمل مناطق الرصف والحدبات والأرصفة والمداخل.",
  },
  {
    titleEn: "Residential Complex Infrastructure",
    titleAr: "بنى تحتية لمجمع سكني",
    locationEn: "Baghdad",
    locationAr: "بغداد",
    clientEn: "Private Sector",
    clientAr: "القطاع الخاص",
    typeEn: "Civil Works",
    typeAr: "أعمال مدنية",
    statusEn: "In Progress",
    statusAr: "قيد التنفيذ",
    descriptionEn:
      "Execution of sewerage and water networks for a new residential development.",
    descriptionAr:
      "تنفيذ شبكات المجاري والمياه لمشروع تطوير سكني جديد.",
  },
  {
    titleEn: "Power Substation Upgrade",
    titleAr: "تحديث محطة تحويل كهرباء",
    locationEn: "Basra",
    locationAr: "البصرة",
    clientEn: "Ministry of Electricity",
    clientAr: "وزارة الكهرباء",
    typeEn: "Electrical",
    typeAr: "كهرباء",
    statusEn: "Completed",
    statusAr: "مكتمل",
    descriptionEn:
      "Installation of medium voltage panels and electrical storage facilities.",
    descriptionAr:
      "نصب لوحات الجهد المتوسط ومرافق الخزن الكهربائي.",
  },
  {
    titleEn: "Public School Construction",
    titleAr: "إنشاء مدرسة حكومية",
    locationEn: "Diyala",
    locationAr: "ديالى",
    clientEn: "Ministry of Education",
    clientAr: "وزارة التربية",
    typeEn: "Building",
    typeAr: "أبنية",
    statusEn: "Completed",
    statusAr: "مكتمل",
    descriptionEn:
      "Full construction of a 3-story school building including all mechanical and electrical services.",
    descriptionAr:
      "إنشاء مدرسة من 3 طوابق مع جميع الأعمال الميكانيكية والكهربائية.",
  },
  {
    titleEn: "Highway Maintenance",
    titleAr: "صيانة طريق سريع",
    locationEn: "International Road",
    locationAr: "الطريق الدولي",
    clientEn: "Roads & Bridges Directorate",
    clientAr: "مديرية الطرق والجسور",
    typeEn: "Roads",
    typeAr: "طرق",
    statusEn: "Completed",
    statusAr: "مكتمل",
    descriptionEn:
      "Asphalt paving and rehabilitation of key highway segments.",
    descriptionAr:
      "أعمال إكساء بالإسفلت وإعادة تأهيل مقاطع رئيسية من الطريق.",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const projectImageLabel = isAr ? "صورة المشروع" : "Project Image";
  const viewDetailsLabel = isAr ? "عرض التفاصيل" : "View Details";

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <PageHero
          titleEn="Projects"
          titleAr="المشاريع"
          subtitleEn="Selected works across construction, infrastructure, and electrical projects."
          subtitleAr="نماذج من أعمالنا في البناء والبنى التحتية والمشاريع الكهربائية."
        />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const title = isAr ? project.titleAr : project.titleEn;
                const location = isAr ? project.locationAr : project.locationEn;
                const client = isAr ? project.clientAr : project.clientEn;
                const type = isAr ? project.typeAr : project.typeEn;
                const status = isAr ? project.statusAr : project.statusEn;
                const description = isAr ? project.descriptionAr : project.descriptionEn;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-slate-200 w-full relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-600">
                          <span className="font-semibold">{projectImageLabel}</span>
                        </div>
                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-semibold">{viewDetailsLabel}</span>
                        </div>
                      </div>

                      <CardContent className={"space-y-4 " + (isAr ? "text-right" : "")}
                      >
                        <div className="flex justify-between items-start">
                          <Badge variant={project.statusEn === "Completed" ? "default" : "secondary"}>
                            {status}
                          </Badge>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {type}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-heading mb-1">{title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {location} • {client}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">{description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
