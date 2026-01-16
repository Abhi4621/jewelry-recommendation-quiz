import { motion } from 'framer-motion';

export default function Loading() {
  const messages = [
    "Analyzing your style preferences...",
    "Searching our diamond inventory...",
    "Consulting with our jewelry experts...",
    "Curating your personalized collection..."
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* Premium Diamond Pulse Animation */}
      <div className="relative mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border border-gold/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: 45 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 m-auto w-6 h-6 bg-gold rotate-45"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-serif text-dark-silk">
          Creating your perfect match
        </h2>
        <motion.p 
          key={messages[0]}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-gray-400 italic font-light tracking-wide"
        >
          {messages[0]}
        </motion.p>
      </motion.div>
    </div>
  );
}