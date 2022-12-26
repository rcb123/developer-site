import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$root: path.resolve('./src'),
			$components: path.resolve('./src/components'),
			$images: path.resolve('./src/static/images'),
			$backgrounds: path.resolve('./src/static/images/weather/backgrounds'),
			$icons: path.resolve('./src/static/images/weather/icons')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
