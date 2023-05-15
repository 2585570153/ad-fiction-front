import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// elementPlus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



export default defineConfig({
  plugins: [
      vue(),
      AutoImport({
      resolvers: [ElementPlusResolver()],
      }),
      Components({
          resolvers: [ElementPlusResolver({importStyle:"sass"})],
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    css: {
        preprocessorOptions: {
            scss: {
                // 自动导入定制化样式文件进行样式覆盖
                additionalData: `
                 @use "@/styles/element/index.scss" as *;
                 @use "@/styles/var.scss" as *;
                 `,
            }
        }
    }
})
