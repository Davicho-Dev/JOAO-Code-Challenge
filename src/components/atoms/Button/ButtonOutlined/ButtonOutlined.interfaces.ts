import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IButtonOutlinedProps extends DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> {
	isLoading?: boolean;
	hasError?: boolean;
	tooltipContent?: string;
}

export type { IButtonOutlinedProps };
