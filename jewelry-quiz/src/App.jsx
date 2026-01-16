import React, { useState } from 'react';
import Hero from './Components/Hero';
import Quiz from './Components/Quiz';
import Results from './Components/Results';
import Loading from './Components/Loading';


function App() {
 const [step, setStep] = useState('home');
  const [answers, setAnswers] = useState({});

  const handleComplete = (finalAnswers) => {
    setAnswers(finalAnswers);
    setStep('loading');
    setTimeout(() => setStep('results'), 2500);
  };

  return (
    // Updated with dark silk background and ivory text for luxury feel
    <main className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] selection:bg-gold/30 selection:text-gold transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto">
        {step === 'home' && <Hero onStart={() => setStep('quiz')} />}
        {step === 'quiz' && <Quiz onComplete={handleComplete} />}
        {step === 'loading' && <Loading />}
        {step === 'results' && <Results selections={answers} onReset={() => setStep('home')} />}
      </div>
    </main>
  );
}

export default App;