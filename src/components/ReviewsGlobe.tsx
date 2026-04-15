import { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule
} from 'react-simple-maps';
import { motion } from 'framer-motion';
import { reviewsData, ClientReview } from '../data/reviews';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const geographyStyle = {
  default: { outline: "none" },
  hover: { fill: "rgba(255, 255, 255, 0.25)", outline: "none" },
  pressed: { outline: "none" },
};

export interface ReviewsGlobeProps {
    onHoverReview: (review: ClientReview | null) => void;
    scale?: number;
}

import useIsMobile from '../hooks/useIsMobile';

export default function ReviewsGlobe({ onHoverReview, scale = 300 }: ReviewsGlobeProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdateTime = 0;
    
    // Throttle rotation on mobile to save CPU, while allowing smoother fast updates on desktop.
    // Actually, on mobile, SVG repaints are expensive. We update less frequently.
    const updateInterval = isMobile ? 80 : 30; // 12fps on mobile vs 33fps on desktop

    const updateRotation = (timestamp: number) => {
      if (!selectedId) {
        if (timestamp - lastUpdateTime > updateInterval) {
          setRotation(prev => (prev + (isMobile ? 0.2 : 0.3)) % 360);
          lastUpdateTime = timestamp;
        }
      } else {
        lastUpdateTime = timestamp; // Keep it fresh when hovered
      }
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedId, isMobile]);

  return (
    <div className="relative w-full aspect-square max-w-4xl mx-auto overflow-visible">
      <div className="absolute inset-0 flex items-center justify-center">
        <ComposableMap
          projection="geoOrthographic"
          projectionConfig={{
            scale: scale,
            rotate: [rotation, -20, 0]
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Sphere stroke="rgba(255, 255, 255, 0.2)" strokeWidth={0.5} fill="rgba(10, 10, 26, 0.8)" id="sphere" />
          {!isMobile && <Graticule stroke="rgba(255, 255, 255, 0.05)" strokeWidth={0.5} />}
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: { rsmKey: string }) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth={0.3}
                  style={geographyStyle}
                />
              ))
            }
          </Geographies>
          {reviewsData.map((review) => (
            <Marker
              key={review.id}
              coordinates={review.coordinates}
              onMouseEnter={() => {
                  setSelectedId(review.id);
                  onHoverReview(review);
              }}
              onMouseLeave={() => {
                  setSelectedId(null);
                  onHoverReview(null);
              }}
            >
              <motion.circle
                r={selectedId === review.id ? 8 : (isMobile ? 3 : 4)}
                fill={selectedId === review.id ? "#8b5cf6" : "#6366f1"}
                stroke="#fff"
                strokeWidth={selectedId === review.id ? 2 : 1}
                className="cursor-pointer"
                initial={false}
                animate={{
                    r: selectedId === review.id ? 8 : (isMobile ? 3 : 4),
                    fill: selectedId === review.id ? "#8b5cf6" : "#4f46e5"
                }}
              />
              {!isMobile && (
                <circle
                  r={15}
                  fill="#6366f1"
                  className="animate-ping opacity-10 pointer-events-none"
                />
              )}
            </Marker>
          ))}
        </ComposableMap>
      </div>

    </div>
  );
}
