import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import './styles/index.scss';

const App = () => {
	const { theme, toogleTheme } = useTheme();

	return (
		<div className={classNames('App', {}, [theme])}>
			<button onClick={toogleTheme}>TOOGLE</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<AppRouter />
		</div>
	);
};

export default App;
