import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Snowfall from '@/components/Snowfall';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import QuestionFlow from '@/components/QuestionFlow';
import GiftRecommendation from '@/components/GiftRecommendation';
import SantaWorkshop from '@/components/SantaWorkshop';

type AppState = 'landing' | 'questions' | 'recommendation' | 'workshop';

const Index = () => {
  const [searchParams] = useSearchParams();
  const [appState, setAppState] = useState<AppState>('landing');
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (searchParams.get('start') === 'true') {
      setAppState('questions');
    }
  }, [searchParams]);

  const handleStartChat = () => {
    setAppState('questions');
  };

  const handleQuestionComplete = (userAnswers: Record<number, string>) => {
    setAnswers(userAnswers);
    setAppState('recommendation');
  };

  const handleProceedToWorkshop = () => {
    setAppState('workshop');
  };

  const handleStartOver = () => {
    setAnswers({});
    setAppState('landing');
  };

  const handleBackFromQuestions = () => {
    setAppState('landing');
  };

  const handleBackFromWorkshop = () => {
    setAppState('recommendation');
  };

  return (
    <div className="min-h-screen bg-background">
      <Snowfall />
      <Header />
      
      {appState === 'landing' && (
        <>
          <HeroSection onStartChat={handleStartChat} />
          <HowItWorks />
          <TestimonialsSection />
          <Footer />
        </>
      )}

      {appState === 'questions' && (
        <QuestionFlow
          onComplete={handleQuestionComplete}
          onBack={handleBackFromQuestions}
        />
      )}

      {appState === 'recommendation' && (
        <GiftRecommendation
          answers={answers}
          onProceed={handleProceedToWorkshop}
          onStartOver={handleStartOver}
        />
      )}

      {appState === 'workshop' && (
        <SantaWorkshop
          onBack={handleBackFromWorkshop}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
};

export default Index;
