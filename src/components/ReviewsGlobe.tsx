import { useMemo } from 'react';
import { Globe3D, GlobeMarker } from './ui/3d-globe';
import { reviewsData, ClientReview } from '../data/reviews';

export interface ReviewsGlobeProps {
  onHoverReview: (review: ClientReview | null) => void;
  onClickReview?: (review: ClientReview) => void;
  scale?: number;
}

export default function ReviewsGlobe({ onHoverReview, onClickReview }: ReviewsGlobeProps) {
  const markers: GlobeMarker[] = useMemo(() => {
    return reviewsData.map((review) => ({
      lat: review.coordinates[1],
      lng: review.coordinates[0],
      label: review.clientName,
      // Using a consistent random avatar based on ID
      src: `https://i.pravatar.cc/150?u=${review.id}`,
    }));
  }, []);

  const handleMarkerClick = (marker: GlobeMarker) => {
    const review = reviewsData.find(r => r.clientName === marker.label);
    if (review && onClickReview) {
      onClickReview(review);
    }
  };

  const handleMarkerHover = (marker: GlobeMarker | null) => {
    if (!marker) {
      onHoverReview(null);
      return;
    }
    const review = reviewsData.find(r => r.clientName === marker.label);
    if (review) {
      onHoverReview(review);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Globe3D
        markers={markers}
        config={{
          radius: 2,
          autoRotateSpeed: 0.2,
          atmosphereColor: "#6366f1",
          atmosphereIntensity: 5,
          showAtmosphere: false,
          pointLightIntensity: 1.5,
          ambientIntensity: 0.7,
        }}
        onMarkerClick={handleMarkerClick}
        onMarkerHover={handleMarkerHover}
        className="w-full h-full"
      />
    </div>
  );
}

