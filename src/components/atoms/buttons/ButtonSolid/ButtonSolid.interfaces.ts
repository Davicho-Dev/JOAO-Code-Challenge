import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IButtonSolidProps extends DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> {
	isLoading?: boolean;
	hasError?: boolean;
	tooltipContent?: string;
}

export type { IButtonSolidProps };
