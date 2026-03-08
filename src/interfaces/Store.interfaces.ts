import { store } from '@RTK/Store';

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export type { TRootState, TAppDispatch };
