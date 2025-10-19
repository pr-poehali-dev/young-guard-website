import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const comrades = [
    {
      name: "Олег Кошевой",
      role: "Командир подпольной группы",
      age: "16 лет",
      bio: "Комсомолец, один из основателей подпольной организации. Отличался смелостью и организаторскими способностями. Руководил боевыми операциями группы.",
      image: "https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/36d38f78-982a-422d-9ac8-04620378cb87.jpg"
    },
    {
      name: "Любовь Шевцова",
      role: "Связная",
      age: "19 лет",
      bio: "Храбрая девушка, работавшая связной между группами сопротивления. Участвовала в распространении листовок и диверсионных операциях. Погибла, не выдав товарищей.",
      image: "https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/07b3d72a-4e66-441b-b185-3dbff68178bd.jpg"
    },
    {
      name: "Сергей Тюленин",
      role: "Боец диверсионной группы",
      age: "17 лет",
      bio: "Смелый и решительный парень. Участвовал во всех крупных операциях: поджоги складов, освобождение военнопленных. Был известен своей находчивостью.",
      image: "https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/16386329-9583-40b5-bfd6-6a8d56661c48.jpg"
    }
  ];

  const diaryEntries = [
    {
      date: "15 июля 1942 года",
      title: "Первый день в подполье",
      content: "Сегодня мы собрались впервые после оккупации. Город изменился до неузнаваемости. Фашисты повсюду, но мы не сдаемся. Олег сказал, что нужно действовать осторожно, но решительно. Я записал имена всех, кто готов бороться. Нас пятнадцать человек. Завтра начнем печатать листовки.",
      mood: "Решительность"
    },
    {
      date: "3 августа 1942 года",
      title: "Операция на элеваторе",
      content: "Ночью удалось поджечь склад с продовольствием, предназначенным для немецких войск. Серёжа чуть не попался, но успел скрыться. Страшно, но мы понимаем - каждый наш удар приближает освобождение. Мать ничего не знает о моей деятельности. Так будет лучше для всех.",
      mood: "Тревога"
    },
    {
      date: "20 сентября 1942 года",
      title: "Потеря товарища",
      content: "Сегодня арестовали Любу Шевцову. Видел, как её вели по улице. Она держалась гордо, не опустила глаз. Гестаповцы избили её, но она не выдала никого. Мы должны быть такими же сильными. Завтра планируем освобождение. Знаю, это опасно, но мы не можем бросить своих.",
      mood: "Скорбь"
    },
    {
      date: "12 октября 1942 года",
      title: "Письмо в будущее",
      content: "Если кто-то когда-нибудь прочитает эти строки, знайте - мы боролись до конца. Не за награды, не за славу. За право жить свободными на своей земле. За право называться людьми. Каждый день может стать последним, но страх отступает перед долгом. Родина превыше всего.",
      mood: "Надежда"
    },
    {
      date: "5 ноября 1942 года",
      title: "День рождения в подполье",
      content: "Мне исполнилось 17. Никакого праздника, конечно. Но ребята принесли кусочек хлеба и спели тихо 'С днём рождения'. Улыбнулись сквозь слёзы. Год назад я был обычным школьником. Сейчас я солдат без формы, воюющий в тылу врага. Какой подарок я хочу? Только один - увидеть свободную Родину.",
      mood: "Стойкость"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <div 
        className="w-full h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(244,232,208,0.9)), url('https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/e6c8248c-ea77-419e-9f9f-a7c3812528b3.jpg')`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-4 animate-fade-in">
            Дневник молодогвардейца
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 font-mono italic">
            Записки юного героя. 1942 год.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <div className="bg-card/80 backdrop-blur rounded-lg border-2 border-primary/20 shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/16386329-9583-40b5-bfd6-6a8d56661c48.jpg"
                    alt="Иван Земнухов"
                    className="w-full rounded-lg border-4 border-primary/20 shadow-lg"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded font-mono text-sm font-bold shadow-lg">
                    1925-1943
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-serif font-bold text-primary mb-3">Иван Земнухов</h2>
                <p className="text-lg font-mono text-accent mb-4 italic">Боец подпольной организации</p>
                <div className="space-y-4 text-foreground/80 font-mono leading-relaxed">
                  <p>
                    Родился в 1925 году в городе Краснодоне. Обычный школьник, мечтавший стать учителем. 
                    Когда началась война, мне было всего 16 лет.
                  </p>
                  <p>
                    После оккупации города вступил в подпольную организацию "Молодая гвардия". 
                    Участвовал в распространении листовок, диверсионных операциях, помогал освобождать 
                    советских военнопленных.
                  </p>
                  <p>
                    Каждый день в оккупации - это выбор между страхом и долгом. Я выбрал долг. 
                    Мои товарищи - самые смелые люди, которых я знал. Вместе мы боремся за свободу нашей Родины.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground font-mono">Комсомолец</Badge>
                  <Badge className="bg-accent text-accent-foreground font-mono">Подпольщик</Badge>
                  <Badge className="bg-secondary text-secondary-foreground font-mono">Патриот</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-8">Мои соратники</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {comrades.map((comrade, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/90 backdrop-blur border-2 border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative mb-4">
                  <img 
                    src={comrade.image}
                    alt={comrade.name}
                    className="w-full h-64 object-cover rounded border-2 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-1">{comrade.name}</h3>
                <p className="text-sm font-mono text-accent italic mb-2">{comrade.role}</p>
                <Badge variant="outline" className="mb-3 font-mono text-xs">{comrade.age}</Badge>
                <p className="text-sm text-foreground/70 font-mono leading-relaxed">
                  {comrade.bio}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <div className="mb-12 text-center">
          <div className="inline-block p-6 bg-card/80 backdrop-blur rounded-lg border-2 border-primary/20 shadow-xl">
            <p className="text-lg font-mono text-muted-foreground italic">
              "Мы боремся не за славу, а за право жить свободными..."
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-serif font-bold text-primary text-center mb-8">Страницы дневника</h2>

        <div className="space-y-8">
          {diaryEntries.map((entry, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/90 backdrop-blur border-2 border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <Icon name="Calendar" className="text-primary" size={24} />
                  <h3 className="text-2xl font-serif font-semibold text-primary">
                    {entry.date}
                  </h3>
                </div>
                <Badge variant="outline" className="text-sm font-mono border-accent/50 text-accent">
                  {entry.mood}
                </Badge>
              </div>
              
              <h4 className="text-xl font-serif font-medium text-foreground/90 mb-4 italic">
                {entry.title}
              </h4>
              
              <div className="relative pl-6 border-l-2 border-primary/30">
                <p className="text-base leading-relaxed text-foreground/80 font-mono">
                  {entry.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-primary/10 flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <Icon name="Feather" size={16} />
                <span>Написано при свете свечи</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-primary/5 rounded-lg border border-primary/20">
            <Icon name="Star" className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              Вечная память героям
            </h3>
            <p className="text-base font-mono text-muted-foreground max-w-2xl">
              Молодогвардейцы отдали свои жизни за свободу Родины. 
              Их подвиг навсегда останется в сердцах потомков.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-primary/20 mt-16 py-8 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-mono text-muted-foreground">
            Основано на романе Александра Фадеева "Молодая гвардия"
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <Icon name="Heart" size={16} className="text-destructive" />
            <span className="text-xs font-mono text-muted-foreground">
              Посвящается всем героям Великой Отечественной войны
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;