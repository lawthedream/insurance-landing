import Navbar from '../components/injury-disability/Navbar';
import Hero from '../components/injury-disability/Hero';
import ProblemSection from '../components/injury-disability/ProblemSection';
import SolutionSection from '../components/injury-disability/SolutionSection';
import SuccessCasesSection from '../components/injury-disability/SuccessCasesSection';
import DifferentiationSection from '../components/injury-disability/DifferentiationSection';
import ExpertSection from '../components/ExpertSection';
import BrandStorySection from '../components/injury-disability/BrandStorySection';
import ProcessSection from '../components/injury-disability/ProcessSection';
import TestimonialsSection from '../components/injury-disability/TestimonialsSection';
import FAQSection from '../components/injury-disability/FAQSection';
import FinalCTASection from '../components/injury-disability/FinalCTASection';
import ChannelSection from '../components/injury-disability/ChannelSection';
import Footer from '../components/injury-disability/Footer';
import StickyBar from '../components/injury-disability/StickyBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "더드림법률사무소 - 상해후유장해 보상 전문",
    description: "상해후유장해 보험금·배상금 청구 전문. 손해사정사, 변호사, 노무사 3인 협업 시스템으로 최선의 보상을 약속합니다.",
    openGraph: {
        title: "더드림법률사무소 - 상해후유장해 보상 전문",
        description: "상해후유장해 보상금 청구, 최고의 전문가 그룹 더드림이 함께합니다.",
        images: ["/logo_new_color.png"],
    }
};

export default function InjuryDisabilityPage() {
    return (
        <main className="min-h-screen bg-[#F9F9F7] font-sans text-[#333333]">
            <Navbar />
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <SuccessCasesSection />
            <DifferentiationSection />
            <ExpertSection />
            <BrandStorySection />
            <ProcessSection />
            <TestimonialsSection />
            <FAQSection />
            <FinalCTASection />
            <ChannelSection />
            <Footer />
            <StickyBar />
        </main>
    );
}
