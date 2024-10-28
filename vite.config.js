import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.0.127', // 또는 0.0.0.0으로 설정해 다른 장치에서도 접근 가능하게 할 수 있음
    port: 3000,
  },
});
