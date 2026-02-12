
import React from 'react';

// Using high-quality representative images for the 10 moments provided by the user
const MOMENT_IMAGES: { url: string; caption: string }[] = [
  { url: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80&w=400', caption: 'The First Chapter' }, // School Uniform (User Photo 1)
  { url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=400', caption: 'A New Friend' }, // Bunny (User Photo 2)
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400', caption: 'Ocean Breezes' }, // Beach (User Photo 3)
  { url: 'https://images.unsplash.com/photo-1516589174184-c68d8e4142fd?auto=format&fit=crop&q=80&w=400', caption: 'Warmest Hugs' }, // Hug (User Photo 5)
  { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400', caption: 'Lab Day Fun' }, // Lab Coat (User Photo 6)
  { url: 'https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fpvmlcogl1kig1.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3D253188ff906eb4eb10468deba936ace15fe8d8f0', caption: 'Just Us' }, // Green Shirt Selfie (User Photo 4)
  { url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400', caption: 'Sweet Kisses' }, // Cheek Kiss (User Photo 8)
  { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400', caption: 'Looking Sharp' }, // Suit (User Photo 9)
  { url: '', caption: 'That Smile' }, // Girl Selfie (User Photo 7)
  { url: '', caption: 'Always Mine' }, // Close-up (User Photo 10)
  { url: '', caption: 'True Love' }, // Bonus 1
  { url: 'https://images.unsplash.com/photo-1513273159383-c2827673b743?auto=format&fit=crop&q=80&w=400', caption: 'Forever' }, // Bonus 2
  { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400', caption: 'Together' }, // Bonus 3
  { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=400', caption: 'Soulmates' }  // Bonus 4
];

const PhotoTile: React.FC<{ data: { url: string; caption: string }; className?: string }> = ({ data, className = "" }) => (
  <div className={`group relative overflow-hidden rounded-lg transition-all duration-500 bg-white shadow-sm border-2 border-white hover:z-20 hover:scale-[1.03] hover:shadow-xl ${className}`}>
    <img src={data.url} alt={data.caption} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 md:p-3">
      <span className="text-white font-serif italic text-[10px] md:text-xs drop-shadow-md">{data.caption}</span>
    </div>
  </div>
);

interface MomentsGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const MomentsGallery: React.FC<MomentsGalleryProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-rose-950/20 backdrop-blur-md z-[60] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-full lg:max-w-4xl bg-white/95 backdrop-blur-3xl z-[70] shadow-2xl border-l border-rose-100 transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
      >
        <div className="p-8 md:p-12 min-h-full flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-cursive text-rose-600">Heart Collage</h2>
              <div className="h-1.5 w-24 bg-rose-200 mt-2 rounded-full" />
            </div>
            <button onClick={onClose} className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-rose-50 text-rose-300 transition-all hover:rotate-90">
              <span className="text-3xl">✕</span>
            </button>
          </div>

          <p className="text-rose-400 font-serif italic mb-12 text-center max-w-lg">
            "Every piece of this heart is a memory I woud love to maek with you ."
          </p>

          <div className="grid grid-cols-12 grid-rows-[repeat(12,minmax(0,1fr))] gap-2 md:gap-3 w-full max-w-2xl aspect-square">
            {/* ROW 1-2 (Top Lobes) */}
            <PhotoTile data={MOMENT_IMAGES[0]} className="col-start-3 col-span-2 row-start-1 row-span-2" />
            <PhotoTile data={MOMENT_IMAGES[1]} className="col-start-5 col-span-2 row-start-1 row-span-2" />
            <PhotoTile data={MOMENT_IMAGES[2]} className="col-start-7 col-span-4 row-start-1 row-span-4" />

            {/* ROW 3-4 (Sides) */}
            <PhotoTile data={MOMENT_IMAGES[3]} className="col-start-1 col-span-2 row-start-3 row-span-2" />
            <PhotoTile data={MOMENT_IMAGES[4]} className="col-start-11 col-span-2 row-start-3 row-span-2" />

            {/* ROW 5-6 (Main Heart Body) */}
            <PhotoTile data={MOMENT_IMAGES[5]} className="col-start-3 col-span-4 row-start-3 row-span-4" />
            <PhotoTile data={MOMENT_IMAGES[6]} className="col-start-7 col-span-2 row-start-5 row-span-2" />
            <PhotoTile data={MOMENT_IMAGES[7]} className="col-start-9 col-span-4 row-start-5 row-span-4" />

            {/* ROW 7-8 (Transition) */}
            <PhotoTile data={MOMENT_IMAGES[8]} className="col-start-1 col-span-2 row-start-5 row-span-2" />
            <PhotoTile data={MOMENT_IMAGES[9]} className="col-start-7 col-span-2 row-start-7 row-span-2" />
            <PhotoTile data={MOMENT_IMAGES[10]} className="col-start-2 col-span-2 row-start-7 row-span-2" />

            {/* ROW 9-10 (Lower Tapering) */}
            <PhotoTile data={MOMENT_IMAGES[11]} className="col-start-4 col-span-4 row-start-7 row-span-4" />
            <PhotoTile data={MOMENT_IMAGES[12]} className="col-start-8 col-span-2 row-start-9 row-span-2" />
            
            {/* ROW 11-12 (Tip) */}
            <PhotoTile data={MOMENT_IMAGES[13]} className="col-start-5 col-span-2 row-start-11 row-span-2" />
          </div>

          <div className="mt-16 text-center">
            <button onClick={onClose} className="bg-rose-500 text-white px-12 py-4 rounded-full font-bold shadow-xl hover:bg-rose-600 transition transform hover:scale-105">
              Back to Flyers
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MomentsGallery;
