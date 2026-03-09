import { LuClipboardList } from 'react-icons/lu';

import type { IEmptyTemplateProps } from './EmptyTemplate.interfaces';

export const EmptyTemplate = ({ title, description }: IEmptyTemplateProps) => (
	<div className='flex flex-col items-center justify-center gap-y-3 py-20 text-center'>
		<LuClipboardList className='text-5xl text-neutral-300 dark:text-neutral-600' />
		<p className='text-base font-semibold text-neutral-500 dark:text-neutral-400'>
			{title}
		</p>
		{description && (
			<p className='max-w-xs text-sm text-neutral-400 dark:text-neutral-500'>
				{description}
			</p>
		)}
	</div>
);
