import type { IErrorTemplateProps } from './ErrorTemplate.interfaces.ts';

export const ErrorTemplate = ({ message }: IErrorTemplateProps) => (
	<div className='p-8 bg-red-300'>
		<h1 className='font-bold text-3xl text-white/75'>{message}</h1>
	</div>
);
