import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { uiSlice } from '@RTK/Slices';
import { uiMiddleware } from '@RTK/Middlewares';

const rootReducer = combineReducers({
	[uiSlice.name]: uiSlice.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(uiMiddleware),
});

export { store };
