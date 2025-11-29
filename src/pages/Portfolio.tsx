


import MagicBento from "@/components/MagicBento";

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Our Portfolio</h1>
            <p className="portfolio-subtitle">Interactive showcase of our latest projects</p>
            
            <MagicBento 
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            />
                         
        </div>
    );
}