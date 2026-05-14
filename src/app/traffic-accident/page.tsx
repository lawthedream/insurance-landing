import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ProblemSection from '../../components/ProblemSection';
import SolutionSection from '../../components/SolutionSection';
import SuccessCasesSection from '../../components/SuccessCasesSection';
import DifferentiationSection from '../../components/DifferentiationSection';
import ExpertSectionTraffic from '../../components/ExpertSectionTraffic';
import ProcessSection from '../../components/ProcessSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import FAQSection from '../../components/FAQSection';
import FinalCTASection from '../../components/FinalCTASection';
import Footer from '../../components/Footer';
import StickyBar from '../../components/StickyBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "더드림법률사무소 - 교통사고 소송·합의 전문",
    description: "교통사고 보상, 합의금 산정부터 복잡한 소송까지. 손해사정사·변호사·노무사 드림팀이 최선의 결과를 만들어냅니다.",
};

export default function TrafficAccidentPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F9] font-sans text-[#333333]">
            <Navbar />
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <SuccessCasesSection />
            <DifferentiationSection />
            <ExpertSectionTraffic />
            <ProcessSection />
            <TestimonialsSection />
            <FAQSection />
            <FinalCTASection />
            <Footer />
            <StickyBar />
        </main>
    );
}
