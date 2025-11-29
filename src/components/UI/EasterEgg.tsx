import React, { useState } from 'react';

interface EasterEggProps {
  children: React.ReactNode;
}

const EasterEgg: React.FC<EasterEggProps> = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      setShowEasterEgg(true);
      // Reset after showing
      setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 3000);
    } else if (newCount > 5) {
      setClickCount(0);
    }
  };

  return (
    <>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      
      {showEasterEgg && (
        <div className="easter-egg-modal">
          <div className="easter-egg-content">
            <div className="easter-egg-animation">🎉</div>
            <h3>Selamat! Anda menemukan Easter Egg!</h3>
            <p>Terima kasih sudah mengeksplorasi portfolio saya dengan detail! 🚀</p>
            <div className="easter-egg-animation">✨</div>
          </div>
        </div>
      )}
    </>
  );
};

export default EasterEgg;