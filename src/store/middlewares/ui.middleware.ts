import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

import { setTheme } from '@utils';

import type { TRootState } from '@interfaces';

export const uiMiddleware =
	(store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
		next(action);

		if (action.type === 'ui/toggleThemeMode') {
			const { ui } = store.getState() as TRootState;

			const { theme } = ui;

			setTheme({ theme });
		}
	};
