import { Gift, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  const isTransparent =
    location.pathname === "/how-it-works" ||
    new URLSearchParams(location.search).get("start") === "true";

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
        <nav className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-white">
            <Link to="/how-it-works">How It Works</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/?start=true">Talk to Santa</Link>
          </Button>
        </nav>
      </div>

    </header>
  );
};

export default Header;
