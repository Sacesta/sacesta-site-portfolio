import ChromaGrid from '../components/ChromaGrid';

const portfolioItems = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'A revolutionary web application',
        image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Project+Alpha',
    },
    {
        id: 2,
        title: 'Project Beta',
        description: 'Mobile-first design system',
        image: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Project+Beta',
    },
    {
        id: 3,
        title: 'Project Gamma',
        description: 'E-commerce platform',
        image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Project+Gamma',
    },
    {
        id: 4,
        title: 'Project Delta',
        description: 'AI-powered analytics',
        image: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Project+Delta',
    },
    {
        id: 5,
        title: 'Project Epsilon',
        description: 'Social media dashboard',
        image: 'https://via.placeholder.com/400x300/00f2fe/ffffff?text=Project+Epsilon',
    },
    {
        id: 6,
        title: 'Project Zeta',
        description: 'Real-time collaboration tool',
        image: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Project+Zeta',
    },
];

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Our Portfolio</h1>
            <ChromaGrid items={portfolioItems} />
        </div>
    );
}
