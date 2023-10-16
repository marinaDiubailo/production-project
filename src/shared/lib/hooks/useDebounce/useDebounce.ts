import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (
    cb: (...args: Array<any>) => void,
    delay: number,
) => {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback(
        (...args: Array<any>) => {
            if (!timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                cb(...args);
            }, delay);
        },
        [cb, delay],
    );
};
