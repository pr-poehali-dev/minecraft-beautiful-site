import { Progress } from '@/components/ui/progress';

const ServerStats = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Статистика сервера</h2>
            <p className="text-lg text-muted-foreground">
              Присоединяйтесь к нашему активному сообществу и станьте частью растущей истории
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Игроки онлайн</span>
                <span className="text-primary font-semibold">1527 / 2000</span>
              </div>
              <Progress value={76} className="h-2 bg-muted" />
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Использование процессора</span>
                <span className="text-secondary font-semibold">42%</span>
              </div>
              <Progress value={42} className="h-2 bg-muted" />
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Использование памяти</span>
                <span className="text-accent font-semibold">64%</span>
              </div>
              <Progress value={64} className="h-2 bg-muted" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-card p-4 rounded-xl shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary">256</p>
              <p className="text-sm text-muted-foreground">Дней онлайн</p>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-bold text-secondary">24</p>
              <p className="text-sm text-muted-foreground">Сервера</p>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-sm text-center sm:col-span-1 col-span-2">
              <p className="text-2xl sm:text-3xl font-bold text-accent">98%</p>
              <p className="text-sm text-muted-foreground">Положительных отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStats;
