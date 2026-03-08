import { ImSpinner2 } from 'react-icons/im';

import type { IButtonSolidProps } from './ButtonSolid.interfaces';

import styles from './ButtonSolid.module.sass';

export const ButtonSolid = ({
	children,
	className,
	disabled,
	hasError,
	isLoading,
	...rest
}: IButtonSolidProps) => {
	if (isLoading) {
		return (
			<button className={`${styles['button--loading']} ${className}`} {...rest}>
				<ImSpinner2 className='animate-spin' />
			</button>
		);
	}

	if (hasError) {
		return (
			<button className={`${styles['button--error']} ${className}`} {...rest}>
				{children}
			</button>
		);
	}

	if (disabled) {
		return (
			<button
				className={`${styles['button--disabled']} ${className}`}
				disabled
				{...rest}
			>
				{children}
			</button>
		);
	}

	return (
		<button className={`${styles['button']} ${className}`} {...rest}>
			{children}
		</button>
	);
};
