import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(language === "en" ? "Message Sent ✅" : "تم إرسال الرسالة ✅");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <PageHero
          titleEn="Contact Us"
          titleAr="تواصل معنا"
          subtitleEn="Talk to our team for inquiries, partnerships, and quotes."
          subtitleAr="تواصل مع فريقنا للاستفسارات والشراكات وطلبات عروض الأسعار."
        />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold font-heading">{language === "en" ? "Get In Touch" : "ابقَ على تواصل"}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "We are available to discuss your construction needs and provide detailed consultations."
                      : "نحن جاهزون لمناقشة احتياجاتكم وتقديم الاستشارات التفصيلية."}
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    {
                      icon: MapPin,
                      title: isAr ? "العنوان" : "Our Location",
                      content: isAr
                        ? `شارع فلسطين، ساحة ميسلون\nبغداد، العراق`
                        : `Palestine St., Mayslon Square\nBaghdad, Iraq`,
                    },
                    {
                      icon: Phone,
                      title: isAr ? "أرقام الهاتف" : "Phone Numbers",
                      content: `+964 772 846 0390\n+964 790 152 3478\n+964 770 443 9842`,
                    },
                    {
                      icon: Mail,
                      title: isAr ? "البريد الإلكتروني" : "Email Address",
                      content: `companyemaar@gmail.com\nsabah.j.d1972@gmail.com`,
                    },
                    {
                      icon: Clock,
                      title: isAr ? "ساعات العمل" : "Working Hours",
                      content: isAr
                        ? `السبت - الخميس: 8:00 صباحًا - 5:00 مساءً\nالجمعة: عطلة`
                        : `Saturday - Thursday: 8:00 AM - 5:00 PM\nFriday: Closed`,
                    },
                  ].map((item, i) => (
                    <Card key={i}>
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white p-8 rounded-xl shadow-lg border border-border h-fit">
                <h2 className="text-2xl font-bold font-heading mb-6">{language === "en" ? "Send a Message" : "أرسل رسالة"}</h2>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">{language === "en" ? "Full Name" : "الاسم الكامل"}</label>
                    <Input required placeholder={language === "en" ? "John Doe" : "الاسم"} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">{language === "en" ? "Email" : "البريد الإلكتروني"}</label>
                      <Input required type="email" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">{language === "en" ? "Phone" : "رقم الهاتف"}</label>
                      <Input required placeholder="+964..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">{language === "en" ? "Message" : "الرسالة"}</label>
                    <Textarea required className="min-h-[120px]" placeholder={language === "en" ? "Tell us about your project requirements..." : "اكتب تفاصيل طلبك..."} />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-semibold">
                    {language === "en" ? "Send Message" : "إرسال"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
