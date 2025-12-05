import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { Navigation } from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, MapPin, Thermometer, Star, Calendar, Users, Camera } from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">景点未找到</h2>
          <Button onClick={() => navigate('/')}>返回首页</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="relative h-[500px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4">
            <Button
              variant="secondary"
              className="mb-6"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回
            </Button>
            <div className="flex items-start gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground drop-shadow-lg">
                {destination.name}
              </h1>
              <div className="flex items-center gap-1 bg-card/95 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-lg">{destination.rating}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">景点介绍</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {destination.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                这里是中国最具特色的冰雪旅游目的地之一，每年吸引数以万计的游客前来观光体验。
                无论是摄影爱好者、冰雪运动爱好者，还是想要感受冬季魅力的游客，都能在这里找到属于自己的乐趣。
                冬季的景色美不胜收，银装素裹的世界让人流连忘返。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">热门活动</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.activities.map((activity, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Camera className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-semibold">{activity}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">游玩建议</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      最佳游玩时间
                    </h3>
                    <p className="text-muted-foreground">
                      12月至次年2月为最佳观赏期，此时冰雪景观最为壮观，各类冰雪活动也最为丰富。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      建议游玩时长
                    </h3>
                    <p className="text-muted-foreground">
                      建议游玩1-2天，可以充分体验各项冰雪活动，拍摄精美照片，感受冬季魅力。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">基本信息</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Thermometer className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">平均气温</p>
                        <p className="font-medium">{destination.temperature}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">所在地</p>
                        <p className="font-medium">{destination.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-lg">活动标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity) => (
                      <Badge key={activity} variant="secondary">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  立即预订
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  加入行程
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
