import ChromaGrid from '../components/ChromaGrid';
import '../styles/Portfolio.css';

const portfolioItems = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkxxFA2D-BslQdDLo0Kxu02QI0XEMEuETrDoGhsEWBi3ovX1DTrrTPLM&s',
        title: 'Project Alpha',
        subtitle: 'A revolutionary web application',
        handle: 'Web Development',
        borderColor: '#667eea',
        gradient: 'linear-gradient(145deg, #667eea, #000)',
        url: 'https://project-alpha.demo.com'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkxxFA2D-BslQdDLo0Kxu02QI0XEMEuETrDoGhsEWBi3ovX1DTrrTPLM&s',
        title: 'Project Beta',
        subtitle: 'Mobile-first design system',
        handle: 'UI/UX Design',
        borderColor: '#764ba2',
        gradient: 'linear-gradient(145deg, #764ba2, #000)',
        url: 'https://project-beta.demo.com'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkxxFA2D-BslQdDLo0Kxu02QI0XEMEuETrDoGhsEWBi3ovX1DTrrTPLM&s',
        title: 'Project Gamma',
        subtitle: 'E-commerce platform',
        handle: 'Full Stack',
        borderColor: '#f093fb',
        gradient: 'linear-gradient(145deg, #f093fb, #000)',
        url: 'https://project-gamma.demo.com'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkxxFA2D-BslQdDLo0Kxu02QI0XEMEuETrDoGhsEWBi3ovX1DTrrTPLM&s',
        title: 'Project Delta',
        subtitle: 'AI-powered analytics',
        handle: 'Data Science',
        borderColor: '#4facfe',
        gradient: 'linear-gradient(145deg, #4facfe, #000)',
        url: 'https://project-delta.demo.com'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkxxFA2D-BslQdDLo0Kxu02QI0XEMEuETrDoGhsEWBi3ovX1DTrrTPLM&s',
        title: 'Project Epsilon',
        subtitle: 'Social media dashboard',
        handle: 'Dashboard',
        borderColor: '#00f2fe',
        gradient: 'linear-gradient(145deg, #00f2fe, #000)',
        url: 'https://project-epsilon.demo.com'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkxxFA2D-BslQdDLo0Kxu02QI0XEMEuETrDoGhsEWBi3ovX1DTrrTPLM&s',
        title: 'Project Zeta',
        subtitle: 'Real-time collaboration tool',
        handle: 'Real-time',
        borderColor: '#43e97b',
        gradient: 'linear-gradient(145deg, #43e97b, #000)',
        url: 'https://project-zeta.demo.com'
    },
];

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Our Portfolio</h1>
            <p className="portfolio-subtitle">Interactive showcase of our latest projects</p>
            <div className="chroma-grid-wrapper">
                <ChromaGrid 
                    items={portfolioItems}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>
        </div>
    );
}