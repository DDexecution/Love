
import React from 'react';
import { Memory } from '../types';

interface MemoryLaneProps {
  memories: Memory[];
  onComplete: () => void;
}

const MemoryLane: React.FC<MemoryLaneProps> = ({ memories, onComplete }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* The round GIF featuring a cute cat giving kisses */}
      <div className="mb-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-rose-50">
          <img 
            src="https://media.tenor.com/wEYFAokOXncAAAAi/lova-ya-i-love-it.gif" 
            alt="Cute Cat Kissing" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Heartfelt text replacement */}
      <div className="space-y-6 mb-16 animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-cursive text-rose-600 leading-tight">
          i love you my Babe my Riya Gupta
        </h2>
        <p className="text-2xl md:text-3xl font-serif italic text-rose-400 font-light">
          you make my life worth living
        </p>
      </div>
      
      <div className="text-center">
        <button 
          onClick={onComplete}
          className="bg-rose-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:bg-rose-600 transition transform hover:scale-105 hover:-translate-y-1 focus:outline-none ring-4 ring-rose-100 ring-offset-2 flex items-center gap-2"
        >
          <span>something for you</span>
          <span className="text-2xl">✨</span>
        </button>
      </div>
    </div>
  );
};

export default MemoryLane;
