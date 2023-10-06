/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='value-title'>Count: {counterValue}</h1>
            <Button
                data-testid='increment-btn'
                theme={ButtonTheme.OUTLINE}
                onClick={increment}
            >
                increment
            </Button>
            <Button
                data-testid='decrement-btn'
                theme={ButtonTheme.OUTLINE}
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
