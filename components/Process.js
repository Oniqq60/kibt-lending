const steps = [
    {
      num: 1,
      time: '1–2 недели',
      title: 'Стратегия и ТЗ',
      desc: 'Проводим воркшоп, определяем метрики успеха, составляем детальное ТЗ и карту рисков.'
    },
    {
      num: 2,
      time: '2 недели',
      title: 'Прототип и UI/UX',
      desc: 'Создаем интерактивный макет. Тестируем логику до написания кода. Никаких правок «вслепую».'
    },
    {
      num: 3,
      time: '4–8 недель',
      title: 'Разработка и тесты',
      desc: 'Еженедельные билды. Ручное и авто-тестирование. Вы управляете бэклогом напрямую.'
    },
    {
      num: 4,
      time: 'Запуск',
      title: 'Публикация и поддержка',
      desc: 'Помогаем пройти модерацию Apple/Google. 3 месяца техподдержки и мониторинга включены.'
    }
  ]
  
  export default function Process() {
    return (
      <section id="process" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Как вы получите готовое приложение за X недель
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                  {step.num}
                </div>
                <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-3">
                  {step.time}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }