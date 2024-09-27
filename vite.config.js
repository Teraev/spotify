import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                album: resolve(__dirname, 'pages/album'),
                artist: resolve(__dirname, 'pages/artist'),
                profile: resolve(__dirname, 'pages/profile'),
                search: resolve(__dirname, 'pages/search'),
                login: resolve(__dirname, 'pages/login'),
            },
        },
    },
})