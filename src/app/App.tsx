import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from './providers/Router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <NavBar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
