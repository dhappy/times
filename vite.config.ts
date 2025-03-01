import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;


export default defineConfig({
	plugins: [sveltekit()],

	// 1. prevent vite from obscuring rust errors
	clearScreen: false,
	// 2. tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1420,
		strictPort: true,
		host: host || false,
		hmr: host
		? {
			protocol: 'ws',
			host,
			port: 1421,
		} : undefined,
		watch: {
			// 3. tell vite to ignore watching `src-tauri`
			ignored: ['**/src-tauri/**'],
		},
	},
});
