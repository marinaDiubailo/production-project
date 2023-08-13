import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
	const { theme, toogleTheme } = useTheme();

	return (
		<div className={`App ${theme}`}>
			<button onClick={toogleTheme}>TOOGLE</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path={'/about'}
						element={<AboutPageAsync />}
					/>
					<Route
						path={'/'}
						element={<MainPageAsync />}
					/>
				</Routes>
			</Suspense>
			<Counter />
		</div>
	);
};

export default App;
