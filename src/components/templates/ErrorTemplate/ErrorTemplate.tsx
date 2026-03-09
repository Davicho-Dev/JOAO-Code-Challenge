import type { IErrorTemplateProps } from './ErrorTemplate.interfaces.ts';

export const ErrorTemplate = ({ message }: IErrorTemplateProps) => (
	<div className='bg-red-300 p-8'>
		<h1 className='text-3xl font-bold text-white/75'>{message}</h1>
	</div>
);
