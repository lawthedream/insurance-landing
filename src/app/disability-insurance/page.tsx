import Navbar from '../../components/disability-insurance/Navbar';
import Hero from '../../components/disability-insurance/Hero';
import ProblemSection from '../../components/disability-insurance/ProblemSection';
import SolutionSection from '../../components/disability-insurance/SolutionSection';
import SuccessCasesSection from '../../components/disability-insurance/SuccessCasesSection';
import IssueSection from '../../components/disability-insurance/IssueSection';
import DifferentiationSection from '../../components/disability-insurance/DifferentiationSection';
import ExpertSection from '../../components/ExpertSection';
import ProcessSection from '../../components/disability-insurance/ProcessSection';
import AnchorSection from '../../components/disability-insurance/AnchorSection';
import FAQSection from '../../components/disability-insurance/FAQSection';
import FinalCTASection from '../../components/disability-insurance/FinalCTASection';
import Footer from '../../components/disability-insurance/Footer';
import StickyBar from '../../components/disability-insurance/StickyBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "더드림법률사무소 - 후유장해보험금 분쟁 전문",
    description: "후유장해보험금, 보험사가 거절한다고 포기하면 수 천만원의 손해를 볼 수 있습니다. 더드림은 원스톱으로 끝까지 해결합니다.",
    openGraph: {
        title: "더드림법률사무소 - 후유장해보험금 분쟁 전문",
        description: "후유장해보험금 분쟁, 보험사 출신 손해사정사와 전문 변호사가 원팀으로 끝까지 책임집니다.",
        images: ["/logo_new_color.png"],
    }
};

export default function DisabilityInsurancePage() {
    return (
        <main className="min-h-screen bg-[#F9F9F7] font-sans text-[#333333]">
            <Navbar />
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <SuccessCasesSection />
            <IssueSection />
            <DifferentiationSection />
            <ExpertSection />
            <ProcessSection />
            <AnchorSection />
            <FAQSection />
            <FinalCTASection />
            <Footer />
            <StickyBar />
        </main>
    );
}
