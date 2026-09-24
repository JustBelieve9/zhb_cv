import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' — сборка работает и в корне домена, и в подкаталоге
// (например, username.github.io/repo/), потому что сайт одностраничный,
// без серверного роутинга.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
