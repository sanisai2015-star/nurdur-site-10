import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const companyTitle = "NURDAR AL FAISAL";
  const companyDescEn =
    "Leading general contracting company in Iraq specializing in building construction, infrastructure, and electrical works.";
  const companyDescAr =
    "شركة مقاولات عامة في العراق متخصصة في إنشاء المباني وتطوير البنى التحتية والأعمال الكهربائية.";

  const quickLinksTitle = isAr ? "روابط سريعة" : "Quick Links";
  const coreServicesTitle = isAr ? "الخدمات الرئيسية" : "Core Services";
  const contactTitle = isAr ? "تواصل معنا" : "Contact Us";

  const coreServices = isAr
    ? [
        "إنشاء المباني",
        "تطوير البنى التحتية",
        "أعمال كهربائية وميكانيكية",
        "هندسة مدنية",
        "أعمال دق الركائز وتسوية التربة",
      ]
    : [
        "Building Construction",
        "Infrastructure Development",
        "Electrical & Mechanical Works",
        "Civil Engineering",
        "Piling & Earthworks",
      ];

  const address = isAr
    ? "شارع فلسطين، بغداد، العراق
ساحة ميسلون"
    : "Palestine St., Baghdad, Iraq
Mayslon Square";

  const copyright = isAr
    ? `© ${new Date().getFullYear()} شركة نوردار الفيصل للمقاولات العامة ذ.م.م. جميع الحقوق محفوظة.`
    : `© ${new Date().getFullYear()} NURDAR Al Faisal for General Contracting Co. L.L.C. All rights reserved.`;

  const privacy = isAr ? "سياسة الخصوصية" : "Privacy Policy";
  const terms = isAr ? "شروط الاستخدام" : "Terms of Service";

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-xl">{companyTitle}</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {isAr ? companyDescAr : companyDescEn}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">{quickLinksTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    {isAr ? "عن الشركة" : "About Company"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    {isAr ? "خدماتنا" : "Our Services"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    {isAr ? "المشاريع" : "Projects"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    {isAr ? "تواصل معنا" : "Contact Us"}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">{coreServicesTitle}</h4>
            <ul className="space-y-2 text-sm">
              {coreServices.map((s) => (
                <li key={s} className="text-slate-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">{contactTitle}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+9647728460390"
                  className="hover:text-white transition-colors"
                >
                  +964 772 846 0390
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:companyemaar@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  companyemaar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>{copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              {privacy}
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              {terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
