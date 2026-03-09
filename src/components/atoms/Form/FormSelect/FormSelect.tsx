import { useId } from 'react';

import type { IFormSelectProps } from './FormSelect.interfaces.ts';

const FormSelect = ({
	options,
	label,
	placeholder,
	...rest
}: IFormSelectProps) => {
	const innerId = useId();

	return (
		<fieldset className='flex flex-col gap-y-2'>
			<label
				className='text-xs font-medium uppercase leading-none text-neutral-100'
				htmlFor={innerId}
			>
				{label}
			</label>
			<select className='h-10 rounded-md p-2' id={innerId} {...rest}>
				<option value=''>{placeholder}</option>
				{options?.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
		</fieldset>
	);
};

const FormSelectSkt = () => (
	<div className='flex animate-pulse flex-col gap-y-2'>
		<div className='h-3 w-24 shrink-0 grow-0 rounded-md bg-gray-300' />
		<div className='inline-flex h-10 shrink-0 grow-0 items-center rounded-md bg-gray-300'>
			<div className='ml-3 h-4 w-20 rounded-md bg-gray-100' />
		</div>
	</div>
);

export { FormSelect, FormSelectSkt };
