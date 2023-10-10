import { FC, useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';

// компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    const throwErrorHandler = () => {
        setError(true);
    };

    return (
        <Button
            onClick={throwErrorHandler}
            style={{
                width: '20px',
                height: '20px',
                border: '1px solid #fff',
                borderRadius: '5px',
                background: 'red',
                margin: '10px',
            }}
        />
    );
};
