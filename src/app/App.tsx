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
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { MainLayout } from '@/shared/layouts/MainLayout';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames('app-redesigned', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<NavBar />}
                            content={<AppRouter />}
                            sidebar={<SideBar />}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <NavBar />
                        <div className="content-page">
                            <SideBar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
};

export default App;
