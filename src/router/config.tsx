import { createBrowserRouter } from 'react-router';

import { CommonLayout } from '@layouts';
import { HomePage, OrdersPage } from '@pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <CommonLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'orders',
				element: <OrdersPage />,
			},
		],
	},
]);
