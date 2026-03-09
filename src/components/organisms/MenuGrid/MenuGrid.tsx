import { MenuItemCard } from '@molecules';

import type { IMenuGridProps } from './MenuGrid.interfaces';

export const MenuGrid = ({ items, restaurantName }: IMenuGridProps) => (
	<section className='flex flex-col gap-y-5'>
		<header className='flex flex-shrink-0 items-baseline gap-x-3'>
			<h1 className='text-2xl font-black text-neutral-800 dark:text-neutral-100'>
				{restaurantName}
			</h1>
			<span className='text-sm text-neutral-400 dark:text-neutral-500'>
				{items.length} {items.length === 1 ? 'item' : 'items'}
			</span>
		</header>

		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{items.map(item => (
				<MenuItemCard key={item.itemID} item={item} />
			))}
		</div>
	</section>
);
