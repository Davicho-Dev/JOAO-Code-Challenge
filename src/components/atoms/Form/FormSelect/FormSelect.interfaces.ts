import type { SelectHTMLAttributes } from 'react';

interface IFormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: {
		value: string;
		label: string;
	}[];
	label: string;
	placeholder: string;
}

export type { IFormSelectProps };
