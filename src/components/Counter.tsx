import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const incrementHandler = () => {
		setCount(prevState => prevState + 1);
	};
	const decrementHandler = () => {
		setCount(prevState => prevState - 1);
	};

	return (
		<div className={classes.counter}>
			<h1>{count}</h1>
			<div className={classes['button-container']}>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
		</div>
	);
};
