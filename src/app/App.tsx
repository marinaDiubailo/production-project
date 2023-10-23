import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { getUserMounted, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppRouter } from './providers/Router';
import { PageLoader } from '@/widgets/PageLoader';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!mounted) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
