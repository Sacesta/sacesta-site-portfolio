import Navbar from "../components/Navbar";
import PortfolioGrid from "../components/PortfolioGrid";
import "../styles/Showcase.css";

export default function Portfolio() {
    return (
        <div className="premium-showcase-container">
            <div className="portfolio-glow-top" />
            <div className="portfolio-glow-bottom" />
            <Navbar />
            <PortfolioGrid />
        </div>
    );
}