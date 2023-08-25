import React, {
	FC,
	ReactNode,
	useState,
	useRef,
	useEffect,
	useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = (props) => {
	const { className, children, isOpen, onClose } = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls['is-closing']]: isClosing,
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onContentClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

	const onKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	return (
		<Portal>
			<div className={classNames(cls.modal, mods, [className])}>
				<div
					className={cls.overlay}
					onClick={closeHandler}
				>
					<div
						className={cls.content}
						onClick={onContentClick}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
