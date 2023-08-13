import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

const App = () => {
	return (
		<div>
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
