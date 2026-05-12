'use client'
import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '',
    phone: '',
    company: '',
    appType: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorModal, setErrorModal] = useState({ show: false, errors: [] })

  // Валидация формы
  const validateForm = () => {
    const errors = []
    
    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Введите ваше имя (минимум 2 символа)')
    }
    
    // Проверяем что хотя бы одно из полей заполнено
    const emailTrimmed = formData.email.trim()
    const phoneDigits = formData.phone.replace(/\D/g, '')
    
    if (!emailTrimmed && phoneDigits.length < 10) {
      errors.push('Укажите email или телефон')
    } else {
      // Валидация email если заполнен
      if (emailTrimmed) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(emailTrimmed)) {
          errors.push('Введите корректный email')
        }
      }
      
      // Валидация телефона если заполнен
      if (phoneDigits.length >= 10 && phoneDigits.length < 11) {
        errors.push('Введите полный номер телефона (11 цифр)')
      }
    }
    
    if (!formData.appType) {
      errors.push('Выберите тип приложения')
    }
    
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validateForm()
    if (validationErrors.length > 0) {
      setErrorModal({ show: true, errors: validationErrors })
      return
    }
    
    setLoading(true)
    
    try {
      const emailTrimmed = formData.email.trim()
      const phoneTrimmed = formData.phone.trim()
      
      const payload = {
        name: formData.name.trim(),
        email: emailTrimmed || 'unknown@example.com',
        phone: phoneTrimmed || '+70000000000',
        company: formData.company.trim() || '',
        app_type: formData.appType,
        message: formData.message.trim() || ''
      }

      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080'
      const response = await fetch(`${backendUrl}/api/v1/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      
      if (!response.ok) {
        if (response.status === 422) {
          setErrorModal({ 
            show: true, 
            errors: ['Проверьте правильность заполнения всех полей'] 
          })
        } else {
          setErrorModal({ 
            show: true, 
            errors: ['Ошибка сервера. Попробуйте позже или свяжитесь с нами напрямую'] 
          })
        }
        throw new Error(`Backend error: ${response.status}`)
      }
      
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', company: '', appType: '', message: '' })
    } catch (err) {
      console.error('Submit error:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatPhone = (val) => {
    const digits = val.replace(/\D/g, '')
    if (!digits) return ''
    
    let cleanDigits = digits
    if (cleanDigits.startsWith('8')) {
      cleanDigits = '7' + cleanDigits.slice(1)
    }
    if (!cleanDigits.startsWith('7')) {
      cleanDigits = '7' + cleanDigits
    }
    
    let formatted = '+7'
    if (cleanDigits.length > 1) formatted += ` (${cleanDigits.slice(1, 4)}`
    if (cleanDigits.length >= 4) formatted += `) ${cleanDigits.slice(4, 7)}`
    if (cleanDigits.length >= 7) formatted += `-${cleanDigits.slice(7, 9)}`
    if (cleanDigits.length >= 9) formatted += `-${cleanDigits.slice(9, 11)}`
    
    return formatted
  }

  const closeErrorModal = () => {
    setErrorModal({ show: false, errors: [] })
  }

  return (
    <>
      {/* Модальное окно ошибок */}
      {errorModal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={closeErrorModal}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              ✕
            </div>
            <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">
              Ошибка отправки
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Пожалуйста, исправьте следующие ошибки:
            </p>
            <ul className="space-y-3 mb-8">
              {errorModal.errors.map((error, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-red-600 bg-red-50 p-3 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-red-600 font-bold mt-0.5 text-lg leading-none">•</span>
                  <span className="text-sm font-medium">{error}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={closeErrorModal}
              className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Понятно, исправлю
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="py-24 bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="container max-w-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
          <p className="mb-10 opacity-90">Оставьте контакты. Мы свяжемся за 24 часа, проведем бесплатный разбор идеи и дадим точную оценку сроков и бюджета.</p>
          
          {success ? (
            <div className="bg-white text-dark p-8 rounded-2xl shadow-xl animate-fade-in">
              <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
              <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
              <p className="text-gray-600 mb-6">Менеджер свяжется с вами в течение 24 часов для бесплатного разбора проекта.</p>
              <button onClick={() => setSuccess(false)} className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-hover transition">Закрыть</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white text-dark p-8 rounded-2xl shadow-xl">
              <div className="mb-5 text-left">
                <label className="block text-sm font-medium text-gray-600 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Иван Петров" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition" 
                />
              </div>
              
              <div className="mb-5 text-left">
                <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="email@company.com" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition" 
                />
              </div>

              <div className="mb-5 text-left">
                <label className="block text-sm font-medium text-gray-600 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: formatPhone(e.target.value)})} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition" 
                />
              </div>

              <div className="mb-5 text-left">
                <label className="block text-sm font-medium text-gray-600 mb-2">Компания</label>
                <input 
                  type="text" 
                  placeholder="Название компании" 
                  value={formData.company} 
                  onChange={e => setFormData({...formData, company: e.target.value})} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition" 
                />
              </div>

              <div className="mb-5 text-left">
                <label className="block text-sm font-medium text-gray-600 mb-2">Тип приложения</label>
                <select 
                  value={formData.appType} 
                  onChange={e => setFormData({...formData, appType: e.target.value})} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition bg-white"
                >
                  <option value="">Выберите тип</option>
                  <option value="mobile">Мобильное приложение</option>
                  <option value="web">Веб-приложение</option>
                  <option value="saas">SaaS-платформа</option>
                  <option value="corporate">Корпоративный портал</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div className="mb-6 text-left">
                <label className="block text-sm font-medium text-gray-600 mb-2">Описание проекта</label>
                <textarea 
                  rows="4"
                  placeholder="Расскажите о вашем проекте: основные функции, цели, сроки..." 
                  value={formData.message} 
                  onChange={e => setFormData({...formData, message: e.target.value})} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition resize-none" 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover disabled:opacity-70 transition shadow-lg hover:shadow-xl"
              >
                {loading ? 'Отправка...' : 'Получить оценку проекта'}
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}