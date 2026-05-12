'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Сколько стоит разработка приложения?', a: 'Стоимость зависит от функционала. MVP обычно стартует от 350 000 ₽. Точную смету мы даем после 30-минутного разбора идеи. Никаких скрытых наценок.' },
  { q: 'Какие реальные сроки?', a: 'MVP: 4–6 недель. Полноценное приложение с админкой и интеграциями: 8–12 недель. Сроки фиксируются в договоре и соблюдаются на 100%.' },
  { q: 'Работаете ли вы без готового ТЗ?', a: 'Да, в 70% случаев у клиентов нет ТЗ. Мы проводим стратегическую сессию, сами структурируем требования и отдаем вам готовый документ перед стартом разработки.' },
  { q: 'Что происходит после запуска?', a: '3 месяца бесплатной техподдержки включены. Далее предлагаем пакеты развития (новые фичи, аналитика, масштабирование) по фиксированной ставке.' },
]

export default function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Частые вопросы</h2>
        <p className="text-center text-gray-600 mb-12">Отвечаем честно и без маркетинговой воды</p>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-200 pb-4 cursor-pointer" onClick={() => setActive(active === i ? null : i)}>
              <div className="flex justify-between items-center font-semibold text-lg">
                {item.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${active === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${active === i ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                <p className="text-gray-600">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}