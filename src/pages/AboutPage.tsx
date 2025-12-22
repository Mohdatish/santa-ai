import { Gift, Heart, Sparkles, Users, Target, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Snowfall from '@/components/Snowfall';

const stats = [
  { number: '50K+', label: 'Happy Gift-Givers' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '2min', label: 'Average Time' },
  { number: '∞', label: 'Gift Ideas' },
];

const values = [
  {
    icon: Heart,
    title: 'Gift-Giving Should Be Joyful',
    description: 'We believe finding the perfect gift should feel magical, not stressful. That\'s why we built Jolly.ai — to bring back the joy of giving.',
  },
  {
    icon: Target,
    title: 'Precision Meets Personalization',
    description: 'Our AI doesn\'t just suggest popular items. It understands personality, preferences, and relationships to find truly meaningful gifts.',
  },
  {
    icon: Users,
    title: 'Built for Everyone',
    description: 'Whether you\'re shopping for your partner, parent, friend, or colleague — Jolly.ai helps you find the perfect present every time.',
  },
];

const testimonials = [
  {
    quote: "Found the perfect gift for my mom in 2 minutes. She literally cried happy tears on Christmas!",
    author: "Sarah M.",
    role: "Happy Daughter",
  },
  {
    quote: "As someone who's terrible at gift-giving, this is a game changer. My wife was genuinely surprised.",
    author: "James K.",
    role: "Relieved Husband",
  },
  {
    quote: "Used it for my entire family's gifts this year. Everyone loved their presents. 10/10.",
    author: "Emily R.",
    role: "Organized Gifter",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Snowfall />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Making Gift-Giving{' '}
              <span className="text-primary">Magical</span> Again
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're on a mission to eliminate gift-giving anxiety and bring back the pure joy of finding the perfect present for someone you love.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Born from a Christmas Crisis
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    It was December 23rd, and our founder was standing in a crowded mall, completely stuck. 
                    "What do you get for someone who has everything?" That question haunted them.
                  </p>
                  <p>
                    After hours of aimless wandering and a mediocre gift purchase, they thought: 
                    <span className="text-foreground font-medium"> "There has to be a better way."</span>
                  </p>
                  <p>
                    That's when Jolly.ai was born — an AI-powered gift recommendation engine that understands 
                    people, not just products. We ask the right questions to find gifts that truly resonate.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
                <div className="relative bg-card rounded-3xl p-8 shadow-medium border border-border/50 text-center">
                  <div className="text-8xl mb-4">🎅</div>
                  <p className="font-display text-xl text-foreground italic">
                    "Everyone deserves to feel the magic of receiving a truly thoughtful gift."
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">— The Jolly.ai Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Believe
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our values guide everything we do at Jolly.ai
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 h-full hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Gift-Givers
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real stories from real people who found their perfect gifts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🎁</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Find the Perfect Gift?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of happy gift-givers. It only takes 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild className="group">
                <Link to="/?start=true">
                  Talk to Santa
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/how-it-works">
                  See How it Works
                </Link>
              </Button>
            </div>
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

export default AboutPage;
