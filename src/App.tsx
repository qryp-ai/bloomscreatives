import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AiSolutions from './pages/services/AiSolutions';
import Designing from './pages/services/Designing';
import BrandingStrategy from './pages/services/BrandingStrategy';
import DigitalMarketing from './pages/services/DigitalMarketing';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import InfluencerMarketing from './pages/services/InfluencerMarketing';
import WebSolutions from './pages/services/WebSolutions';
import ContentProduction from './pages/services/ContentProduction';
import ManagedGrowth from './pages/services/ManagedGrowth';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/ai-solutions" element={<AiSolutions />} />
                <Route path="/services/designing" element={<Designing />} />
                <Route path="/services/branding-strategy" element={<BrandingStrategy />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
                <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
                <Route path="/services/web-solutions" element={<WebSolutions />} />
                <Route path="/services/content-production" element={<ContentProduction />} />
                <Route path="/services/managed-growth" element={<ManagedGrowth />} />
            </Routes>
        </Router>
    );
}

export default App;
