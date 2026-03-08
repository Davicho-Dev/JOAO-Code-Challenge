import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { router } from '@router';
import { queryClient } from '@services';
import { store } from '@RTK/Store';

import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<Toaster position='bottom-center' />
			</QueryClientProvider>
		</Provider>
	</StrictMode>,
);
