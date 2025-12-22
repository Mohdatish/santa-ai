import { MessageCircle, Sparkles, Gift, ArrowRight, CheckCircle, Zap, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Snowfall from '@/components/Snowfall';

const steps = [
  {
    step: 1,
    icon: MessageCircle,
    title: 'Tell Santa About Them',
    description: 'Answer 5 simple questions about the person you\'re shopping for — their interests, personality, and your budget.',
    details: ['Who is the gift for?', 'What are their hobbies?', 'What\'s your budget?'],
    emoji: '💬',
  },
  {
    step: 2,
    icon: Sparkles,
    title: 'Santa\'s AI Magic',
    description: 'Our advanced AI analyzes thousands of gift options, matching personality traits with perfect presents.',
    details: ['Personality matching', 'Interest analysis', 'Budget optimization'],
    emoji: '✨',
  },
  {
    step: 3,
    icon: Gift,
    title: 'Perfect Gift Revealed',
    description: 'Get personalized recommendations with explanations of why each gift is perfect, plus direct purchase links.',
    details: ['Curated recommendations', 'Why it\'s perfect', 'One-click purchase'],
    emoji: '🎁',
  },
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get recommendations in under 2 minutes',
  },
  {
    icon: Heart,
    title: 'Truly Personal',
    description: 'AI-powered matching for meaningful gifts',
  },
  {
    icon: Shield,
    title: 'No Data Stored',
    description: 'Your answers are never saved or shared',
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Snowfall />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Simple & Magical
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              How the Magic Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Finding the perfect gift has never been easier. Three simple steps to holiday happiness — powered by AI, delivered with love.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div className="flex-1 relative">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
                    <div className="relative bg-card rounded-3xl p-12 shadow-medium border border-border/50">
                      <div className="text-8xl mb-4">{step.emoji}</div>
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-red">
                        {step.step}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Jolly.ai?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We make gift-giving magical, not stressful
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 text-center hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Find the Perfect Gift?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of happy gift-givers who found their perfect presents with Jolly.ai
            </p>
            <Button variant="hero" asChild className="group">
              <Link to="/?start=true">
                Start Now — It's Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Made with ❤️ by Jolly.ai • Spreading holiday joy with AI magic ✨
        </div>
      </footer>
    </div>
  );
};

export default HowItWorksPage;
