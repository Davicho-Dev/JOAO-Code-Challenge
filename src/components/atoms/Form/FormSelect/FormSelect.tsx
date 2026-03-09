import type { IFormSelectProps } from './FormSelect.interfaces.ts';

export const FormSelect = ({
	options,
	label,
	placeholder,
	...rest
}: IFormSelectProps) => (
	<fieldset className='flex flex-col gap-y-2'>
		<label
			className='font-medium text-xs text-neutral-100 uppercase'
			htmlFor='restaurant'
		>
			{label}
		</label>
		<select
			className='p-2 rounded-md'
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
