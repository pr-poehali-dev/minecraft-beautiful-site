import { 
  Sword, 
  Crown, 
  Castle, 
  Users, 
  Shield, 
  Gift
} from 'lucide-react';

const features = [
  {
    icon: <Sword className="h-10 w-10 text-primary" />,
    title: 'PvP Арены',
    description: 'Сражайтесь с другими игроками на специальных аренах с уникальными правилами и наградами'
  },
  {
    icon: <Castle className="h-10 w-10 text-primary" />,
    title: 'Кланы и Гильдии',
    description: 'Создавайте или присоединяйтесь к кланам для совместного строительства, защиты территорий и выполнения заданий'
  },
  {
    icon: <Crown className="h-10 w-10 text-primary" />,
    title: 'Ежедневные Ивенты',
    description: 'Участвуйте в регулярных событиях для получения редких предметов, ресурсов и бонусов'
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Дружелюбное Сообщество',
    description: 'Станьте частью нашего активного и дружелюбного сообщества игроков со всего мира'
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Анти-чит Система',
    description: 'Наш сервер защищен от читеров - мы гарантируем честную игру для всех участников'
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: 'Бонусы для Новичков',
    description: 'Новые игроки получают стартовый набор и бонусы, чтобы быстрее освоиться в игровом мире'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Особенности нашего сервера</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы постоянно работаем над улучшением игрового опыта и предлагаем множество уникальных возможностей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
