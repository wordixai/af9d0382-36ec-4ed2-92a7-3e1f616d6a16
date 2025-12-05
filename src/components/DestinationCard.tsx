import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Thermometer, Star } from 'lucide-react';
import { Destination } from '../types';
import { useNavigate } from 'react-router-dom';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{destination.rating}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{destination.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {destination.location}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{destination.description}</p>

        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="w-4 h-4 text-accent" />
          <span className="font-medium">{destination.temperature}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {destination.activities.slice(0, 3).map((activity) => (
            <Badge key={activity} variant="secondary">
              {activity}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" onClick={() => navigate(`/destination/${destination.id}`)}>
          查看详情
        </Button>
      </CardFooter>
    </Card>
  );
};
