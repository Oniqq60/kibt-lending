export default function Problem() {
    return (
      <section className="py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Почему разработка приложений часто превращается в кошмар?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Рынок переполнен подрядчиками, которые продают «красивый процесс», но не результат.
            </p>
            <ul className="space-y-4">
              {[
                'Сроки сдвигаются на 3–6 месяцев после каждого релиза',
                'Бюджет растет без предупреждения и контроля',
                'На выходе — сырой продукт, который не решает бизнес-задачи',
                'Команда пропадает после получения предоплаты'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-500 font-bold text-xl mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <img 
              src="/images/graf1.png" 
              alt="Проблема разработки" 
              className="w-full h-auto rounded-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    )
  }