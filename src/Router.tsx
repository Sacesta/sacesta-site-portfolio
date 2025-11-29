import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blogs" element={<Blogs/>} />
                <Route path="/blog/:id" element={<BlogDetail/>} />
            </Routes>
        </BrowserRouter>
    );
}
