import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IButtonIconProps extends DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> {
	isLoading?: boolean;
	hasError?: boolean;
	tooltipContent?: string;
}

export type { IButtonIconProps };
