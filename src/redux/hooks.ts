import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
