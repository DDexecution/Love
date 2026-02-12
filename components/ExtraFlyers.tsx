
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface CouponProps {
  title: string;
  description: string;
  icon: string;
}

const Coupon: React.FC<CouponProps> = ({ title, description, icon }) => {
  const [redeemed, setRedeemed] = useState(false);
  const [serialNo, setSerialNo] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const generateSerial = (isRedeemed: boolean) => {
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    return isRedeemed ? `RDMD-${randomPart}` : `VAL-CUP-${randomPart}`;
  };

  useEffect(() => {
    setSerialNo(generateSerial(false));
  }, []);

  const handleRedeem = async () => {
    const newSerial = generateSerial(true);
    setRedeemed(true);
    setSerialNo(newSerial);
    setIsSending(true);

    try {
      // 1. Use Gemini to generate a sweet notification message from "Riyaz"
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Write a very short, romantic notification email from "Riyaz" to Marco. 
      Inform him that Riyaz has just redeemed the "${title}" coupon. 
      The redemption ID is ${newSerial}. Keep it to 1-2 sentences.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      const emailBody = response.text || `Riyaz has redeemed the "${title}" coupon! Redemption ID: ${newSerial}`;

      // 2. Send the email using FormSubmit AJAX
      // Including name: "Riyaz" ensures the email appears as sent by Riyaz.
      await fetch("https://formsubmit.co/ajax/ronaksah880@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: "Ronak",
          subject: `❤️ Coupon Redeemed by Riya: ${title}`,
          message: emailBody,
          coupon_name: title,
          redemption_id: newSerial,
          _template: "table"
        })
      });
      
      setIsSending(false);
    } catch (error) {
      console.error("Failed to notify Ronak:", error);
      setIsSending(false);
      setSendError(true);
    }
  };

  return (
    <div className="relative group bg-white p-6 rounded-xl border-2 border-dashed border-rose-200 shadow-sm hover:shadow-md transition-all select-none overflow-hidden">
      {/* Ticket Cutouts */}
      <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#fffafb] rounded-full border border-rose-100 -translate-y-1/2 z-10" />
      <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#fffafb] rounded-full border border-rose-100 -translate-y-1/2 z-10" />
      
      <div className="flex flex-col gap-4 relative z-0">
        <div className="flex items-center gap-4">
          <div className={`text-4xl w-14 h-14 flex items-center justify-center rounded-lg ${redeemed ? 'grayscale bg-gray-50' : 'bg-rose-50'} transition-all`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className={`font-bold text-lg uppercase tracking-tight ${redeemed ? 'text-gray-400 line-through' : 'text-rose-600'}`}>
                {title}
              </h4>
              {isSending && (
                <span className="text-[10px] text-rose-400 animate-pulse font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-rose-400 rounded-full animate-ping" />
                  Notifying Marco...
                </span>
              )}
              {redeemed && !isSending && !sendError && (
                <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                  <span>📩</span> Sent as Riya
                </span>
              )}
            </div>
            <div className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${redeemed ? 'text-green-500' : 'text-rose-300'}`}>
              {redeemed ? 'Redemption ID:' : 'Serial No:'} {serialNo}
            </div>
          </div>
        </div>
        
        <p className={`text-sm italic leading-snug ${redeemed ? 'text-gray-300' : 'text-rose-400'}`}>
          {description}
        </p>

        <button 
          onClick={handleRedeem}
          disabled={redeemed || isSending}
          className={`w-full py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all transform active:scale-95 ${
            redeemed 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-rose-500 text-white shadow-lg shadow-rose-200 hover:bg-rose-600'
          }`}
        >
          {isSending ? 'Sending Magic...' : redeemed ? 'Successfully Redeemed! ❤️' : 'Redeem Coupon'}
        </button>
      </div>
      
      {redeemed && (
        <div className="absolute inset-0 bg-white/40 flex items-center justify-center pointer-events-none">
          <div className="rotate-12 border-4 border-rose-500 text-rose-500 font-bold px-4 py-2 rounded uppercase text-2xl opacity-40">
            USED
          </div>
        </div>
      )}
    </div>
  );
};

interface ExtraFlyersProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExtraFlyers: React.FC<ExtraFlyersProps> = ({ isOpen, onClose }) => {
  const basketItems = [
    { 
      title: "", 
      description: "", 
      icon: "🌶️" 
    },
    { 
      title: "", 
      description: "", 
      icon: "📖" 
    },
    { 
      title: "Dare Day", 
      description: "You give me any challenge, and I must complete it with a smile and vice versa.", 
      icon: "😈" 
    },
    { 
      title: "Movie Night", 
      description: "Pick any movie, I'll provide the snacks and endless cuddles.", 
      icon: "🍿" 
    }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-rose-950/30 backdrop-blur-md z-[80] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-full lg:max-w-md bg-[#fffafb] z-[90] shadow-2xl border-r-2 border-rose-100 transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl font-cursive text-rose-600">Gift Basket</h2>
              <p className="text-[10px] font-bold text-rose-300 uppercase tracking-widest mt-1">Special Edition Coupons</p>
            </div>
            <button 
              onClick={onClose} 
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-rose-50 text-rose-300 transition-all hover:-rotate-90"
            >
              <span className="text-2xl">✕</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar pb-10">
            {basketItems.map((item, idx) => (
              <Coupon key={idx} {...item} />
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-rose-50 text-center">
            <p className="text-rose-400 text-xs italic font-medium">"Redeem these whenever your heart desires."</p>
            <p className="text-[9px] text-rose-200 uppercase tracking-[0.2em] mt-2 font-bold">Notifying Marco as Riyaz</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraFlyers;
