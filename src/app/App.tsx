import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
	const { theme, toogleTheme } = useTheme();

	return (
		<div className={classNames('App', {}, [theme])}>
			<button onClick={toogleTheme}>TOOGLE</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path={'/about'}
						element={<AboutPage />}
					/>
					<Route
						path={'/'}
						element={<MainPage />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
