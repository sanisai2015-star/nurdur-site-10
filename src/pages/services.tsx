import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

import excavatorImage from "@assets/generated_images/excavator.jpg";
import substationImage from "@assets/generated_images/substation.jpg";

type ServiceSection = {
  categoryEn: string;
  categoryAr: string;
  image: string;
  itemsEn: string[];
  itemsAr: string[];
};

const servicesList: ServiceSection[] = [
  {
    categoryEn: "Construction & Civil Works",
    categoryAr: "الأعمال الإنشائية والهندسة المدنية",
    image: excavatorImage,
    itemsEn: [
      "Commercial, residential, and public building works",
      "Sanitary services, electrical, elevators, and air conditioning",
      "Earthworks, concreting, and asphalt paving for roads and bridges",
      "Sewerage networks, raw water networks, and drinking water networks",
      "Construction of water treatment plants and pumping stations",
      "Piling works of all types",
      "Special civil works for infrastructure of oil and gas fields",
    ],
    itemsAr: [
      "أعمال الأبنية التجارية والسكنية والحكومية",
      "الأعمال الصحية والكهربائية والمصاعد والتكييف",
      "أعمال الحفر والردم والخرسانة وأعمال الإسفلت للطرق والجسور",
      "شبكات المجاري وشبكات المياه الخام وشبكات مياه الشرب",
      "إنشاء محطات معالجة المياه ومحطات الضخ",
      "أعمال دق الركائز بجميع أنواعها",
      "أعمال مدنية خاصة لبنى حقول النفط والغاز",
    ],
  },
  {
    categoryEn: "Electrical Engineering",
    categoryAr: "الهندسة الكهربائية",
    image: substationImage,
    itemsEn: [
      "Electricity line poles, laying cables, connectivity, and wiring",
      "Installation of distribution and operation panels",
      "Measurement devices and operation switches",
      "Electrical storage facilities for power substations",
      "Medium and High Voltage installations",
      "Laying optical cables and necessary equipment",
      "All preparatory, execution, and finishing works in power",
    ],
    itemsAr: [
      "أعمدة خطوط الكهرباء وتمديد الكابلات والتوصيلات والأسلاك",
      "نصب لوحات التوزيع ولوحات التشغيل",
      "أجهزة القياس ومفاتيح التشغيل",
      "مرافق الخزن الكهربائي للمحطات",
      "منظومات الجهد المتوسط والعالي",
      "تمديد الكابلات الضوئية والمستلزمات الخاصة بها",
      "جميع الأعمال التحضيرية والتنفيذية والإنهاءات في مجال الطاقة",
    ],
  },
];

type MachineItem = {
  nameEn: string;
  nameAr: string;
  count: number;
};

const machineryList: MachineItem[] = [
  { nameEn: "Bulldozer", nameAr: "بلدوزر", count: 3 },
  { nameEn: "Grader", nameAr: "كريدر", count: 2 },
  { nameEn: "Wheel Loader", nameAr: "لودر", count: 6 },
  { nameEn: "Backhoe Loader (Excavator)", nameAr: "حفار (باكهو)", count: 4 },
  { nameEn: "Wheeled Excavator", nameAr: "حفار بعجلات", count: 2 },
  { nameEn: "Sheepsfoot Roller", nameAr: "مدحلة قدم الغنم", count: 6 },
  { nameEn: "Steel Drum Roller", nameAr: "مدحلة أسطوانة حديد", count: 4 },
  { nameEn: "Backhoe Hammer", nameAr: "هامر حفار", count: 2 },
  { nameEn: "Water Tanker", nameAr: "تناكر ماء", count: 2 },
  { nameEn: "Dump Truck", nameAr: "قلاب", count: 10 },
  { nameEn: "Concrete Pump", nameAr: "مضخة خرسانة", count: 2 },
];

export default function Services() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <PageHero
          titleEn="Our Services"
          titleAr="خدماتنا"
          subtitleEn="Integrated contracting, civil engineering, and electrical solutions."
          subtitleAr="حلول متكاملة للمقاولات والهندسة المدنية والأعمال الكهربائية."
        />

        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4 space-y-24">
            {servicesList.map((service, index) => {
              const category = isAr ? service.categoryAr : service.categoryEn;
              const items = isAr ? service.itemsAr : service.itemsEn;

              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-xl overflow-hidden shadow-xl h-[400px]"
                  >
                    <img src={service.image} alt={category} className="w-full h-full object-cover" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={isAr ? "text-right" : ""}
                  >
                    <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">{category}</h2>
                    <ul className="space-y-4">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span className="text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                {isAr ? "الآليات والمعدات" : "Machinery & Equipment"}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {isAr
                  ? "نمتلك أسطولاً كبيراً من المعدات الحديثة التي تتم صيانتها بشكل يومي لضمان الكفاءة والموثوقية في مواقع العمل."
                  : "We possess a large fleet of modern equipment maintained daily to ensure efficiency and reliability on every project site."}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {machineryList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-primary transition-colors"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{item.count}</div>
                  <div className="text-sm font-medium text-slate-300 uppercase tracking-wide">
                    {isAr ? item.nameAr : item.nameEn}
                  </div>
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
