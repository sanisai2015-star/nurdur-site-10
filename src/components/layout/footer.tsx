import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-xl">NURDAR AL FAISAL</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading General Contracting Company in Iraq specializing in building construction, infrastructure, and electrical works.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"><span className="cursor-pointer hover:text-primary transition-colors">About Company</span></Link></li>
              <li><Link href="/services"><span className="cursor-pointer hover:text-primary transition-colors">Our Services</span></Link></li>
              <li><Link href="/projects"><span className="cursor-pointer hover:text-primary transition-colors">Projects</span></Link></li>
              <li><Link href="/contact"><span className="cursor-pointer hover:text-primary transition-colors">Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">Core Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Building Construction</li>
              <li className="text-slate-400">Infrastructure Development</li>
              <li className="text-slate-400">Electrical & Mechanical Works</li>
              <li className="text-slate-400">Civil Engineering</li>
              <li className="text-slate-400">Piling & Earthworks</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Palestine St., Baghdad, Iraq<br />
                  Mayslon Square
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+9647728460390" className="hover:text-white transition-colors">+964 772 846 0390</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:companyemaar@gmail.com" className="hover:text-white transition-colors">companyemaar@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} NURDAR Al Faisal for General Contracting Co. L.L.C. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
