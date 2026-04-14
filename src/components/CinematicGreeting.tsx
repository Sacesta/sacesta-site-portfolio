import React, { useState, useEffect } from 'react';
import '../styles/CinematicGreeting.css';

interface CinematicGreetingProps {
  onComplete: () => void;
}

const phrases = [
  "Hello \nYou’re exactly where you’re meant to be",
  "Welcome to Sacesta",
  "Your Trusted Technical Partner"
];

const CinematicGreeting: React.FC<CinematicGreetingProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const triggered = React.useRef(false);

  useEffect(() => {
    if (currentIndex < phrases.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 2500);

      return () => clearTimeout(timer);
    } else if (!triggered.current) {
      triggered.current = true;
      
      // Start the shutter transition
      setTimeout(() => setIsFinished(true), 0);
      
      // Wait for shutter animation to finish
      const finishTimer = setTimeout(() => {
        setShowGreeting(false);
        onComplete();
      }, 1200);

      return () => clearTimeout(finishTimer);
    }
  }, [currentIndex, onComplete]);

  if (!showGreeting) return null;

  return (
    <div className={`cinematic-greeting-overlay ${isFinished ? 'shutter-up' : ''}`}>
      {phrases.map((phrase, index) => (
        <div
          key={index}
          className={`greeting-text ${index === currentIndex ? 'active' : ''}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        >
          {phrase}
        </div>
      ))}
    </div>
  );
};

export default CinematicGreeting;
