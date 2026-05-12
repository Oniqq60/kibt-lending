import './globals.css'

export const metadata = {
  title: 'КИБТ — Запуск мобильных и SaaS-приложений за 12 недель',
  description: 'Разработка мобильных и SaaS-приложений для бизнеса. Фиксированные сроки, прозрачный бюджет, продуктовый подход.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}