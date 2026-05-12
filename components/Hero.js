import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container max-w-4xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-dark mb-6">
          Запускаем мобильные и SaaS-приложения за <span className="text-primary">12 недель</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Берем на себя весь цикл разработки: от проработки идеи до публикации в App Store и Google Play. Вы получаете работающий продукт, который приносит прибыль, а не бесконечный процесс согласований.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link href="#contact" className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-primary-hover hover:-translate-y-0.5 transition-all text-center">
            Получить оценку проекта
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {['Фиксированные сроки в договоре', 'Прозрачный бюджет без скрытых доплат', 'Продуктовый подход, а не просто код'].map((text, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold">
              <span className="text-accent">✓</span> {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}