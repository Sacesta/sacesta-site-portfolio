


import MagicBento from "@/components/MagicBento";

export default function Portfolio() {
    return (
        <div className="portfolio-container">    
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