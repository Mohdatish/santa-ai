import { ArrowRight, Sparkles, Star, Users, Gift, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onStartChat: () => void;
}

const HeroSection = ({ onStartChat }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-soft mb-8 hover:shadow-medium transition-shadow">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs">🎅</div>
              <div className="w-6 h-6 rounded-full bg-secondary/20 border-2 border-card flex items-center justify-center text-xs">🎁</div>
              <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center text-xs">✨</div>
            </div>
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
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            Find the{' '}
            <span className="relative">
              <span className="text-primary">Perfect Gift</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            in 2 Minutes{' '}
            <span className="inline-block animate-wave">🎅</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Answer a few magical questions and our AI will find the{' '}
            <span className="text-foreground font-semibold">perfect gift</span>{' '}
            for anyone on your list — personalized, thoughtful, and ready to buy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" onClick={onStartChat} className="group text-lg">
              Talk to Santa — It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" asChild className="text-lg">
              <a href="#how-it-works">See How it Works</a>
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

        {/* Floating elements */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-9xl animate-float opacity-10">
          🎁
        </div>
        <div className="absolute top-1/4 left-[5%] text-5xl animate-float opacity-20 hidden lg:block" style={{ animationDelay: '0.5s' }}>
          ✨
        </div>
        <div className="absolute top-1/3 right-[8%] text-4xl animate-float opacity-20 hidden lg:block" style={{ animationDelay: '1s' }}>
          🎄
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
