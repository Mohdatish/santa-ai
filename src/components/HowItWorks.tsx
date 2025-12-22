import { MessageCircle, Sparkles, Gift, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: MessageCircle,
    title: 'Answer Simple Questions',
    description: 'Tell Santa about who you\'re shopping for — their interests, personality, and your budget.',
    emoji: '💬',
    color: 'from-primary/10 to-primary/5',
  },
  {
    icon: Sparkles,
    title: 'Santa\'s AI Thinks',
    description: 'Our AI analyzes thousands of gift options to find the perfect match for your recipient.',
    emoji: '✨',
    color: 'from-secondary/10 to-secondary/5',
  },
  {
    icon: Gift,
    title: 'Perfect Gift Revealed',
    description: 'Get personalized gift recommendations with direct links to purchase them instantly.',
    emoji: '🎁',
    color: 'from-accent/10 to-accent/5',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Simple 3-Step Process
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How the Magic Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding the perfect gift has never been easier. Three simple steps to holiday happiness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2 border border-border/50 h-full">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-red">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{step.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" asChild className="group">
            <Link to="/how-it-works">
              Learn More About How It Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
