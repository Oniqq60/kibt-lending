const benefits = [
    {
      icon: '🚀',
      title: 'Быстрый запуск MVP',
      desc: 'Выходим на рынок за 4–6 недель. Проверяем гипотезы до вливания миллионов.'
    },
    {
      icon: '📐',
      title: 'Архитектура под масштаб',
      desc: 'Система готова к росту нагрузки. Никаких «костылей», которые сломаются при 10k DAU.'
    },
    {
      icon: '✅',
      title: 'Гарантия прохождения модерации',
      desc: 'Соблюдаем гайдлайны Apple и Google. Не допускаем отклонений из-за мелких правок.'
    },
    {
      icon: '📊',
      title: 'Прозрачность 24/7',
      desc: 'Доступ к трекеру задач, репозиторию и еженедельным отчетам. Вы всегда в курсе.'
    }
  ]
  
  export default function Benefits() {
    return (
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Что вы получаете, работая с нами
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Не «фичи», а бизнес-гарантии
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div 
                key={i}
                className="bg-white p-7 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }