
import React from 'react';

interface FutureScrapbookProps {
  isOpen: boolean;
  onClose: () => void;
}

const FutureScrapbook: React.FC<FutureScrapbookProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-rose-950/40 backdrop-blur-md z-[100] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Container */}
      <div 
        className={`fixed inset-0 z-[110] flex flex-col transition-all duration-700 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0 pointer-events-none'}`}
      >
        <div className="relative flex-1 bg-[#fffafb] overflow-y-auto custom-scrollbar p-4 md:p-8 flex flex-col items-center">
          
          {/* Header */}
          <div className="w-full max-w-6xl flex justify-between items-center mb-12 sticky top-0 z-50">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-6xl font-cursive text-rose-600 drop-shadow-sm">Our Future</h2>
              <span className="text-[10px] font-bold text-rose-300 uppercase tracking-[0.5em] ml-1">Volume I: Forever</span>
            </div>
            <button 
              onClick={onClose} 
              className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-rose-400 hover:bg-white/60 transition-all hover:rotate-90 shadow-lg border border-rose-100"
            >
              <span className="text-3xl">✕</span>
            </button>
          </div>

          {/* Page 1: The Romantic Vision Board */}
          <div className="relative w-full max-w-5xl bg-white shadow-[0_20px_50px_rgba(244,63,94,0.1)] rounded-sm p-6 md:p-16 mb-20 border border-rose-50 min-h-[900px] flex flex-col items-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            <div className="relative z-10 text-center mb-16 max-w-2xl">
              <h3 className="font-serif text-rose-800 text-3xl md:text-5xl italic mb-4">"I want to grow old with you."</h3>
              <p className="font-cursive text-2xl text-rose-400">And see the world through your eyes, every single day.</p>
              <div className="h-px w-24 bg-rose-100 mx-auto mt-8" />
            </div>

            <div className="relative w-full grid grid-cols-12 gap-6 h-full">
              <div className="col-span-12 md:col-span-5 relative group">
                <div className="bg-rose-50 p-2 shadow-xl rotate-[-2deg] transition-transform hover:rotate-0">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Home" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="mt-4 p-4 text-center">
                    <h4 className="font-serif text-rose-900 text-xl font-bold uppercase tracking-widest">Our Sanctuary</h4>
                    <p className="text-rose-400 italic text-sm mt-2">A house filled with laughter and the smell of fresh coffee.</p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-center px-8 md:px-12 text-center space-y-8">
                <p className="font-serif text-stone-700 text-lg md:text-xl leading-relaxed italic">
                  "The hand I'm holding makes every step worth it."
                </p>
                <div className="w-full space-y-6">
                  <div className="flex items-center gap-4"><div className="w-8 h-8 rounded-full border border-rose-200 flex items-center justify-center text-rose-400 text-xs">01</div><p className="font-serif text-rose-800 uppercase tracking-widest text-xs">Summer Nights</p></div>
                  <div className="flex items-center gap-4 justify-end"><p className="font-serif text-rose-800 uppercase tracking-widest text-xs">A Garden of Our Own</p><div className="w-8 h-8 rounded-full border border-rose-200 flex items-center justify-center text-rose-400 text-xs">02</div></div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 flex gap-12 items-center opacity-30">
               <span className="text-6xl text-rose-200">❧</span>
               <span className="font-serif text-rose-200 uppercase tracking-[1em] text-sm">Destiny</span>
               <span className="text-6xl text-rose-200">☙</span>
            </div>
          </div>

          {/* Page 2: The Nostalgic Scrapbook Board */}
          <div className="relative w-full max-w-5xl bg-[#fdfaf6] shadow-2xl rounded-sm p-6 md:p-12 mb-20 border border-stone-200 min-h-[900px]">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               <div className="col-span-2 row-span-2 bg-stone-100 p-8 flex flex-col justify-center items-center text-center shadow-md border border-stone-200 relative overflow-hidden">
                  <h3 className="font-serif text-stone-800 text-2xl uppercase tracking-[0.2em] mb-4 relative z-10">Hopeless romantic</h3>
                  <p className="font-serif text-stone-600 italic text-sm leading-relaxed relative z-10">"This person is in love with love. They make love look like an art form."</p>
                  <div className="mt-12 text-rose-500 text-6xl opacity-20">♥</div>
               </div>
               {[
                 { src: "https://images.unsplash.com/photo-1522673607200-164883eecd4c?auto=format&fit=crop&q=80&w=400", label: "My love.*", rot: "rotate-2" },
                 { src: "https://images.unsplash.com/photo-1516589174184-c68d8e4142fd?auto=format&fit=crop&q=80&w=400", label: "Always", rot: "-rotate-3" },
                 { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400", label: "Forever", rot: "rotate-6" },
                 { src: "https://images.unsplash.com/photo-1513273159383-c2827673b743?auto=format&fit=crop&q=80&w=400", label: "US", rot: "-rotate-1" }
               ].map((pic, idx) => (
                 <div key={idx} className={`relative overflow-hidden aspect-[3/4] rounded-sm shadow-md border-4 border-white ${pic.rot}`}>
                    <img src={pic.src} className="w-full h-full object-cover" alt="Moment" />
                    <div className="absolute bottom-2 right-2 font-cursive text-white text-xl">{pic.label}</div>
                 </div>
               ))}
               <div className="col-span-2 bg-white p-10 flex flex-col items-center justify-center text-center rounded-sm border border-rose-50 shadow-inner">
                  <p className="font-serif text-rose-800 italic text-xl">"if it feels like love then it must be love"</p>
               </div>
             </div>
          </div>

          {/* Page 3: The Travel Diary (Adventure) */}
          <div className="relative w-full max-w-5xl bg-[#f7f3f0] shadow-2xl rounded-sm p-6 md:p-16 mb-20 border border-stone-300 min-h-[900px] overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/binding-light.png')] opacity-10" />
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-serif text-stone-800 text-4xl uppercase tracking-[0.3em] mb-12">The World with You</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                <div className="space-y-8">
                  <div className="bg-white p-4 shadow-lg -rotate-2">
                    <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" alt="Kyoto" className="w-full h-64 object-cover" />
                    <p className="font-cursive text-2xl text-stone-600 mt-4 text-center">Cherry blossoms in Kyoto...</p>
                  </div>
                  <div className="p-6 border-2 border-dashed border-stone-300 rounded-lg bg-stone-50/50">
                    <h4 className="font-serif text-stone-500 uppercase text-xs tracking-widest mb-4">Bucket List</h4>
                    <ul className="space-y-3 font-serif italic text-stone-700">
                      <li>• Aurora Borealis in Iceland</li>
                      <li>• A rainy morning in London</li>
                      <li>• Sunset over the Santorini cliffs</li>
                      <li>• Getting lost in New York City</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div className="bg-white p-4 shadow-lg rotate-3">
                    <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800" alt="Paris" className="w-full h-64 object-cover" />
                    <p className="font-cursive text-2xl text-stone-600 mt-4 text-center">Coffee dates in Paris...</p>
                  </div>
                  <div className="mt-8 text-center relative">
                    <div className="text-8xl text-stone-200 absolute -top-10 left-1/2 -translate-x-1/2 opacity-50 font-serif">“</div>
                    <p className="font-serif text-stone-800 text-xl italic leading-relaxed z-10 relative">
                      "To travel is to live, but to travel with you is to find home in every city."
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                      <span className="w-10 h-10 flex items-center justify-center border border-stone-300 rounded-full">✈️</span>
                      <span className="w-10 h-10 flex items-center justify-center border border-stone-300 rounded-full">🗺️</span>
                      <span className="w-10 h-10 flex items-center justify-center border border-stone-300 rounded-full">📸</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page 4: The Infinite Promise */}
          <div className="relative w-full max-w-5xl bg-white shadow-2xl rounded-sm p-6 md:p-20 mb-20 border border-rose-50 flex flex-col items-center">
             <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 to-transparent pointer-events-none" />
             
             <div className="relative z-10 max-w-2xl text-center space-y-12">
               <h3 className="font-cursive text-6xl text-rose-600">The Infinite Promise</h3>
               
               <div className="space-y-6 font-serif text-stone-700 text-lg leading-relaxed text-center px-4">
                 <p>"In a world that never stops moving, you are my still point."</p>
                 <p>
                   "I promise to choose you every single day. To celebrate your wins, 
                   to hold you through the losses, and to never stop being your biggest fan."
                 </p>
                 <p>
                   "Our story is my favorite book, and I can't wait to write the next 
                   ten thousand chapters with you."
                 </p>
               </div>

               <div className="flex flex-col items-center space-y-4 pt-10">
                 <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 text-3xl">💍</div>
                 <div className="h-px w-32 bg-rose-100" />
                 <p className="font-cursive text-3xl text-rose-400">Yours, Forever & Always</p>
               </div>

               <div className="pt-20 opacity-20 flex flex-col items-center">
                 <p className="font-serif uppercase tracking-[1em] text-[10px] mb-8">End of Volume I</p>
                 <div className="flex gap-4">
                   <div className="w-2 h-2 rounded-full bg-rose-300" />
                   <div className="w-2 h-2 rounded-full bg-rose-300" />
                   <div className="w-2 h-2 rounded-full bg-rose-300" />
                 </div>
               </div>
             </div>
          </div>

          <div className="w-full max-w-lg text-center pb-20 opacity-40 font-serif italic text-rose-400">
             "To be continued..."
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureScrapbook;
