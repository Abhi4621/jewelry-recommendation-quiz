export default function Hero({ onStart }) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[#FDFBF7]">
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[#1A1A1A] leading-tight">
          Find the piece that <br /> 
          <span className="italic text-[#1A1A1A]">speaks to you.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 font-light tracking-wide">
          Our virtual consultant analyzes your style preferences to find your perfect match in under 60 seconds.
        </p>
        
        {/* CHANGED: Background to bg-[#1A1A1A] and text to text-white */}
        <button 
          onClick={onStart}
          className="bg-[#1A1A1A] text-white px-10 py-4 rounded-none hover:bg-[#D4AF37] transition-all duration-500 uppercase text-xs tracking-[0.2em] font-bold shadow-lg"
        >
          Begin the Experience
        </button>

        <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest">
          Takes 1 minute • personalized results
        </p>
      </div>
    </div>
  );
}