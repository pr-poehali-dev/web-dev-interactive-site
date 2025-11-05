import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'WordPress', icon: 'Blocks', level: 95, color: 'bg-primary' },
    { name: 'Joomla', icon: 'Layout', level: 88, color: 'bg-secondary' },
    { name: 'Drupal', icon: 'Database', level: 82, color: 'bg-accent' },
    { name: '1C-Bitrix', icon: 'Box', level: 90, color: 'bg-primary' },
    { name: 'OpenCart', icon: 'ShoppingCart', level: 85, color: 'bg-secondary' },
    { name: 'PrestaShop', icon: 'Store', level: 80, color: 'bg-accent' }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      tech: 'WordPress + WooCommerce',
      description: 'Интернет-магазин с интеграцией платежных систем',
      icon: 'ShoppingBag'
    },
    {
      title: 'Corporate Website',
      tech: 'Joomla + Custom Extensions',
      description: 'Корпоративный сайт с модульной архитектурой',
      icon: 'Building2'
    },
    {
      title: 'News Portal',
      tech: 'Drupal + Multi-site',
      description: 'Новостной портал с мультиязычностью',
      icon: 'Newspaper'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />

      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Создаю современные решения на популярных CMS
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Мои проекты</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                Связаться
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-20">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 cursor-pointer transition-all duration-300 hover:scale-110 animate-float border-2 border-border hover:border-primary"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`p-4 rounded-full ${activeSkill === index ? 'animate-glow' : ''}`}>
                    <Icon 
                      name={skill.icon} 
                      size={32} 
                      className={activeSkill === index ? 'text-primary' : 'text-muted-foreground'}
                    />
                  </div>
                  <span className="font-semibold text-sm">{skill.name}</span>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} transition-all duration-1000`}
                      style={{ width: activeSkill === index ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">
            Избранные проекты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-8 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up border-2 border-border hover:border-secondary"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-6 rounded-full bg-card-foreground/5 group-hover:bg-secondary/20 transition-colors">
                    <Icon 
                      name={project.icon} 
                      size={48} 
                      className="text-secondary group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent mb-4 font-semibold">{project.tech}</p>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                  <span className="text-sm font-semibold">Подробнее</span>
                  <Icon name="ArrowRight" size={20} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-10 animate-scale-in border-2 border-border">
            <h2 className="text-4xl font-bold text-center mb-8">
              Обсудим проект?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Свяжитесь со мной, и мы создадим что-то удивительное
            </p>
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Расскажите о проекте" 
                  className="min-h-32 border-2 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button 
                size="lg" 
                className="w-full group relative overflow-hidden h-12"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Отправить
                  <Icon name="Send" size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Icon name="Github" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-secondary hover:scale-110 transition-all">
              <Icon name="Linkedin" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all">
              <Icon name="Mail" size={24} />
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Web Developer Portfolio. Создано с ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
