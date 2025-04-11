import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "owen-b4",
    project: "javascript-react"
  })],
  base: "/apple-clone",

  build: {
    sourcemap: true
  }
})