import type { IFormSelectProps } from './FormSelect.interfaces.ts';

const FormSelect = ({
	options,
	label,
	placeholder,
	...rest
}: IFormSelectProps) => (
	<fieldset className='flex flex-col gap-y-2'>
		<label
			className='font-medium leading-none text-xs text-neutral-100 uppercase'
			htmlFor='restaurant'
		>
			{label}
		</label>
		<select
			className='h-10 p-2 rounded-md'
			defaultValue=''
			id='restaurant'
			{...rest}
		>
			<option value=''>{placeholder}</option>
			{options?.map(({ label, value }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</select>
	</fieldset>
);

const FormSelectSkt = () => (
	<div className='flex flex-col gap-y-2  animate-pulse'>
		<div className='grow-0 shrink-0 w-24 h-3 bg-gray-300 rounded-md' />
		<div className='grow-0 shrink-0 h-10 inline-flex items-center bg-gray-300 rounded-md'>
			<div className='w-20 h-4 ml-3 rounded-md bg-gray-100' />
		</div>
	</div>
);

export { FormSelect, FormSelectSkt };
