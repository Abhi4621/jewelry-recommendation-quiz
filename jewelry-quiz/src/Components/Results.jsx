import React from 'react';

const PRODUCTS = [
  { id: 1, name: "The Aurora Solitaire", style: "classic", price: "$2,100", img: "https://images.unsplash.com/photo-1588444839799-eb0ae5133a76?w=400" },
  { id: 2, name: "Vintage Petal Band", style: "vintage", price: "$1,850", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
  { id: 3, name: "Modern Hexa Link", style: "modern", price: "$950", img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400" },
];

export default function Results({ selections, onReset }) {
  // Logic to show products based on the user's style choice
  const matchedProducts = PRODUCTS.filter(p => p.style === selections.style);

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 animate-in fade-in duration-1000">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl mb-4">Your Curated Collection</h2>
        <p className="text-gray-500 italic">Based on your preference for {selections.style} aesthetics.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {matchedProducts.map(product => (
          <div key={product.id} className="group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="font-serif text-xl mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-6">{product.price}</p>
            <button className="w-full py-3 border border-black hover:bg-black hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center border-t pt-10">
        <button onClick={onReset} className="text-gray-400 hover:text-black transition-colors uppercase text-[10px] tracking-[0.2em]">
          Start Over
        </button>
      </div>
    </div>
  );
}