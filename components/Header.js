'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-[70px]">
        <Link href="#" className="text-2xl font-extrabold text-primary">КИБТ</Link>
        <nav className="hidden md:flex gap-8">
          {['process', 'cases', 'faq', 'contact'].map(item => (
            <Link key={item} href={`#${item}`} className="text-gray-600 font-medium hover:text-primary transition-colors capitalize">
              {item === 'process' ? 'Как работаем' : item === 'cases' ? 'Кейсы' : item === 'faq' ? 'FAQ' : 'Контакты'}
            </Link>
          ))}
        </nav>
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:inline-flex px-6 py-2 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all"
        >
          Оставить заявку
        </button>
      </div>
    </header>
  )
}