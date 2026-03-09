import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	preview: {
		port: 3000,
		strictPort: true,
	},
	server: {
		port: 3000,
		strictPort: true,
		host: true,
		origin: 'http://0.0.0.0:3000',
		watch: {
			usePolling: true,
		},
	},
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
	resolve: {
		alias: {
			'@atoms': path.resolve(__dirname, './src/components/atoms/index.ts'),
			'@molecules': path.resolve(
				__dirname,
				'./src/components/molecules/index.ts',
			),
			'@organisms': path.resolve(
				__dirname,
				'./src/components/organisms/index.ts',
			),
			'@layouts': path.resolve(__dirname, './src/components/layouts/index.ts'),
			'@templates': path.resolve(
				__dirname,
				'./src/components/templates/index.ts',
			),
			'@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
			'@interfaces': path.resolve(__dirname, './src/interfaces/index.ts'),
			'@pages': path.resolve(__dirname, './src/pages/index.ts'),
			'@RTK/Store': path.resolve(__dirname, './src/store/index.ts'),
			'@RTK/Middlewares': path.resolve(
				__dirname,
				'./src/store/middlewares/index.ts',
			),
			'@RTK/Slices': path.resolve(__dirname, './src/store/slices/index.ts'),
			'@router': path.resolve(__dirname, './src/router/index.ts'),
			'@services': path.resolve(__dirname, './src/services/index.ts'),
			'@utils': path.resolve(__dirname, './src/utils/index.ts'),
		},
	},
});
