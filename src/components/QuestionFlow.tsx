import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import SantaAvatar from './SantaAvatar';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Ho ho ho! Who are we finding a gift for today?",
    options: ["Partner/Spouse", "Parent", "Friend", "Child", "Colleague", "Sibling"],
  },
  {
    id: 2,
    question: "Wonderful! What's their personality like?",
    options: ["Adventurous", "Creative", "Practical", "Tech-savvy", "Homebody", "Fashionable"],
  },
  {
    id: 3,
    question: "What do they enjoy doing in their free time?",
    options: ["Reading", "Sports/Fitness", "Cooking", "Gaming", "Arts & Crafts", "Traveling"],
  },
  {
    id: 4,
    question: "What's your budget for this magical gift?",
    options: ["Under $25", "$25 - $50", "$50 - $100", "$100 - $200", "$200+", "Sky's the limit!"],
  },
  {
    id: 5,
    question: "Any special occasion we're celebrating?",
    options: ["Christmas 🎄", "Birthday 🎂", "Anniversary 💕", "Just Because 💝", "Thank You 🙏", "Graduation 🎓"],
  },
];

interface QuestionFlowProps {
  onComplete: (answers: Record<number, string>) => void;
  onBack: () => void;
}

const QuestionFlow = ({ onComplete, onBack }: QuestionFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    setIsTransitioning(true);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        onComplete({ ...answers, [currentQuestion.id]: answer });
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      onBack();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-hero relative">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🎄</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-float delay-200">🎁</div>
      
      <div className="w-full max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {questions.length}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-santa-red-dark rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Chat card */}
        <div className="bg-card rounded-3xl shadow-medium border border-border/50 overflow-hidden">
          {/* Santa message */}
          <div className="p-6 md:p-8">
            <div className="flex gap-4">
              <SantaAvatar size="lg" />
              <div
                className={cn(
                  "flex-1 transition-all duration-300",
                  isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                )}
              >
                <div className="bg-muted rounded-2xl rounded-tl-md p-5">
                  <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
                    {currentQuestion.question}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Answer options */}
          <div className="px-6 md:px-8 pb-8">
            <div
              className={cn(
                "grid grid-cols-2 gap-3 transition-all duration-300",
                isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              )}
            >
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={option}
                  variant={answers[currentQuestion.id] === option ? "chip-active" : "chip"}
                  className="h-auto py-4 px-6 text-base justify-start"
                  onClick={() => handleAnswer(option)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Reassurance message */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          🔒 Your answers help Santa find the perfect gift. No data is stored.
        </p>
      </div>
    </section>
  );
};

export default QuestionFlow;
