# KIBT Landing Page

## Быстрый старт (локально)

### 1. Установка зависимостей

```bash
cd kibt-landing
npm install
```

### 2. Настройка окружения
Создайте файл .env.local:

```bash
cp .env.example .env
```
Отредактируйте .env.local:

```env
# Backend API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
```

### 3. Запуск dev сервера

```bash
npm run dev
```

## Быстрый старт (контейнер)

```bash
docker-compose build
docker-compose up -d
```