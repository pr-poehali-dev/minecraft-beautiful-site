
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-primary/10 border-t border-border/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
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
            <p className="text-sm text-muted-foreground">
              Лучший сервер для игры с друзьями и новых знакомств. Присоединяйтесь к нашему сообществу!
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О сервере
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-muted-foreground hover:text-primary transition-colors">
                  Правила
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Донат
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Полезные ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Поддержка
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email: info@minecraft-server.ru
              </li>
              <li className="text-muted-foreground">
                Discord: discord.gg/minecraftserver
              </li>
              <li className="text-muted-foreground">
                VK: vk.com/minecraftserver
              </li>
              <li className="text-muted-foreground">
                Telegram: t.me/minecraftserver
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} МайнКрафт Сервер. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
