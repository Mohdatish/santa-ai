import { ExternalLink, ArrowLeft, Sparkles, ShieldCheck, CreditCard, Truck, Package, Mail } from 'lucide-react';
import { Button } from './ui/button';
import SantaAvatar from './SantaAvatar';

interface SantaWorkshopProps {
  onBack: () => void;
  onStartOver: () => void;
}

const SantaWorkshop = ({ onBack, onStartOver }: SantaWorkshopProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Celebration particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.15,
            }}
          >
            {['✨', '🎄', '❄️', '⭐', '🎁'][i % 5]}
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to gift
        </button>

        {/* Workshop card */}
        <div className="bg-card rounded-3xl shadow-medium border border-border/50 overflow-hidden animate-scale-in">
          {/* Header with Santa */}
          <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-8 md:p-12 text-center">
            <SantaAvatar size="xl" className="mx-auto mb-6" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Santa's Workshop
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ho ho ho! 🎅
            </h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Your perfect gift awaits! Click below to visit our partner store.
            </p>
          </div>

          {/* Action area */}
          <div className="p-8 md:p-12 bg-gradient-card border-t border-border/50">
            <div className="space-y-4">
              <Button
                variant="hero"
                className="w-full group animate-pulse-gold"
                onClick={() => window.open('https://amazon.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5" />
                Visit Amazon
                <span className="text-sm opacity-80">(opens in new tab)</span>
              </Button>

              <Button
                variant="chip"
                className="w-full"
                onClick={() => window.open('https://shopify.com', '_blank')}
              >
                Or browse more options on Shopify
              </Button>
            </div>

            {/* Reassurance */}
            <div className="mt-8 p-4 rounded-2xl bg-muted/50 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4" />
                <span>You'll be redirected to a trusted partner store to complete your purchase securely.</span>
              </div>
            </div>

            {/* Delivery steps */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-card rounded-2xl border border-border/50 p-4">
                <CreditCard className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Secure Checkout</p>
                  <p className="text-sm text-muted-foreground">Pay safely on the partner site with your preferred method.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card rounded-2xl border border-border/50 p-4">
                <Truck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Fast Shipping</p>
                  <p className="text-sm text-muted-foreground">Choose delivery speed; orders ship directly to you or them.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card rounded-2xl border border-border/50 p-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Tracking Updates</p>
                  <p className="text-sm text-muted-foreground">Receive tracking emails and delivery notifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card rounded-2xl border border-border/50 p-4">
                <Package className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Hassle-Free Returns</p>
                  <p className="text-sm text-muted-foreground">Easy returns and support handled by the partner store.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start over */}
        <div className="text-center mt-8">
          <button
            onClick={onStartOver}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Find another gift
          </button>
        </div>

        {/* Footer message */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          Made with ❤️ by Ask Santa AI • Spreading holiday joy with AI magic ✨
        </p>
      </div>
    </section>
  );
};

export default SantaWorkshop;
