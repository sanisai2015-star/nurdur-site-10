import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-heading font-bold">404</h1>
        <p className="text-muted-foreground">{isAr ? "الصفحة غير موجودة" : "Page not found"}</p>
        <Link href="/">
          <span className="text-primary underline cursor-pointer">
            {isAr ? "العودة إلى الرئيسية" : "Go Home"}
          </span>
        </Link>
      </div>
    </div>
  );
}
