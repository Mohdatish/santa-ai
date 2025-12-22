import { Gift, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-red flex items-center justify-center shadow-red group-hover:scale-105 transition-transform">
            <Gift className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-foreground leading-tight">
              Jolly<span className="text-primary">.ai</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
              by Santa's Workshop
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/how-it-works" 
            className={`text-sm font-medium transition-colors ${isActive('/how-it-works') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            How it Works
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            About
          </Link>
          <Button variant="default" size="sm" asChild>
            <Link to="/?start=true">Talk to Santa</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium py-2 ${isActive('/how-it-works') ? 'text-primary' : 'text-foreground'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium py-2 ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="default" size="sm" asChild className="w-full">
              <Link to="/?start=true" onClick={() => setMobileMenuOpen(false)}>Talk to Santa</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
