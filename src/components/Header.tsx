import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=50&auto=format&fit=crop" 
            alt="Логотип" 
            className="w-8 h-8"
          />
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            МайнКрафт Сервер
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/90 hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/about" className="text-foreground/90 hover:text-primary transition-colors">
            О сервере
          </Link>
          <Link to="/rules" className="text-foreground/90 hover:text-primary transition-colors">
            Правила
          </Link>
          <Link to="/donate" className="text-foreground/90 hover:text-primary transition-colors">
            Донат
          </Link>
          <Button className="minecraft-btn">
            Начать играть
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 space-y-4">
          <Link 
            to="/" 
            className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </Link>
          <Link 
            to="/about" 
            className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            О сервере
          </Link>
          <Link 
            to="/rules" 
            className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Правила
          </Link>
          <Link 
            to="/donate" 
            className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Донат
          </Link>
          <Button className="w-full minecraft-btn">
            Начать играть
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
