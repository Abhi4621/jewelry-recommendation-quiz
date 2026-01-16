import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    id: 'occasion',
    title: "What is the occasion?",
    description: "Every celebration deserves a unique sparkle.",
    options: [
      { label: 'Proposing', value: 'engagement', icon: '💍' },
      { label: 'A Special Gift', value: 'gift', icon: '🎁' },
      { label: 'Treating Myself', value: 'self', icon: '✨' }
    ]
  },
  {
    id: 'style',
    title: "Which aesthetic resonates?",
    description: "Select the silhouette that speaks to your soul.",
    options: [
      { label: 'Vintage & Ornate', value: 'vintage', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600' },
      { label: 'Modern & Minimal', value: 'modern', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600' },
      { 
        label: 'Classic Solitaire', 
        value: 'classic', 
        // Ensure this file is in your /public folder!
        img: '/photo/download.jpg'
      }
    ]
  },
  {
    id: 'budget',
    title: "Desired Investment?",
    description: "We curate excellence across every price point.",
    options: [
      { label: 'Under $2,000', value: 'low' },
      { label: '$2,000 - $10,000', value: 'mid' },
      { label: '$10,000+', value: 'high' }
    ]
  }
];

export default function Quiz({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (val) => {
    const newAnswers = { ...answers, [QUESTIONS[step].id]: val };
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else onComplete(newAnswers);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 min-h-screen text-[#F5F5F5]">
      {/* Navigation & Progress */}
      <div className="mb-16 flex flex-col items-center">
        <div className="w-full max-w-md bg-white/10 h-[2px] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#D4AF37]" 
            animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "circOut" }}
          />
        </div>
        <div className="flex justify-between w-full max-w-md mt-4">
          <button 
            onClick={handleBack}
            className={`text-[10px] uppercase tracking-[0.2em] transition-opacity ${step === 0 ? 'opacity-0 cursor-default' : 'opacity-50 hover:opacity-100 hover:text-[#D4AF37]'}`}
          >
            ← Previous
          </button>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
            Chapter {step + 1} / {QUESTIONS.length}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-3 tracking-tight">{QUESTIONS[step].title}</h2>
          <p className="text-gray-400 font-light italic mb-12">{QUESTIONS[step].description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="group relative overflow-hidden bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#D4AF37]/50 hover:bg-white/10"
              >
                {/* Visual Content with Error Handling */}
                {opt.img ? (
                  <div className="overflow-hidden aspect-[4/5] mb-6 bg-neutral-900">
                    <img 
                      src={opt.img} 
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      alt={opt.label}
                      // If the local file /download.jpg is missing, show a placeholder
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://images.unsplash.com/photo-1588444839799-eb0ae5133a76?w=600";
                      }}
                    />
                  </div>
                ) : (
                  <div className="text-5xl mb-8 mt-4 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                    {opt.icon}
                  </div>
                )}
                
                <div className="relative">
                  <span className="block font-serif text-sm tracking-widest uppercase mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {opt.label}
                  </span>
                  <div className="w-0 h-[1px] bg-[#D4AF37] mx-auto group-hover:w-12 transition-all duration-500" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}