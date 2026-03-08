import { useDispatch, useSelector } from 'react-redux';

import type { TypedUseSelectorHook } from 'react-redux';

import type { TAppDispatch, TRootState } from '@interfaces';

const useAppDispatch: () => TAppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export { useAppDispatch, useAppSelector };
