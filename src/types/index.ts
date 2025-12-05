export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  temperature: string;
  activities: string[];
  rating: number;
}

export interface TravelGuide {
  id: string;
  title: string;
  destination: string;
  duration: string;
  difficulty: string;
  image: string;
  highlights: string[];
  description: string;
}
