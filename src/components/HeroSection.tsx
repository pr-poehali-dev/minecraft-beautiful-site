import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32 minecraft-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-primary">Захватывающий мир</span>
              <span className="block">Майнкрафт приключений</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              Присоединяйтесь к нашему дружному комьюнити и исследуйте уникальный мир с ежедневными событиями и захватывающим геймплеем
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="minecraft-btn">
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary">
                О сервере
              </Button>
            </div>
            <div className="pt-4 flex gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">1500+</p>
                <p className="text-sm text-muted-foreground">Игроков онлайн</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">99.9%</p>
                <p className="text-sm text-muted-foreground">Аптайм сервера</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Поддержка</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=800&auto=format&fit=crop" 
                alt="Minecraft Server" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
