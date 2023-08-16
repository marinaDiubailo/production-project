import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { AppRouter } from './providers/Router';
import './styles/index.scss';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('App', {}, [theme])}>
			<NavBar />
			<AppRouter />
		</div>
	);
};

export default App;
