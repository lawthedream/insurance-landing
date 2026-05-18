"use client";

import Navbar from "../../components/industrial-accident/Navbar";
import Hero from "../../components/industrial-accident/Hero";
import ProblemSection from "../../components/industrial-accident/ProblemSection";
import SolutionSection from "../../components/industrial-accident/SolutionSection";
import SuccessCasesSection from "../../components/industrial-accident/SuccessCasesSection";
import DifferentiationSection from "../../components/industrial-accident/DifferentiationSection";
import ExpertSection from "../../components/industrial-accident/ExpertSection";
import ProcessSection from "../../components/industrial-accident/ProcessSection";
import ExtraCompensationSection from "../../components/industrial-accident/ExtraCompensationSection";
import TestimonialsSection from "../../components/industrial-accident/TestimonialsSection";
import FAQSection from "../../components/industrial-accident/FAQSection";
import FinalCTASection from "../../components/industrial-accident/FinalCTASection";
import Footer from "../../components/industrial-accident/Footer";
import StickyBar from "../../components/industrial-accident/StickyBar";

export default function IndustrialAccidentPage() {
  return (
    <main className="min-h-screen bg-[#F0FDF4]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <SuccessCasesSection />
      <DifferentiationSection />
      <ExpertSection />
      <ProcessSection />
      <ExtraCompensationSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyBar />
    </main>
  );
}
