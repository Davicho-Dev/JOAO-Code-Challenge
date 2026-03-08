import { useId } from 'react';

import { Tooltip } from 'react-tooltip';

import type { IButtonIconProps } from './ButtonIcon.interfaces';

import styles from './ButtonIcon.module.sass';

export const ButtonIcon = ({
	children,
	className,
	disabled,
	hasError,
	isLoading,
	tooltipContent,
	...rest
}: IButtonIconProps) => {
	const innerId = useId();

	if (isLoading)
		return (
			<button
				id={innerId}
				className={`${styles['button--loading']} ${className}`}
				{...rest}
			>
				{children}
			</button>
		);

	if (hasError)
		return (
			<button
				id={innerId}
				className={`${styles['button--error']} ${className}`}
				{...rest}
			>
				{children}
			</button>
		);

	if (disabled)
		return (
			<button
				id={innerId}
				className={`${styles['button--disabled']} ${className}`}
				disabled
				{...rest}
			>
				{children}
			</button>
		);

	return (
		<>
			<button
				data-tooltip-id={innerId}
				className={`${styles['button']} ${className}`}
				{...rest}
			>
				{children}
			</button>
			<Tooltip id={innerId} content={tooltipContent} />
		</>
	);
};
