import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-extrabold text-white mb-3">КИБТ</div>
            <p className="max-w-xs text-sm leading-relaxed">
              Разработка мобильных и веб-приложений, которые приносят прибыль.
            </p>
          </div>
          <div>
            <nav className="flex flex-col gap-3">
              <Link href="#cases" className="hover:text-white transition-colors">Кейсы</Link>
              <Link href="#process" className="hover:text-white transition-colors">Процесс</Link>
              <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
          <div>
            <p className="mb-2">+7 (123) 123-12-12</p>
            <p className="mb-2">hello@kibt.ru</p>
            <p className="text-sm">Томск, ул. Владимира Высоцкого, 33</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          © 2026 КИБТ. Все права защищены.
        </div>
      </div>
    </footer>
  )
}