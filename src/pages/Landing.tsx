import { useEffect } from 'react';

export default function Landing() {
  useEffect(() => {
    // Landing page is now a placeholder; navigation is handled globally in Router.tsx
  }, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Landing page is now purely a redirect layer behind the global greeting */}
    </div>
  );
}
