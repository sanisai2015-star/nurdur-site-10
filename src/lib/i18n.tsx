import React, { createContext, useContext, useMemo, useState } from "react";

export type Lang = "en" | "ar";

type Ctx = {
  language: Lang;
  setLanguage: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("en");

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tag: "General Contracting",
      title: "Building Iraq’s",
      titleAccent: "Future",
      subtitle:
        "Construction, infrastructure, and electrical works delivered with quality and integrity.",
      viewProjects: "View Projects",
      contactUs: "Contact Us",
    },
    about: {
      header: "About Company",
      subHeader: "A trusted partner in general contracting across Iraq.",
      leadership: "Leadership",
      mdMessage: "Managing Director Message",
      companyDetails: "Company Details",
      vision: "Vision",
      objectives: "Objectives",
      values: "Values",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "حول",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "تواصل",
    },
    hero: {
      tag: "مقاولات عامة",
      title: "نبني",
      titleAccent: "مستقبل العراق",
      subtitle: "أعمال إنشاءات وبنى تحتية وأعمال كهربائية بجودة ومصداقية.",
      viewProjects: "عرض المشاريع",
      contactUs: "تواصل معنا",
    },
    about: {
      header: "عن الشركة",
      subHeader: "شريك موثوق في المقاولات العامة داخل العراق.",
      leadership: "الإدارة",
      mdMessage: "رسالة المدير المفوض",
      companyDetails: "بيانات الشركة",
      vision: "الرؤية",
      objectives: "الأهداف",
      values: "القيم",
    },
  },
} as const;
