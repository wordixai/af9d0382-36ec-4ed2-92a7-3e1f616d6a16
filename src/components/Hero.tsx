import { Button } from './ui/button';
import { Snowflake } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Snowflake className="w-16 h-16 text-accent animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
          探索冰雪世界
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 drop-shadow">
          发现中国最美冰雪景观，开启难忘的冬季之旅
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            探索景点
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            onClick={() => document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' })}
          >
            查看路书
          </Button>
        </div>
      </div>
    </div>
  );
};
