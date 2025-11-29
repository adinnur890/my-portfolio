import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      {/* Layer 1 - Slowest */}
      <div 
        className="parallax-layer layer-1"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Layer 2 - Medium */}
      <div 
        className="parallax-layer layer-2"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Layer 3 - Fastest */}
      <div 
        className="parallax-layer layer-3"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="shape shape-6"></div>
        <div className="shape shape-7"></div>
      </div>

      {/* Floating Dots */}
      <div className="floating-dots">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxBackground;