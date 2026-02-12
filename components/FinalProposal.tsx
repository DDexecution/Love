
import React, { useState, useRef } from 'react';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

interface FinalProposalProps {
  onAccepted: () => void;
  onRejected: () => void;
}

const FinalProposal: React.FC<FinalProposalProps> = ({ onAccepted, onRejected }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [noCount, setNoCount] = useState(0);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    // On the 6th attempt (noCount reaches 5 and then another interaction happens), we trigger rejected
    if (noCount >= 5) {
      onRejected();
      return;
    }
    const x = Math.random() * (window.innerWidth - 150) - (window.innerWidth / 4);
    const y = Math.random() * (window.innerHeight - 150) - (window.innerHeight / 4);
    setNoButtonPos({ x, y });
    setYesScale(prev => prev + 0.15);
    setNoCount(prev => prev + 1);
  };

  const handleYes = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ffffff']
    });
    onAccepted();
  };

  const noPhrases = [
    "No", 
    "Are you sure?", 
    "Really sure?", 
    "Think again!", 
    "Wait, really?", 
    "Last chance!"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative">
      <div className="mb-8">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3N5bm9tZzBwYnd1Y2ZscWw0ZXljZXJkZmtscjZndHllZHR0YmdzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif" 
          className="rounded-full w-48 h-48 border-8 border-white shadow-2xl object-cover" 
          alt="Cute Cat" 
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-serif text-rose-900 mb-12">Will you be my Valentine?</h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative w-full h-32">
        <button
          onClick={handleYes}
          style={{ transform: `scale(${yesScale})` }}
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-xl transition-all duration-300 z-10"
        >
          YES!
        </button>
        
        <button
          ref={noBtnRef}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{ 
            position: noCount > 0 ? 'absolute' : 'relative',
            left: noCount > 0 ? `calc(50% + ${noButtonPos.x}px)` : 'auto',
            top: noCount > 0 ? `calc(50% + ${noButtonPos.y}px)` : 'auto',
            transition: 'all 0.2s ease-out'
          }}
          className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-xl whitespace-nowrap"
        >
          {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
        </button>
      </div>

      {noCount > 3 && (
        <p className="mt-12 text-rose-400 font-medium italic animate-pulse">
          Careful... you're running out of 'No's! ❤️
        </p>
      )}
    </div>
  );
};

export default FinalProposal;
