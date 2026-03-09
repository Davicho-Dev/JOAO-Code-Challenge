import type { Middleware } from '@reduxjs/toolkit';

import { setRestaurantID, setTheme } from '@utils';

import type { TRootState } from '@interfaces';

export const uiMiddleware: Middleware<object, TRootState> =
	store => next => action => {
		next(action);

		if (typeof action !== 'object' || action === null || !('type' in action))
			return;

		const { ui } = store.getState();

		if (action.type === 'ui/toggleThemeMode') {
			setTheme({ theme: ui.theme });
		}

		if (action.type === 'ui/setSelectedRestaurantID') {
			setRestaurantID(ui.restaurantID);
		}
	};
