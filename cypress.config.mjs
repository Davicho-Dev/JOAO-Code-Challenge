import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';
import path from 'path';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			on(
				'file:preprocessor',
				vitePreprocessor({
					configFile: path.resolve(__dirname, './vite.config.ts'),
					mode: 'development',
				}),
			);
		},
		supportFile: 'cypress/support/e2e.ts',
		specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
	},

	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
		setupNodeEvents(on, config) {},
		supportFile: 'cypress/support/components.ts',
	},
});
