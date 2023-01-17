import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$root: path.resolve('./src'),
			$components: path.resolve('./src/components'),
			$static: path.resolve('/'),
			$images: path.resolve('/images'),
			$backgrounds: path.resolve('/images/weather/backgrounds'),
			$icons: path.resolve('/images/weather/icons')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
