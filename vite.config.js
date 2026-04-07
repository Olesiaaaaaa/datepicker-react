import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Замени 'datepicker-react' на ТОЧНОЕ имя твоего репозитория на GitHub
const REPO_NAME = 'datepicker-react'

export default defineConfig({
  plugins: [react()],
  // В продакшене (GitHub Pages) добавляет префикс /имя-репо/, локально — корень
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  server: {
    port: 5174,
    open: true,
  },
})
