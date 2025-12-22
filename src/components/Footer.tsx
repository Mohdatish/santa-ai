import { Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-xl font-bold">
                  Jolly<span className="text-primary">.ai</span>
                </span>
              </div>
            </div>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Making gift-giving magical again. Our AI-powered platform helps you find the perfect gift for anyone in just 2 minutes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link to="/how-it-works" className="hover:text-background transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/?start=true" className="hover:text-background transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hello@jolly.ai" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2024 Jolly.ai — Made with ❤️ for gift-givers everywhere
          </p>
          <p className="text-sm text-background/50">
            Spreading holiday joy with AI magic ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
