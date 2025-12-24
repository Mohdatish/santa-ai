import { Gift, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  const isTransparent =
    location.pathname === "/how-it-works" ||
    new URLSearchParams(location.search).get("start") === "true";
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isTransparent ? "bg-transparent" : "bg-black/25"} backdrop-blur-[2px] border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.15)]`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-red flex items-center justify-center shadow-red group-hover:scale-105 transition-transform ring-1 ring-white/30">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-white leading-tight drop-shadow">
              AskSanta<span className="text-primary">.ai</span>
            </span>
            <span className="text-[10px] text-white/80 font-medium tracking-wider uppercase">
              AI-Powered Gift Guide
            </span>
          </div>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-white">
            <Link to="/how-it-works">How It Works</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/?start=true">Talk to Santa</Link>
          </Button>
        </nav>
        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen((p) => !p)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-[2px] border-t border-white/10">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            <Button variant="ghost" size="lg" asChild className="text-white justify-start">
              <Link to="/how-it-works">How It Works</Link>
            </Button>
            <Button variant="default" size="lg" asChild className="justify-start">
              <Link to="/?start=true">Talk to Santa</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
