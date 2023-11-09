import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { getUserMounted, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { AppRouter } from './providers/Router';
import { useAppToolbar } from './lib/useAppToolbar';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const mounted = useSelector(getUserMounted);
    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!mounted) {
            dispatch(initAuthData());
        }
    }, [dispatch, mounted]);

    if (!mounted) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app-redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    id="app"
                    className={classNames('app-redesigned', {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<NavBar />}
                            content={<AppRouter />}
                            sidebar={<SideBar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
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
