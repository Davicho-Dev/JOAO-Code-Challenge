import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

import { setRestaurantID, setTheme } from '@utils';

export const uiMiddleware =
	(store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
		next(action);

		const { ui } = store.getState();

		if (action.type === 'ui/toggleThemeMode') {
			setTheme({ theme: ui.theme });
		}

		if (action.type === 'ui/setSelectedRestaurantID') {
			setRestaurantID(ui.restaurantID);
		}
	};
