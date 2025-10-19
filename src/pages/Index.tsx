import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const comrades = [
    {
      name: "Ульяна Громова",
      role: "Комиссар организации",
      age: "16 лет",
      bio: "Моя правая рука и опора. Умная, смелая девушка. Помогала организовывать подпольную работу, распространяла листовки. Всегда была там, где было труднее всего.",
      image: "https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/07b3d72a-4e66-441b-b185-3dbff68178bd.jpg"
    },
    {
      name: "Сергей Тюленин",
      role: "Командир диверсионной группы",
      age: "17 лет",
      bio: "Бесстрашный боец. Руководил самыми опасными операциями. Поджоги складов, взрывы - его стихия. Никогда не отступал перед опасностью.",
      image: "https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/36d38f78-982a-422d-9ac8-04620378cb87.jpg"
    },
    {
      name: "Любовь Шевцова",
      role: "Связная",
      age: "19 лет",
      bio: "Связная между нашими группами. Рисковала жизнью каждый день, передавая важные сообщения. Попала в руки гестапо, но не выдала ни одного товарища.",
      image: "https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/16386329-9583-40b5-bfd6-6a8d56661c48.jpg"
    }
  ];

  const diaryEntries = [
    {
      date: "10 июля 1942 года",
      title: "Решение принято",
      content: "Город захвачен врагом. Немецкие солдаты патрулируют улицы. Но я не могу сидеть сложа руки! Сегодня собрал первых товарищей. Их глаза горели тем же огнём, что и мои. Мы поклялись бороться до конца. Начинаем организацию подполья. Называемся 'Молодая гвардия'. Юные, но не сломленные.",
      mood: "Решительность"
    },
    {
      date: "25 июля 1942 года",
      title: "Первая операция",
      content: "Ночью распространили листовки по всему городу. Люди должны знать правду о том, что происходит на фронте! Немцы в ярости, устроили облавы. Но мы действовали чётко - никто не попался. Это только начало нашей борьбы. Каждое малое дело приближает Победу.",
      mood: "Решительность"
    },
    {
      date: "15 августа 1942 года",
      title: "Груз командира",
      content: "Быть командиром - значит нести ответственность за каждого. Сегодня планировал операцию и думал: а вдруг кто-то не вернётся? Но потом вспомнил - мы все приняли этот выбор осознанно. Мы сражаемся за свободу, и это важнее страха. Товарищи верят мне, и я не подведу.",
      mood: "Ответственность"
    },
    {
      date: "5 сентября 1942 года",
      title: "Диверсия на элеваторе",
      content: "Сегодня мы совершили крупную операцию - подожгли элеватор с продовольствием для немецких войск. Сергей руководил группой блестяще. Пламя было видно на весь город. Это наш ответ оккупантам! Фашисты не получат ни крошки с нашей земли.",
      mood: "Триумф"
    },
    {
      date: "10 октября 1942 года",
      title: "Потери",
      content: "Сегодня чёрный день. Арестовали несколько наших ребят. Люба Шевцова попала в гестапо. Знаю, её пытают, но она крепкая - не выдаст. Больно и страшно, но мы продолжаем. Память о павших товарищах требует, чтобы мы шли до конца.",
      mood: "Скорбь"
    },
    {
      date: "20 ноября 1942 года",
      title: "Вера в Победу",
      content: "Кольцо вокруг нас сжимается. Предатель выдал явки. Многие арестованы. Но даже сейчас я верю - мы не зря боролись. Наша борьба не пройдёт бесследно. Если эти строки когда-нибудь прочитают - знайте: мы любили Родину больше жизни. И мы победили, даже если не дожили до этого дня.",
      mood: "Надежда"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <div 
        className="w-full h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(244,232,208,0.85)), url('https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/ed17ef78-ff3c-4431-b5a2-1fb9c5bd845f.jpg')`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-4 animate-fade-in drop-shadow-lg">
            Олег Кошевой
          </h1>
          <p className="text-2xl md:text-3xl text-primary/90 font-mono italic drop-shadow-md">
            Командир "Молодой гвардии"
          </p>
          <p className="text-lg md:text-xl text-primary/70 font-mono mt-2">
            1926 - 1943
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <section className="mb-16">
          <div className="bg-card/80 backdrop-blur rounded-lg border-2 border-primary/20 shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/projects/a26dabc1-b019-46db-9abb-29f5442e50f7/files/b3617623-7876-4043-889c-119487f99f89.jpg"
                    alt="Олег Кошевой"
                    className="w-full rounded-lg border-4 border-primary/20 shadow-lg"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded font-mono text-sm font-bold shadow-lg">
                    16 лет
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-serif font-bold text-primary mb-3">Моя история</h2>
                <p className="text-lg font-mono text-accent mb-4 italic">От первого лица</p>
                <div className="space-y-4 text-foreground/80 font-mono leading-relaxed">
                  <p>
                    Меня зовут Олег Кошевой. Родился 8 июня 1926 года в городе Прилуки. Самый обычный парень - 
                    учился в школе, мечтал стать инженером, любил читать книги о героях.
                  </p>
                  <p>
                    Когда немцы оккупировали Краснодон в июле 1942 года, мне было всего 16 лет. 
                    Но я понял - нельзя стоять в стороне, когда враг топчет родную землю. Вместе с товарищами 
                    мы создали подпольную организацию "Молодая гвардия".
                  </p>
                  <p>
                    Меня избрали командиром. Это огромная ответственность - отвечать за жизни ребят, 
                    планировать операции, принимать решения. Но я не боюсь. Мы распространяем листовки, 
                    совершаем диверсии, освобождаем военнопленных. Каждое наше действие - удар по врагу.
                  </p>
                  <p>
                    Знаю, что впереди опасность. Гестапо ищет нас. Но пока я жив - буду бороться. 
                    За Родину, за свободу, за право называться человеком. Победа будет за нами!
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground font-mono">Командир</Badge>
                  <Badge className="bg-accent text-accent-foreground font-mono">Комсомолец</Badge>
                  <Badge className="bg-secondary text-secondary-foreground font-mono">Герой</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-8">
            Мои боевые товарищи
          </h2>
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
          <div className="inline-block p-8 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur rounded-lg border-2 border-primary/20 shadow-xl">
            <Icon name="BookOpen" className="mx-auto mb-4 text-primary" size={48} />
            <p className="text-xl font-serif text-primary font-bold italic mb-2">
              "Прощай, Родина! Умираю, но не сдаюсь!"
            </p>
            <p className="text-sm font-mono text-muted-foreground">
              Последние слова Олега Кошевого
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-serif font-bold text-primary text-center mb-8">
          Страницы моего дневника
        </h2>

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
                <span>Записано в подполье</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-primary/5 rounded-lg border border-primary/20">
            <Icon name="Star" className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              Герой Советского Союза
            </h3>
            <p className="text-base font-mono text-muted-foreground max-w-2xl">
              Олег Кошевой посмертно награждён званием Героя Советского Союза. 
              Его подвиг вдохновил миллионы советских людей на борьбу с фашизмом. 
              Вечная память юному герою!
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-primary/20 mt-16 py-8 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-mono text-muted-foreground">
            По мотивам романа Александра Фадеева "Молодая гвардия"
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <Icon name="Heart" size={16} className="text-destructive" />
            <span className="text-xs font-mono text-muted-foreground">
              Подвиг молодогвардейцев бессмертен
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
