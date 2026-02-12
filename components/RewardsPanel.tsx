
import React from 'react';

interface FlyerProps {
  title: string;
  description: string;
  icon: string;
  onDoubleClick?: () => void;
  colorClass?: string;
}

const Flyer: React.FC<FlyerProps> = ({ title, description, icon, onDoubleClick, colorClass = "bg-white" }) => {
  return (
    <div 
      onDoubleClick={onDoubleClick}
      className={`group relative ${colorClass} p-5 pb-8 rounded-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer select-none border-b-4 border-rose-200 overflow-hidden`}
    >
      {/* Tape Detail */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-rose-200/40 backdrop-blur-sm rotate-2 z-10 border border-white/50 shadow-sm" />
      
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div>
          <h4 className="text-rose-600 font-bold text-xl font-serif uppercase tracking-tighter mb-1 border-b-2 border-rose-100 pb-1">
            {title}
          </h4>
          <p className="text-rose-500 text-sm italic font-medium leading-snug px-2">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center text-[9px] font-bold text-rose-300 uppercase tracking-widest px-1">
        <span>VAL-FLYER-25</span>
        <span className="animate-pulse text-rose-400">Double tap to open</span>
      </div>
      
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
    </div>
  );
};

interface RewardsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onMomentsClick: () => void;
  onGiftBasketClick: () => void;
  onFutureClick: () => void;
}

const RewardsPanel: React.FC<RewardsPanelProps> = ({ isOpen, onClose, onMomentsClick, onGiftBasketClick, onFutureClick }) => {
  const flyers = [
    { 
      title: "Moments", 
      description: "A journey through every laugh we've shared.", 
      icon: "📸",
      onDoubleClick: onMomentsClick
    },
    { 
      title: "Future", 
      description: "A promise of a lifetime filled with adventures.", 
      icon: "💍",
      onDoubleClick: onFutureClick
    },
    { 
      title: "Gift Basket", 
      description: "Open this to see more surprises from me!", 
      icon: "🧺",
      onDoubleClick: onGiftBasketClick
    }
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-rose-900/10 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#fffcfd] z-50 shadow-2xl border-l-2 border-rose-100 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl font-cursive text-rose-600 leading-none">Your Rewards</h2>
              <p className="text-[10px] font-bold text-rose-300 uppercase tracking-[0.3em] mt-2">Valentine Edition</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-rose-50 text-rose-300 transition-all hover:rotate-90">
              <span className="text-2xl">✕</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-10 custom-scrollbar pb-10">
            {flyers.map((flyer, index) => (
              <Flyer key={index} {...flyer} />
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-rose-50 text-center">
            <p className="text-rose-300 text-[10px] font-bold uppercase tracking-[0.3em]">Hand-crafted for you</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsPanel;
