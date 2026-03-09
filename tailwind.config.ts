import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
