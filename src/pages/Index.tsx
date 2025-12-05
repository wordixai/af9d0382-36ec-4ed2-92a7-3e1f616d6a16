import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { DestinationCard } from '../components/DestinationCard';
import { GuideCard } from '../components/GuideCard';
import { destinations, travelGuides } from '../data/destinations';
import { Snowflake, Mountain, Map } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Snowflake className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">精选景点</h3>
              <p className="text-muted-foreground">
                精心挑选中国最美的冰雪景观目的地
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Map className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold">专业路书</h3>
              <p className="text-muted-foreground">
                详细的旅行规划和实用攻略指导
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-4 bg-secondary/30 rounded-full">
                  <Mountain className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">极致体验</h3>
              <p className="text-muted-foreground">
                滑雪、温泉、摄影全方位冰雪体验
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">热门冰雪景点</h2>
            <p className="text-xl text-muted-foreground">
              探索最受欢迎的冰雪旅游目的地
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guides Section */}
      <section id="guides" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">精选旅行路书</h2>
            <p className="text-xl text-muted-foreground">
              跟随我们的专业路书，轻松规划完美行程
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {travelGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">冰雪之旅</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 冰雪之旅. 探索中国最美冰雪世界
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                联系我们
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                帮助中心
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
