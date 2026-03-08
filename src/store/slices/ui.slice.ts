import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { getTheme } from '@utils';

interface IUIState {
	theme: string;
}

const initialState: IUIState = {
	...getTheme(),
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleThemeMode: (_state, { payload }: PayloadAction<string>) => {
			_state.theme = payload;
		},
	},
});

export const { toggleThemeMode } = uiSlice.actions;
