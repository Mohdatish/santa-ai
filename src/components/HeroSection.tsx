import { ArrowRight, Star, Gift, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onStartChat: () => void;
  onOpenHow?: () => void;
}

const phrases = ['your mom', 'your dad', 'your spouse', 'your best friend', 'your boss', 'your child'];

const HeroSection = ({ onStartChat, onOpenHow }: HeroSectionProps) => {
  const [text, setText] = useState('');
  const [dir, setDir] = useState<'forward' | 'backward'>('forward');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const current = phrases[idx];
    let timeout: number;
    if (dir === 'forward') {
      if (text.length < current.length) {
        timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
      } else {
        timeout = window.setTimeout(() => setDir('backward'), 1000);
      }
    } else {
      if (text.length > 0) {
        timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), 45);
      } else {
        timeout = window.setTimeout(() => {
          setDir('forward');
          setIdx((p) => (p + 1) % phrases.length);
        }, 300);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, dir, idx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(/assets/toni.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-santa-red/20" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-soft mb-8 hover:shadow-medium transition-shadow">
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by <span className="text-foreground font-semibold">50,000+</span> gift-givers
            </span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
              ))}
            </div>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Find the perfect gift for{' '}
            <span className="text-white">
              {text}
              <span className="type-caret">|</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Answer a few magical questions and our AI will find the{' '}
            <span className="text-white font-semibold">perfect gift</span>{' '}
            for anyone on your list — personalized, thoughtful, and ready to buy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" onClick={onStartChat} className="group text-lg">
              Start Gift Search
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" className="text-lg" onClick={onOpenHow}>
              How It Works
            </Button>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-foreground font-medium">Free Forever</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-foreground font-medium">No Sign-up Required</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-foreground font-medium">AI-Powered</span>
            </div>
          </div>
        </div>
        {/* Floating elements removed; snowfall provides ambience */}
      </div>
    </section>
  );
};

export default HeroSection;
