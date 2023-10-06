import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { getUserMounted, userActions } from '@/entities/User';
import { AppRouter } from './providers/Router';

const App = () => {
    // const { theme } = useTheme();

    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <NavBar />
                <div className='content-page'>
                    <SideBar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
