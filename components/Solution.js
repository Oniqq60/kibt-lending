export default function Solution() {
    return (
      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/images/hr-app.webp" 
              alt="Решение" 
              className="w-full h-auto rounded-2xl shadow-lg"
              width={600}
              height={500}
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Мы строим не код, а бизнес-инструменты
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Наша задача — не «написать строки», а закрыть вашу бизнес-задачу с измеримыми метриками.
            </p>
            <ul className="space-y-4">
              {[
                'Фиксированные этапы и дедлайны, прописанные в договоре',
                'Еженедельные демо: вы видите прогресс в реальном времени',
                'Продуктовая аналитика закладывается на этапе проектирования',
                'Масштабируемая архитектура с первого дня (готово к 100k+ пользователей)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 font-bold text-xl mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }