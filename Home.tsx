import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Stethoscope,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Users,
  Award,
  Accessibility,
  TrendingUp,
  Droplet,
  Activity,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== STICKY MOBILE HEADER ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-teal rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#0B6E6E]">Dr. Patil</p>
              <p className="text-xs text-gray-600">Diabetes & Heart Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-700 hover:text-[#0B6E6E] transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-700 hover:text-[#0B6E6E] transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-gray-700 hover:text-[#0B6E6E] transition"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-700 hover:text-[#0B6E6E] transition"
            >
              Contact
            </button>
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:07249570568"
              className="hidden sm:flex items-center gap-2 btn-primary text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container py-4 space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-[#0B6E6E]"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-[#0B6E6E]"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-[#0B6E6E]"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-[#0B6E6E]"
              >
                Contact
              </button>
              <a
                href="tel:07249570568"
                className="block w-full btn-primary text-center text-sm mt-4"
              >
                Call Now
              </a>
            </div>
          </div>
        )}

        {/* Fixed Call & WhatsApp Buttons on Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-2 z-40">
          <a
            href="tel:07249570568"
            className="flex-1 flex items-center justify-center gap-2 bg-[#0B6E6E] text-white py-3 rounded-lg font-semibold hover:bg-[#084F4F] transition"
          >
            <Phone className="w-5 h-5" />
            Call
          </a>
          <a
            href="https://wa.me/917249570568"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </header>

      <main className="pt-20 pb-40 md:pb-0">
        {/* ===== SECTION 1: HERO ===== */}
        <section className="relative overflow-hidden pt-8 md:pt-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Doctor Image Placeholder */}
            <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] to-[#E5D9CC] min-h-[600px] relative">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-teal rounded-3xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-24 h-24 text-white opacity-80" />
                </div>
                <p className="text-gray-600 text-sm">Dr. Rakesh K. Patil</p>
                <p className="text-xs text-gray-500">MBBS · DNB · RCP (UK)</p>
              </div>
            </div>

            {/* Right: Hero Content */}
            <div className="gradient-teal text-white flex flex-col justify-center px-6 md:px-8 py-16 md:py-24 relative">
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 badge-gold flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.9 Reviews</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Vasai's Most Trusted Diabetes & Heart Specialist
              </h1>

              <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                Led by Dr. Rakesh K. Patil — MBBS, DNB, RCP (UK) — with 10+ years of experience and a 4.9★ rating from over 380 patients. Real recovery. Personalised care. Lasting results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("appointment")}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Book a Consultation
                </button>
                <a
                  href="tel:07249570568"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call: 072495 70568
                </a>
              </div>

              {/* ECG Line Animation */}
              <div className="ecg-line mt-8"></div>
            </div>
          </div>

          {/* Mobile Hero Image */}
          <div className="md:hidden bg-gradient-to-br from-[#F7F3EE] to-[#E5D9CC] py-12 text-center">
            <div className="w-40 h-40 mx-auto bg-gradient-teal rounded-3xl flex items-center justify-center mb-4">
              <Stethoscope className="w-20 h-20 text-white opacity-80" />
            </div>
            <p className="text-gray-700 font-semibold">Dr. Rakesh K. Patil</p>
            <p className="text-xs text-gray-600">MBBS · DNB · RCP (UK)</p>
          </div>
        </section>

        {/* ===== SECTION 2: TRUST BADGES ===== */}
        <section className="bg-[#F7F3EE] py-8 md:py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              <div className="card-premium p-6 text-center">
                <Award className="w-8 h-8 text-[#0B6E6E] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  UK-Certified Diabetologist
                </h4>
                <p className="text-sm text-gray-600">
                  RCP Diploma, London — the only such qualification in Vasai West
                </p>
              </div>

              <div className="card-premium p-6 text-center">
                <Star className="w-8 h-8 text-[#E8A020] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">4.9★ on Google</h4>
                <p className="text-sm text-gray-600">
                  Trusted by 380+ patients and families across Vasai-Virar
                </p>
              </div>

              <div className="card-premium p-6 text-center">
                <Heart className="w-8 h-8 text-[#C94040] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Diabetes to Heart — Under One Roof
                </h4>
                <p className="text-sm text-gray-600">
                  Comprehensive metabolic and cardiac care without referrals
                </p>
              </div>

              <div className="card-premium p-6 text-center">
                <Accessibility className="w-8 h-8 text-[#0B6E6E] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Fully Accessible Clinic
                </h4>
                <p className="text-sm text-gray-600">
                  Wheelchair-accessible entrance, car park, and toilet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: ABOUT / FEATURES ===== */}
        <section id="about" className="section-padding bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Large Visual Block */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#F7F3EE] to-[#E5D9CC] rounded-3xl p-8 md:p-12 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-20 h-20 text-[#0B6E6E] mx-auto mb-6 opacity-80" />
                    <p className="text-xl md:text-2xl text-gray-800 font-serif italic mb-6">
                      "Our motto is Care Beyond Cure — because your wellbeing matters more than a prescription."
                    </p>
                    <p className="text-sm text-gray-700 font-semibold">
                      Dr. Rakesh K. Patil, MBBS · DNB · RCP (UK)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Feature Cards */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Why Choose Our Clinic
                </h2>

                <div className="card-premium p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F7F3EE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#0B6E6E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Tailored to You, Always
                      </h3>
                      <p className="text-sm text-gray-600">
                        No two patients are the same. Every consultation includes a detailed review of your history, lifestyle, and goals — then a plan that's yours alone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-premium p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F7F3EE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#0B6E6E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Specialists in Lifelong Conditions
                      </h3>
                      <p className="text-sm text-gray-600">
                        From Type 1 and Type 2 Diabetes to Hypertension and Thyroid disorders, we provide the long-term monitoring your health demands — not one-off fixes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-premium p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F7F3EE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#0B6E6E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Open Evenings. Because Life Is Busy.
                      </h3>
                      <p className="text-sm text-gray-600">
                        We reopen at 6 PM so that work never comes between you and your health. Book a morning or evening slot — whatever fits your schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: SERVICES ===== */}
        <section id="services" className="section-padding bg-[#F7F3EE]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Treat
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive care for chronic and acute conditions — all under one roof in Vasai West.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Diabetes%20Management.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Diabetes Management
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹500</p>
                    </div>
                    <Badge className="bg-[#E8A020] text-white">Most Popular</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Personalised blood sugar control plans including diet, medication, and monitoring protocols for Type 1, Type 2, and pre-diabetic patients.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Diabetes</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 2 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Diabetes%20Reversal%20Programme.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Diabetes Reversal Programme
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹800</p>
                    </div>
                    <Badge className="bg-[#C94040] text-white">Transformative</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Structured 6–12 month programme combining medical treatment, diet therapy, and lifestyle coaching aimed at achieving normal glucose levels without medication.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Diabetes</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 3 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Hypertension%20Treatment.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Hypertension Treatment
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹500</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Evidence-based management of high blood pressure with medication optimisation, lifestyle counselling, and regular follow-up monitoring.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Heart & BP</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 4 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Heart%20Care%20Consultation.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Heart Care Consultation
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹600</p>
                    </div>
                    <Badge className="bg-[#0B6E6E] text-white">Specialised</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Cardiac risk assessment, ECG analysis, and preventive cardiology for patients with diabetes-linked heart risk or family history.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Heart & BP</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 5 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Thyroid%20Disorders.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Thyroid Disorders
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹500</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Diagnosis and management of hypothyroidism, hyperthyroidism, and thyroid nodules with regular TSH monitoring and dose titration.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Endocrinology</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 6 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20ECG%20%26%20Diagnostics.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        ECG & Diagnostics
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹150</p>
                    </div>
                    <Badge className="bg-[#0B6E6E] text-white">In-House</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    In-house 12-lead ECG interpretation for chest pain, palpitations, and routine cardiac screening.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Diagnostics</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 7 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Diet%20%26%20Nutrition%20Counselling.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Diet & Nutrition Counselling
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹300</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Expert dietary guidance for diabetic, hypertensive, and weight-management patients; custom meal plans aligned with Indian cooking habits.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Wellness</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 8 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Weight%20Management.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Weight Management
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹500</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Medical weight-loss programme targeting metabolic health, combining pharmacotherapy and supervised diet for sustainable results.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Wellness</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 9 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20PCOS%20Management.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        PCOS Management
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹500</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Hormonal and metabolic management of Polycystic Ovarian Syndrome with focus on insulin resistance and menstrual regularity.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Women's Health</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 10 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Arthritis%20Care.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Arthritis Care
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹500</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Management of osteoarthritis and rheumatoid arthritis with pain relief strategies and disease-modifying therapy where needed.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: General Medicine</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 11 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Chronic%20Kidney%20Disease.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Chronic Kidney Disease
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹600</p>
                    </div>
                    <Badge className="bg-[#0B6E6E] text-white">Specialist</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Monitoring and management of CKD in diabetic and hypertensive patients, including nephroprotective medication protocols.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: Chronic Disease</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>

              {/* Service 12 */}
              <div className="card-premium p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <a
                  href="https://wa.me/917249570568?text=Hello%20Dr.%20Patil%21%20I%27m%20interested%20in%20booking%20a%20consultation%20for%20Infectious%20Disease.%20Please%20share%20available%20timings."
                  className="block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0B6E6E] transition">
                        Infectious Disease
                      </h3>
                      <p className="text-sm text-[#0B6E6E] font-semibold">₹400</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Diagnosis and treatment of acute infections — fever, dengue, typhoid, UTI — with prompt, evidence-based management.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Category: General Medicine</p>
                  <p className="text-xs font-semibold text-[#0B6E6E] group-hover:underline">💬 Inquire on WhatsApp →</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: TESTIMONIALS ===== */}
        <section id="testimonials" className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                380+ Patients Trust Dr. Patil
              </h2>
              <p className="text-lg text-gray-600">
                Real stories. Real recovery. From right here in Vasai-Virar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "My mother's sugar levels were dangerously high — within 6 to 8 months under Dr. Patil's care, they came back to completely normal. He is the best diabetologist in Vasai, without any doubt."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Sunita R.</p>
                  <p className="text-xs text-gray-600">Vasai West</p>
                  <p className="text-xs text-gray-500">Diabetes Management</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "My sugar was 350–400 and I also had fatty liver. I was exhausted all the time. After just one month with Dr. Patil, my readings are now pre-122 and post-130 — nearly normal. His diet plan changed everything."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Pravin D.</p>
                  <p className="text-xs text-gray-600">Navghar, Vasai</p>
                  <p className="text-xs text-gray-500">Diabetes Reversal Programme</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "Wonderful diagnostic approach. I honestly could not believe a doctor of this calibre was available right here in Vasai. He listens, explains, and genuinely cares about your long-term health."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Megha S.</p>
                  <p className="text-xs text-gray-600">Virar</p>
                  <p className="text-xs text-gray-500">General Consultation</p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "Dr. Patil is calm, thorough, and brilliant. He understands the problem deeply and explains every step of the treatment. I no longer dread doctor visits — I look forward to them."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Ravi N.</p>
                  <p className="text-xs text-gray-600">Dindayal Nagar, Vasai</p>
                  <p className="text-xs text-gray-500">Hypertension Treatment</p>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "After years of feeling tired and being dismissed, Dr. Patil finally identified my thyroid issue correctly and put me on the right treatment. Three months later, I feel like myself again."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Kavita B.</p>
                  <p className="text-xs text-gray-600">Manikpur, Vasai</p>
                  <p className="text-xs text-gray-500">Thyroid Management</p>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "The clinic has an excellent, comfortable atmosphere and the staff are genuinely warm. Dr. Patil took 45 minutes for my first appointment — I have never experienced that level of attention from any doctor."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Anil T.</p>
                  <p className="text-xs text-gray-600">Nalasopara</p>
                  <p className="text-xs text-gray-500">Heart Care Consultation</p>
                </div>
              </div>

              {/* Testimonial 7 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "Dr. Patil was the first doctor who explained PCOS to me in terms I actually understood. His treatment plan addressed the root cause — not just the symptoms. I'm so grateful I found this clinic."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Pooja M.</p>
                  <p className="text-xs text-gray-600">Vasai East</p>
                  <p className="text-xs text-gray-500">PCOS Management</p>
                </div>
              </div>

              {/* Testimonial 8 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "I was on multiple medications with no improvement. Dr. Patil reviewed my case from scratch, simplified my medication, and added a diet plan. My HbA1c dropped from 9.8 to 6.4 in four months."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Suresh K.</p>
                  <p className="text-xs text-gray-600">Sanjan, Vasai</p>
                  <p className="text-xs text-gray-500">Diabetes Management</p>
                </div>
              </div>

              {/* Testimonial 9 */}
              <div className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8A020] text-[#E8A020]"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">
                  "Friendly staff, clean clinic, and a doctor who genuinely remembers who you are at every follow-up. Rare in any city, absolutely exceptional for Vasai. Highly recommended for everyone."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Reshma V.</p>
                  <p className="text-xs text-gray-600">DG Nagar, Vasai</p>
                  <p className="text-xs text-gray-500">Weight Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: CTA BANNER ===== */}
        <section id="appointment" className="gradient-teal text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 ecg-line opacity-20"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Health Deserves More Than A Prescription
              </h2>
              <p className="text-xl mb-8 text-white/95">
                Don't manage your condition. Reverse it. Book a consultation with Dr. Patil today and take the first step toward a healthier, medication-free future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() => scrollToSection("appointment")}
                  className="bg-white text-[#0B6E6E] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Book Your Consultation Now
                </button>
              </div>

              <p className="text-white/80 mb-6">
                Or WhatsApp Us →{" "}
                <a
                  href="https://wa.me/917249570568"
                  className="font-bold hover:underline"
                >
                  072495 70568
                </a>
              </p>

              {/* Value Props */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <Award className="w-8 h-8 mx-auto mb-3" />
                  <p className="font-semibold mb-2">Expert Diagnosis</p>
                  <p className="text-sm text-white/80">
                    10+ years · DNB · RCP UK trained
                  </p>
                </div>
                <div>
                  <Heart className="w-8 h-8 mx-auto mb-3" />
                  <p className="font-semibold mb-2">Personalised Plan</p>
                  <p className="text-sm text-white/80">
                    Not a generic prescription, a roadmap for your recovery
                  </p>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <p className="font-semibold mb-2">Flexible Timings</p>
                  <p className="text-sm text-white/80">
                    Morning & evening slots available 6 days a week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: NEWSLETTER ===== */}
        <section className="section-padding bg-[#F7F3EE] mb-20 md:mb-0">
          <div className="container max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get Free Diabetes & Heart Health Tips — Every Week
              </h2>
              <p className="text-lg text-gray-600">
                Join 1,000+ patients and families across Vasai-Virar who receive Dr. Patil's evidence-based health advice, seasonal wellness alerts, and exclusive clinic updates — straight to your inbox.
              </p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B6E6E]"
              />
              <input
                type="email"
                placeholder="Your Email or Mobile"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B6E6E]"
              />
              <button
                type="submit"
                className="w-full btn-primary text-lg font-bold py-4"
              >
                Subscribe for Free
              </button>
            </form>

            <p className="text-xs text-gray-600 text-center mt-6">
              No spam, ever. Unsubscribe anytime. Your data is private.
            </p>
          </div>
        </section>

        {/* ===== SECTION 8: CONTACT & MAP ===== */}
        <section id="contact" className="section-padding bg-white mb-20 md:mb-0">
          <div className="container">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="card-premium p-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#0B6E6E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600 text-sm">
                        Shop No. 2, Neminath Darshan CHS, DG Nagar Road, Opposite Aakansha Building, Vasai West, Vasai-Virar, Maharashtra 401202
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-premium p-6">
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-[#0B6E6E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                      <a
                        href="tel:07249570568"
                        className="text-[#0B6E6E] font-semibold hover:underline"
                      >
                        072495 70568
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-premium p-6">
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-[#0B6E6E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Social</h3>
                      <div className="space-y-2">
                        <a
                          href="https://instagram.com/rock_sugadoc"
                          className="block text-[#0B6E6E] hover:underline text-sm"
                        >
                          Instagram: @rock_sugadoc
                        </a>
                        <a
                          href="https://facebook.com/consultdrpatil"
                          className="block text-[#0B6E6E] hover:underline text-sm"
                        >
                          Facebook: consultdrpatil
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-premium p-6 bg-[#F7F3EE]">
                  <h3 className="font-bold text-gray-900 mb-4">Clinic Hours</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Morning: 9:00 AM - 1:00 PM</p>
                    <p>Evening: 6:00 PM - 8:00 PM</p>
                    <p className="font-semibold text-gray-900 mt-4">
                      6 days a week (Closed on Sundays)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card-premium p-0 overflow-hidden">
                <div className="w-full h-96 bg-gradient-to-br from-[#F7F3EE] to-[#E5D9CC] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#0B6E6E] mx-auto mb-4 opacity-50" />
                    <p className="text-gray-600 font-semibold mb-2">
                      Vasai West, Maharashtra
                    </p>
                    <p className="text-sm text-gray-500">
                      Shop No. 2, Neminath Darshan CHS
                    </p>
                    <a
                      href="https://maps.google.com/?q=Neminath+Darshan+CHS+Vasai+West"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 btn-primary text-sm"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: FOOTER ===== */}
        <footer className="gradient-teal text-white py-12 mt-20 md:mt-0">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6" />
                  <div>
                    <p className="font-bold">Dr. Patil</p>
                    <p className="text-xs text-white/80">Care Beyond Cure</p>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Vasai's Trusted Diabetes & Heart Specialist
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold mb-4">Our Services</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-white transition"
                    >
                      Diabetes Management
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-white transition"
                    >
                      Heart Care
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-white transition"
                    >
                      Thyroid Management
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-white transition"
                    >
                      Weight Management
                    </button>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="hover:text-white transition"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("testimonials")}
                      className="hover:text-white transition"
                    >
                      Testimonials
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="hover:text-white transition"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a
                      href="tel:07249570568"
                      className="hover:text-white transition"
                    >
                      072495 70568
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/917249570568"
                      className="hover:text-white transition"
                    >
                      WhatsApp Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/rock_sugadoc"
                      className="hover:text-white transition"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
              <p>
                © 2026 Dr. Patil's Diabetes & Heart Care Clinic. All rights reserved.
              </p>
              <p className="mt-2">
                Care Beyond Cure — Vasai's Trusted Diabetes & Heart Specialist
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Import MessageCircle icon
import { MessageCircle } from "lucide-react";
