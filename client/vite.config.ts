import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, '../environments')
  console.log("mode: ", mode, env.VITE_APP_TITLE)
  return {
    // build specific config
    server: {
      proxy: {
        "/api": {
          target: env.VITE_APP_API_ROOT,
          changeOrigin: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE
          }
        }
      })
    ],
  }
})