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

export interface ReviewsGlobeProps {
    onHoverReview: (review: ClientReview | null) => void;
}

export default function ReviewsGlobe({ onHoverReview }: ReviewsGlobeProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedId) {
        setRotation(prev => (prev + 0.3) % 360);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [selectedId]);

  return (
    <div className="relative w-full aspect-square max-w-4xl mx-auto overflow-visible">
      <div className="absolute inset-0 flex items-center justify-center">
        <ComposableMap
          projection="geoOrthographic"
          projectionConfig={{
            scale: 250,
            rotate: [rotation, -20, 0]
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Sphere stroke="rgba(255,255,255,0.05)" strokeWidth={0.5} fill="transparent" id="sphere" />
          <Graticule stroke="rgba(255,255,255,0.03)" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: { rsmKey: string }) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#111"
                  stroke="#222"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#1a1a1a", outline: "none" },
                    pressed: { outline: "none" },
                  }}
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
                r={selectedId === review.id ? 8 : 4}
                fill={selectedId === review.id ? "#8b5cf6" : "#6366f1"}
                stroke="#fff"
                strokeWidth={selectedId === review.id ? 2 : 1}
                className="cursor-pointer"
                initial={false}
                animate={{
                    r: selectedId === review.id ? 8 : 4,
                    fill: selectedId === review.id ? "#8b5cf6" : "#4f46e5"
                }}
              />
              <circle
                r={15}
                fill="#6366f1"
                className="animate-ping opacity-10 pointer-events-none"
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>

    </div>
  );
}
