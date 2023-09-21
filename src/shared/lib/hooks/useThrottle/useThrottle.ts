import { useCallback, useRef } from 'react';

export const useThrottle = (
    cb: (...args: Array<any>) => void,
    delay: number
) => {
    const throttleRef = useRef(false);
    return useCallback(
        (...args: Array<any>) => {
            if (!throttleRef.current) {
                cb(...args);
                throttleRef.current = true;
                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [cb, delay]
    );
};
