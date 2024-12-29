import { defineConfig } from 'vite'
import { ssr } from 'vite-plugin-ssr/plugin'
import md from 'unplugin-vue-markdown/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/psa-my/',
  plugins: [
    ssr({ trailingSlash: true }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    vueDevTools(),
    md({}),
  ],
})