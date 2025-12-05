import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Snowflake } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Snowflake className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">冰雪之旅</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#destinations" className="text-foreground hover:text-primary transition-colors">
              热门景点
            </a>
            <a href="#guides" className="text-foreground hover:text-primary transition-colors">
              旅行路书
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              关于我们
            </a>
            <Button>开始探索</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#destinations" className="block text-foreground hover:text-primary transition-colors">
              热门景点
            </a>
            <a href="#guides" className="block text-foreground hover:text-primary transition-colors">
              旅行路书
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              关于我们
            </a>
            <Button className="w-full">开始探索</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
