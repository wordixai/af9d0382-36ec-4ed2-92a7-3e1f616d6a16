import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, TrendingUp, MapIcon } from 'lucide-react';
import { TravelGuide } from '../types';

interface GuideCardProps {
  guide: TravelGuide;
}

export const GuideCard = ({ guide }: GuideCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      '轻松': 'bg-green-500/10 text-green-700 dark:text-green-400',
      '中等': 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
      '挑战': 'bg-red-500/10 text-red-700 dark:text-red-400',
    };
    return colors[difficulty as keyof typeof colors] || colors['中等'];
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold drop-shadow-lg">{guide.title}</h3>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardDescription className="flex items-center gap-1">
            <MapIcon className="w-4 h-4" />
            {guide.destination}
          </CardDescription>
          <Badge className={getDifficultyColor(guide.difficulty)}>
            {guide.difficulty}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {guide.duration}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{guide.description}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>行程亮点</span>
          </div>
          <ul className="space-y-1.5">
            {guide.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary font-medium shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant="outline">
          查看完整路书
        </Button>
      </CardFooter>
    </Card>
  );
};
