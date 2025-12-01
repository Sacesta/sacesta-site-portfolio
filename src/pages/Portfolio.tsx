


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
                enableMagnetism={false}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={15}
                glowColor="255, 255, 255"
            />

        </div>
    );
}