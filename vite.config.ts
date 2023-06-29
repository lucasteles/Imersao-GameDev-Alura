import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 2_000,
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
        }
    }
})
