import { LuUtensilsCrossed } from 'react-icons/lu';

import { ErrorTemplate, EmptyTemplate } from '@templates';
import { MenuGrid } from '@organisms';
import { MenuItemCardSkt } from '@molecules';
import { useAppSelector, useFetchMenuByRestaurantId } from '@hooks';

const SKELETON_COUNT = 8;

export const HomePage = () => {
	const restaurantID = useAppSelector(({ ui }) => ui.restaurantID);

	const { data, isLoading, isError, error } = useFetchMenuByRestaurantId(
		{ restaurantID: restaurantID ?? 0 },
		{ enabled: restaurantID !== null },
	);

	if (!restaurantID) {
		return (
			<div className='flex h-full flex-col items-center justify-center gap-y-3 text-center'>
				<LuUtensilsCrossed className='text-5xl text-neutral-300 dark:text-neutral-600' />
				<p className='text-base font-semibold text-neutral-500 dark:text-neutral-400'>
					Select a restaurant to view its menu
				</p>
			</div>
		);
	}

	if (isLoading) {
		return (
			<main className='h-full overflow-y-auto p-6'>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{Array.from({ length: SKELETON_COUNT }).map((_, i) => (
						<MenuItemCardSkt key={i} />
					))}
				</div>
			</main>
		);
	}

	if (isError || !data)
		return <ErrorTemplate message={error?.message ?? 'Could not load menu.'} />;

	if (data.length === 0)
		return (
			<EmptyTemplate
				title='No items available'
				description='This restaurant has no menu items at the moment.'
			/>
		);

	const restaurantName = data[0]?.restaurantName ?? 'Menu';

	return (
		<main className='h-full overflow-y-auto p-6'>
			<MenuGrid items={data} restaurantName={restaurantName} />
		</main>
	);
};
