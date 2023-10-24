/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">Count: {counterValue}</h1>
            <Button
                data-testid="increment-btn"
                theme={ButtonTheme.OUTLINE}
                onClick={incrementHandler}
            >
                increment
            </Button>
            <Button
                data-testid="decrement-btn"
                theme={ButtonTheme.OUTLINE}
                onClick={decrementHandler}
            >
                decrement
            </Button>
        </div>
    );
};
