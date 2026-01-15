import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage, translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * NOTE:
 * Place your real videos here:
 *  - src/assets/generated_videos/video1.mp4
 *  - src/assets/generated_videos/video2.mp4
 *  - src/assets/generated_videos/video3.mp4
 */
import video1 from "@assets/generated_videos/video1.mp4";
import video2 from "@assets/generated_videos/video2.mp4";
import video3 from "@assets/generated_videos/video3.mp4";

const videos = [video1, video2, video3];

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            src={videos[currentVideo]}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-16">
        <div className="max-w-2xl text-white space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-semibold mb-4 backdrop-blur-sm">
              {t.tag}
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-2">
              {t.title} <br />
              <span className="text-primary">{t.titleAccent}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-lg leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/projects">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/25 rounded-md">
                {t.viewProjects}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-md">
                {t.contactUs}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 transition-all duration-300 rounded-full",
              currentVideo === i ? "bg-primary w-8" : "bg-white/30 w-4"
            )}
          />
        ))}
      </div>
    </section>
  );
}
