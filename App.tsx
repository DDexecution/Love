
import React, { useState } from 'react';
import HeartBackground from './components/HeartBackground';
import MemoryLane from './components/MemoryLane';
import FinalProposal from './components/FinalProposal';
import RewardsPanel from './components/RewardsPanel';
import MomentsGallery from './components/MomentsGallery';
import ExtraFlyers from './components/ExtraFlyers';
import FutureScrapbook from './components/FutureScrapbook';
import { ProposalStatus, Memory } from './types';

const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    title: 'Where it all started',
    description: 'The first time we met, I knew there was something special about you.',
    date: 'February 14, 2023',
    imageUrl: ''
  }
];

const App: React.FC = () => {
  const [status, setStatus] = useState<ProposalStatus>(ProposalStatus.IDLE);
  const [isFlyersOpen, setIsFlyersOpen] = useState(false);
  const [isMomentsOpen, setIsMomentsOpen] = useState(false);
  const [isExtraFlyersOpen, setIsExtraFlyersOpen] = useState(false);
  const [isFutureOpen, setIsFutureOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-[#fff5f7] text-gray-800 flex flex-col items-center justify-center py-12 overflow-x-hidden">
      <HeartBackground />
      
      <main className="w-full relative z-10">
        {status === ProposalStatus.IDLE && (
          <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-cursive text-rose-600 mb-6 drop-shadow-sm">
              Happy Valentine's Day
            </h1>
            <p className="text-xl md:text-2xl text-rose-400 font-light mb-12 italic">
              A journey of a thousand heartbeats begins with a single moment...
            </p>
            <div className="relative inline-block mb-12">
              <button
                onClick={() => setStatus(ProposalStatus.READING_STORY)}
                className="bg-rose-500 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl hover:bg-rose-600 transition transform hover:scale-110 active:scale-95 flex items-center gap-3"
              >
                <span>Open My Heart</span>
                <span className="text-3xl animate-pulse">❤️</span>
              </button>
            </div>
            
            <footer className="text-rose-300 text-sm font-light italic">
              Made with love
            </footer>
          </div>
        )}

        {status === ProposalStatus.READING_STORY && (
          <MemoryLane 
            memories={INITIAL_MEMORIES} 
            onComplete={() => setStatus(ProposalStatus.THE_QUESTION)} 
          />
        )}

        {status === ProposalStatus.THE_QUESTION && (
          <FinalProposal 
            onAccepted={() => setStatus(ProposalStatus.ACCEPTED)} 
            onRejected={() => setStatus(ProposalStatus.REJECTED)}
          />
        )}

        {status === ProposalStatus.ACCEPTED && (
          <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in flex flex-col items-center">
            <div className="mb-8">
               <img 
                src="https://media.tenor.com/ocBrDK-xRl4AAAAi/love-it-i-love-it.gif" 
                alt="Happy Love" 
                className="mx-auto rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-8 border-white"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-cursive text-rose-600 mb-4">
              I Love You!
            </h1>
            <p className="text-2xl md:text-3xl text-rose-500 font-serif italic mb-8">
              "You make every single day feel like Valentine's Day."
            </p>
            <div className="p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-rose-100 max-w-lg mx-auto mb-10">
              <p className="text-lg text-rose-700 leading-relaxed">
                Thank you for saying YES. I can't wait to spend forever making more memories with you. 
                You are my greatest adventure.
              </p>
            </div>
            <button 
              onClick={() => setIsFlyersOpen(true)}
              className="bg-rose-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-rose-600 transition transform hover:scale-105 flex items-center gap-3"
            >
              <span>something for you</span>
              <span className="text-xl">📄</span>
            </button>
          </div>
        )}

        {status === ProposalStatus.REJECTED && (
          <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in flex flex-col items-center">
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-rose-500/10 blur-3xl rounded-full"></div>
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3N5bm9tZzBwYnd1Y2ZscWw0ZXljZXJkZmtscjZndHllZHR0YmdzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vX9WcCiWwUF7G/giphy.gif" 
                alt="Shame" 
                className="relative mx-auto rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-8 border-rose-300"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-rose-600 mb-6 italic">
              i am sorry my love
            </h1>
            <p className="text-xl text-rose-400 mb-12">
              My heart is broken... how could you say no so many times?
            </p>
            <button 
              onClick={() => setStatus(ProposalStatus.THE_QUESTION)}
              className="bg-rose-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-rose-600 transition transform hover:scale-105 active:scale-95"
            >
              Okay, I'm sorry! Ask again?
            </button>
          </div>
        )}

        <RewardsPanel 
          isOpen={isFlyersOpen} 
          onClose={() => setIsFlyersOpen(false)}
          onMomentsClick={() => {
            setIsFlyersOpen(false);
            setIsMomentsOpen(true);
          }}
          onGiftBasketClick={() => {
            setIsFlyersOpen(false);
            setIsExtraFlyersOpen(true);
          }}
          onFutureClick={() => {
            setIsFlyersOpen(false);
            setIsFutureOpen(true);
          }}
        />

        <MomentsGallery 
          isOpen={isMomentsOpen} 
          onClose={() => {
            setIsMomentsOpen(false);
            setIsFlyersOpen(true);
          }} 
        />

        <ExtraFlyers 
          isOpen={isExtraFlyersOpen}
          onClose={() => {
            setIsExtraFlyersOpen(false);
            setIsFlyersOpen(true);
          }}
        />

        <FutureScrapbook
          isOpen={isFutureOpen}
          onClose={() => {
            setIsFutureOpen(false);
            setIsFlyersOpen(true);
          }}
        />
      </main>
    </div>
  );
};

export default App;
