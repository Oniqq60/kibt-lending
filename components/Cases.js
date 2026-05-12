'use client'
import { useState } from 'react'
import Image from 'next/image'

const cases = [
  {
    id: 1,
    image: '/images/fin-app.webp',
    fullImage: '/images/fin-app-full.jpg',
    title: 'Мобильное приложение для учета финансов',
    task: 'Задача: автоматизировать категоризацию трат и повысить вовлеченность.',
    metrics: [
      { text: '+45% Retention', positive: true },
      { text: 'Запуск за 9 нед.', positive: false }
    ],
    result: '4.8★ в App Store, 50k+ загрузок за первый месяц'
  },
  {
    id: 2,
    image: '/images/hr-app.webp',
    fullImage: '/images/hr-app.webp',
    title: 'Корпоративный портал онбординга',
    task: 'Задача: сократить время адаптации новых сотрудников.',
    metrics: [
      { text: '-60% времени HR', positive: true },
      { text: 'Интеграция 1C+Jira', positive: false }
    ],
    result: 'Внедрено в 3 филиалах за 2 месяца'
  },
  {
    id: 3,
    image: '/images/food-app.jpg',
    fullImage: '/images/food-app-full.jpg',
    title: 'Мобильное приложение доставки',
    task: 'Задача: увеличить повторные заказы.',
    metrics: [
      { text: '+30% повторных заказов', positive: true },
      { text: '+18% средний чек', positive: true }
    ],
    result: 'ROI окупился за 4.5 месяца'
  }
]

export default function Cases() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <section id="cases" className="py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Реальные проекты с измеримым результатом
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {cases.map((caseItem) => (
              <div 
                key={caseItem.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(caseItem)}
              >
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{caseItem.task}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.metrics.map((metric, i) => (
                      <span 
                        key={i}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${
                          metric.positive 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-gray-600 bg-gray-100'
                        }`}
                      >
                        {metric.text}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{caseItem.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-primary transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-4xl w-full">
            <Image
              src={selectedImage.fullImage}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  )
}