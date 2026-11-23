import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 프로젝트 사이트는 /저장소이름/ 경로에서 서비스되므로 base를 맞춰야 합니다.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
})
