import CaseStudyDetail from './pages/CaseStudyDetail';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import GlobeReviewsPage from './pages/GlobeReviewsPage';
import CinematicGreeting from './components/CinematicGreeting';
import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function AppRoutes({ showIntro, setShowIntro }: { showIntro: boolean; setShowIntro: (show: boolean) => void }) {
    const navigate = useNavigate();

    const handleIntroComplete = useCallback(() => {
        setShowIntro(false);
        navigate('/reviews');
    }, [navigate, setShowIntro]);

    return (
        <>
            {showIntro && <CinematicGreeting onComplete={handleIntroComplete} />}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/reviews" element={<GlobeReviewsPage />} />
                <Route path="/blogs" element={<Blogs/>} />
                <Route path="/blog/:id" element={<BlogDetail/>} />
                <Route path="/case-study/:id" element={<CaseStudyDetail/>} />
            </Routes>
        </>
    );
}

export default function Router() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <BrowserRouter>
            <AppRoutes showIntro={showIntro} setShowIntro={setShowIntro} />
        </BrowserRouter>
    );
}
