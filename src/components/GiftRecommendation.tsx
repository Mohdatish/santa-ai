import { useState, useEffect } from 'react';
import { Heart, Share2, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import SantaAvatar from './SantaAvatar';

interface GiftRecommendationProps {
  answers: Record<number, string>;
  onProceed: () => void;
  onStartOver: () => void;
}

const gifts = [
  {
    id: 1,
    name: "Premium Wireless Noise-Canceling Headphones",
    price: "$149 - $199",
    image: "🎧",
    reason: "Perfect for the tech-savvy person who loves their music and needs focus time.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Artisan Coffee Subscription Box",
    price: "$45 - $75",
    image: "☕",
    reason: "A monthly journey through the world's finest coffee beans.",
    category: "Food & Drink",
  },
  {
    id: 3,
    name: "Luxury Spa Gift Set",
    price: "$65 - $95",
    image: "🧴",
    reason: "Because everyone deserves a little pampering and self-care.",
    category: "Wellness",
  },
];

const GiftRecommendation = ({ answers, onProceed, onStartOver }: GiftRecommendationProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGift, setSelectedGift] = useState(gifts[0]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Simulate AI thinking
    const timer = setTimeout(() => {
      // Select a random gift for demo
      const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
      setSelectedGift(randomGift);
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [answers]);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-hero">
        <div className="text-center">
          <SantaAvatar size="xl" animate className="mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Santa is thinking...
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Searching through millions of gifts to find the perfect one
          </p>
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-primary animate-bounce"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Celebration decorations */}
      <div className="absolute top-10 left-10 text-4xl animate-float">✨</div>
      <div className="absolute top-20 right-20 text-4xl animate-float delay-200">🎄</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float delay-300">🎁</div>
      
      <div className="w-full max-w-3xl">
        {/* Success header */}
        <div className="text-center mb-8 animate-fade-in-up opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Perfect Match Found!</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Santa's Top Pick for You
          </h2>
        </div>

        {/* Gift card */}
        <div className="relative animate-scale-in opacity-0 delay-200">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-primary/20 to-accent/30 rounded-[2rem] blur-xl" />
          
          <div className="relative bg-card rounded-3xl shadow-medium border-2 border-accent/30 overflow-hidden">
            {/* Gift header */}
            <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 md:p-8 border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-card flex items-center justify-center text-6xl md:text-7xl shadow-soft">
                  {selectedGift.image}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {selectedGift.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1 mb-2">
                    {selectedGift.name}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                    {selectedGift.price}
                  </div>
                </div>
              </div>
            </div>

            {/* Why Santa chose this */}
            <div className="p-6 md:p-8">
              <div className="flex gap-4 mb-6">
                <SantaAvatar size="md" />
                <div className="flex-1 bg-muted rounded-2xl rounded-tl-md p-4">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Why Santa chose this:
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {selectedGift.reason}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="gold" className="flex-1 group" onClick={onProceed}>
                  <ShoppingBag className="w-5 h-5" />
                  Proceed to Santa's Workshop
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant={isSaved ? "chip-active" : "chip"}
                  className="sm:w-auto"
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <Heart className={isSaved ? "fill-current" : ""} />
                  {isSaved ? "Saved!" : "Save for later"}
                </Button>
                <Button variant="chip" className="sm:w-auto">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Start over */}
        <div className="text-center mt-8 animate-fade-in-up opacity-0 delay-400">
          <button
            onClick={onStartOver}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Not quite right? Try again with different answers
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftRecommendation;
