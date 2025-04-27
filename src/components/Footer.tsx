import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=50&auto=format&fit=crop" 
                alt="Логотип" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                МайнКрафт Сервер
              </span>
            </div>
            <p className="text-muted-foreground">
              Лучший игровой сервер Minecraft с уникальными модами, активным сообществом и регулярными обновлениями.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О сервере</Link></li>
              <li><Link to="/rules" className="text-muted-foreground hover:text-primary transition-colors">Правила</Link></li>
              <li><Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">Донат</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Сообщество</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">ВКонтакте</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">support@mineserver.ru</li>
              <li className="text-muted-foreground">IP: play.mineserver.ru</li>
              <li className="text-muted-foreground">Версия: 1.19.2</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 МайнКрафт Сервер. Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
