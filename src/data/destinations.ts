import { Destination, TravelGuide } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: '哈尔滨冰雪大世界',
    location: '黑龙江省哈尔滨市',
    image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800&q=80',
    description: '世界最大的冰雪主题乐园，汇聚精美冰雕和雪雕艺术',
    temperature: '-15°C ~ -25°C',
    activities: ['冰雕观赏', '冰滑梯', '冰雪表演', '夜景游览'],
    rating: 4.9,
  },
  {
    id: '2',
    name: '长白山滑雪场',
    location: '吉林省长白山',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    description: '国际级滑雪胜地，拥有优质粉雪和完善设施',
    temperature: '-10°C ~ -20°C',
    activities: ['滑雪', '温泉', '雪地徒步', '观赏雾凇'],
    rating: 4.8,
  },
  {
    id: '3',
    name: '松花江雾凇岛',
    location: '吉林省吉林市',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
    description: '中国四大自然奇观之一，晶莹剔透的雾凇景观',
    temperature: '-18°C ~ -28°C',
    activities: ['雾凇观赏', '摄影', '雪地体验', '民俗体验'],
    rating: 4.7,
  },
  {
    id: '4',
    name: '崇礼太舞滑雪场',
    location: '河北省张家口市',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
    description: '冬奥会赛事场地，专业滑雪与度假一体',
    temperature: '-8°C ~ -15°C',
    activities: ['滑雪', '单板', '雪地公园', '度假酒店'],
    rating: 4.8,
  },
  {
    id: '5',
    name: '呼伦贝尔冰雪那达慕',
    location: '内蒙古呼伦贝尔',
    image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&q=80',
    description: '体验蒙古族冰雪文化，感受草原冬季魅力',
    temperature: '-20°C ~ -35°C',
    activities: ['民俗体验', '冰雪运动', '摄影', '特色美食'],
    rating: 4.6,
  },
  {
    id: '6',
    name: '新疆天山天池',
    location: '新疆乌鲁木齐',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
    description: '冬季的天山天池银装素裹，如梦如幻',
    temperature: '-12°C ~ -22°C',
    activities: ['滑雪', '冰上运动', '雪山观光', '温泉'],
    rating: 4.7,
  },
];

export const travelGuides: TravelGuide[] = [
  {
    id: 'g1',
    title: '哈尔滨冰雪三日游',
    destination: '哈尔滨',
    duration: '3天2晚',
    difficulty: '轻松',
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&q=80',
    highlights: [
      'Day1: 中央大街 → 圣索菲亚教堂 → 冰雪大世界夜场',
      'Day2: 太阳岛雪博会 → 东北虎林园 → 老道外美食',
      'Day3: 伏尔加庄园 → 冰雪欢乐谷'
    ],
    description: '体验最地道的东北冰雪文化和俄式风情',
  },
  {
    id: 'g2',
    title: '长白山滑雪温泉五日游',
    destination: '长白山',
    duration: '5天4晚',
    difficulty: '中等',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
    highlights: [
      'Day1-2: 万达滑雪场专业滑雪培训',
      'Day3: 长白山天池观光',
      'Day4: 雾凇观赏 → 温泉养生',
      'Day5: 魔界风景区摄影'
    ],
    description: '滑雪、温泉、自然风光完美结合',
  },
  {
    id: 'g3',
    title: '雾凇岛摄影两日游',
    destination: '吉林雾凇岛',
    duration: '2天1晚',
    difficulty: '轻松',
    image: 'https://images.unsplash.com/photo-1457269449834-928af64c684d?w=800&q=80',
    highlights: [
      'Day1: 吉林市区 → 雾凇岛日落',
      'Day2: 清晨雾凇拍摄 → 韩屯村体验'
    ],
    description: '捕捉最美雾凇景观的摄影天堂',
  },
  {
    id: 'g4',
    title: '崇礼冬奥滑雪周末游',
    destination: '崇礼',
    duration: '2天1晚',
    difficulty: '中等',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    highlights: [
      'Day1: 太舞滑雪场全天滑雪',
      'Day2: 云顶滑雪场 → 特色小镇'
    ],
    description: '距离北京最近的专业滑雪胜地',
  },
];
