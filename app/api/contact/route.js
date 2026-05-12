import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, contact } = await request.json()
    
    // Валидация
    if (!name || !contact) {
      return NextResponse.json(
        { error: 'Имя и контакт обязательны' },
        { status: 400 }
      )
    }

    // Отправка в Go-бэкенд (когда будет готов)
    // const backendResponse = await fetch(`${process.env.BACKEND_URL}/api/leads`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, contact, source: 'landing' })
    // })

    // Пока просто логируем (замените на реальную отправку)
    console.log('New lead:', { name, contact, timestamp: new Date() })

    // Опционально: отправка email через сервисы типа SendGrid, Resend
    // await sendEmail({ to: 'manager@kibt.ru', subject: 'Новая заявка', body: ... })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Серверная ошибка' },
      { status: 500 }
    )
  }
}