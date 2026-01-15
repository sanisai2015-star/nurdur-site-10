import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import heroImage from "@assets/generated_images/excavator.jpg";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[92vh] pt-24 flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      {/* Overlays (dark + gradient) */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/15"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
              "bg-white/10 border border-white/15 text-white/90 backdrop-blur"
            )}
          >
            {language === "en" ? (
              <span>EST. 2022 &nbsp;|&nbsp; Classification: Fifth Rank A</span>
            ) : (
              <span>تأسست 2022 &nbsp;|&nbsp; التصنيف: الدرجة الخامسة (A)</span>
            )}
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-white">
            {language === "en" ? (
              <>
                Building Iraq&apos;s <br />
                <span className="text-primary">Future Infrastructure</span>
              </>
            ) : (
              <>
                نبني مستقبل العراق <br />
                <span className="text-primary">ببنية تحتية قوية</span>
              </>
            )}
          </h1>

          {/* Sub text */}
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
            {language === "en"
              ? "NURDAR Al Faisal provides world-class general contracting, civil engineering, and infrastructure development services."
              : "توفر نوردار الفيصل خدمات المقاولات العامة والهندسة المدنية وتطوير البنى التحتية بمعايير عالية."}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                {language === "en" ? "View Our Projects" : "عرض مشاريعنا"}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/0 text-white border-white/30 hover:bg-white/10"
              >
                {language === "en" ? "Contact Us" : "تواصل معنا"}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom-right indicators (subtle) */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex gap-2" aria-hidden="true">
        <span className="h-1 w-10 rounded-full bg-primary" />
        <span className="h-1 w-3 rounded-full bg-white/20" />
        <span className="h-1 w-3 rounded-full bg-white/20" />
      </div>
    </section>
  );
}
