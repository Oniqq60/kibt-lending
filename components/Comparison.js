const comparisonData = [
    {
      criterion: 'Сроки',
      kibt: 'Фиксированы в договоре. Штрафы за просрочку.',
      others: '«Ориентировочно 3–6 месяцев»'
    },
    {
      criterion: 'Процесс',
      kibt: 'Еженедельные демо. Вы видите продукт каждую неделю.',
      others: '«Покажем готовый результат в конце»'
    },
    {
      criterion: 'Подход',
      kibt: 'Продуктовый. Фокус на метриках, конверсиях, LTV.',
      others: 'Технический. «Пишем код по ТЗ»'
    },
    {
      criterion: 'Бюджет',
      kibt: 'Прозрачная смета. Доплаты только по вашему согласию.',
      others: 'Скрытые доплаты на этапах тестирования'
    },
    {
      criterion: 'Код',
      kibt: '✓ Передаем полные права и документацию.',
      others: '✕ Часто привязывают к своей инфраструктуре',
      hasIcons: true
    }
  ]
  
  export default function Comparison() {
    return (
      <section className="py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Почему выбирают нас, а не других
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Честное сравнение подходов
          </p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-5 font-bold text-gray-600">Критерий</th>
                  <th className="text-left p-5 font-bold text-blue-900 bg-blue-50 border-l-4 border-primary">
                    КИБТ
                  </th>
                  <th className="text-left p-5 font-bold text-gray-600">Типовые студии</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i !== comparisonData.length - 1 ? 'border-b border-gray-200' : ''}>
                    <td className="p-5 font-medium text-gray-900">{row.criterion}</td>
                    <td className="p-5 bg-blue-50 border-l-4 border-primary font-semibold text-gray-900">
                      {row.hasIcons ? (
                        <span className="text-green-600">{row.kibt}</span>
                      ) : row.kibt}
                    </td>
                    <td className="p-5 text-gray-600">
                      {row.hasIcons ? (
                        <span className="text-red-500">{row.others}</span>
                      ) : row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }