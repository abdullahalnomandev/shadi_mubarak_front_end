import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


interface IDebounce {
  searchQuery: string;
  deley: number;
}
export const useDebounce = ({searchQuery,deley}:IDebounce) => {

    const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);

    useEffect(() => {
      setTimeout(() => {
        setDebouncedValue(searchQuery);
      }, deley);
    },[searchQuery, deley]);

    return debouncedValue;
}