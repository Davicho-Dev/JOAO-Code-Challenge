import { useState } from 'react';

import { LuImage } from 'react-icons/lu';

import type { IMenuItemCardProps } from './MenuItemCard.interfaces';

import styles from './MenuItemCard.module.sass';

const MenuItemCard = ({ item }: IMenuItemCardProps) => {
	const { itemName, itemDescription, itemPrice, imageUrl } = item;

	const [imgError, setImgError] = useState(false);

	return (
		<article
			className={`flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-all duration-200 hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800 ${styles['card']}`}
		>
			<figure className='relative h-64 w-full overflow-hidden'>
				{imgError || !imageUrl ? (
					<div className='absolute inset-0 flex h-full w-full items-center justify-center bg-neutral-100 dark:bg-neutral-700'>
						<LuImage className='text-3xl text-neutral-300 dark:text-neutral-600' />
					</div>
				) : (
					<img
						className='h-full w-full object-cover'
						src={imageUrl}
						alt={itemName}
						loading='lazy'
						onError={() => setImgError(true)}
					/>
				)}
			</figure>
			<div className='flex flex-1 flex-col gap-y-1.5 p-4'>
				<h3 className='text-sm font-semibold leading-snug text-neutral-800 dark:text-neutral-100'>
					{itemName}
				</h3>
				{itemDescription && (
					<p className='line-clamp-2 flex-1 text-xs leading-relaxed text-neutral-400 dark:text-neutral-500'>
						{itemDescription}
					</p>
				)}
				<div className='mt-3 flex items-center justify-between'>
					<span className='text-base font-black tabular-nums text-amber-600 dark:text-amber-400'>
						${itemPrice.toFixed(2)}
					</span>
				</div>
			</div>
		</article>
	);
};

const MenuItemCardSkt = () => (
	<div className='flex animate-pulse flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white dark:border-neutral-700 dark:bg-neutral-800'>
		<div className='relative w-full' style={{ paddingTop: '56.25%' }}>
			<div className='absolute inset-0 bg-neutral-200 dark:bg-neutral-700' />
		</div>
		<div className='flex flex-1 flex-col gap-y-2 p-4'>
			<div className='h-4 w-3/4 rounded-md bg-neutral-200 dark:bg-neutral-700' />
			<div className='h-3 w-full rounded-md bg-neutral-200 dark:bg-neutral-700' />
			<div className='h-3 w-2/3 rounded-md bg-neutral-200 dark:bg-neutral-700' />
			<div className='mt-2 h-5 w-16 rounded-md bg-neutral-200 dark:bg-neutral-700' />
		</div>
	</div>
);

export { MenuItemCard, MenuItemCardSkt };
