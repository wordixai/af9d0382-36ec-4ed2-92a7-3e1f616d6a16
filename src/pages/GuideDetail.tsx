import { useParams, useNavigate } from 'react-router-dom';
import { travelGuides } from '../data/destinations';
import { Navigation } from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Clock, MapIcon, TrendingUp, CheckCircle2, Info } from 'lucide-react';

const GuideDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = travelGuides.find(g => g.id === id);

  if (!guide) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">路书未找到</h2>
          <Button onClick={() => navigate('/')}>返回首页</Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      '轻松': 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
      '中等': 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
      '挑战': 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
    };
    return colors[difficulty as keyof typeof colors] || colors['中等'];
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="relative h-[500px] overflow-hidden">
        <img
          src={guide.image}
          alt={guide.title}
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground drop-shadow-lg mb-4">
              {guide.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-lg text-muted-foreground">
                <MapIcon className="w-5 h-5" />
                <span>{guide.destination}</span>
              </div>
              <div className="flex items-center gap-2 text-lg text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>{guide.duration}</span>
              </div>
              <Badge className={getDifficultyColor(guide.difficulty) + ' text-base'}>
                {guide.difficulty}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">路书简介</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {guide.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                本路书经过精心设计，综合考虑了景点游览、交通便利、美食体验等多个方面，
                让您的旅程更加轻松愉快。无论是初次前往还是再次探访，都能获得完美的旅行体验。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                详细行程
              </h2>
              <div className="space-y-4">
                {guide.highlights.map((highlight, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg leading-relaxed">{highlight}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">出行准备</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      必备物品
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 保暖衣物（羽绒服、手套、帽子）</li>
                      <li>• 防滑雪地靴</li>
                      <li>• 相机/手机及充电宝</li>
                      <li>• 防晒霜、润唇膏</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      注意事项
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 注意防寒保暖，预防冻伤</li>
                      <li>• 雪地路滑，注意安全</li>
                      <li>• 相机电池易耗电，多备几块</li>
                      <li>• 提前预订住宿和门票</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">行程概览</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapIcon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">目的地</p>
                        <p className="font-medium">{guide.destination}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">行程时长</p>
                        <p className="font-medium">{guide.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-secondary-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">难度等级</p>
                        <p className="font-medium">{guide.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-lg">预估费用</h3>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary mb-1">¥2,500 - ¥4,000</p>
                    <p className="text-sm text-muted-foreground">人均费用（含交通、住宿、门票）</p>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  下载完整路书
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  定制行程
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
