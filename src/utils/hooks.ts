import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '../redux';

// Custom hook that provides a typed version of useDispatch from react-redux
// It returns an instance of the AppDispatch type defined in your redux store
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook that provides a typed version of useSelector from react-redux
// It uses the RootState type to infer the type of the selected state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
