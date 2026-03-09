import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { getRestaurantID, getTheme } from '@utils';

interface IUIState {
	theme: string;
	restaurantID: number | null;
}

const initialState: IUIState = {
	...getTheme(),
	restaurantID: getRestaurantID(),
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleThemeMode: (state, { payload }: PayloadAction<string>) => {
			state.theme = payload;
		},
		setSelectedRestaurantID: (
			state,
			{ payload }: PayloadAction<number | null>,
		) => {
			state.restaurantID = payload;
		},
	},
});

export const { toggleThemeMode, setSelectedRestaurantID } = uiSlice.actions;
