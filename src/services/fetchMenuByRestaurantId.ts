import type { IMenu, IRestaurant } from '@interfaces';

import menusMock from './__mocks__/menus.json';

export const fetchMenuByRestaurantId = ({
	restaurantID,
}: Pick<IRestaurant, 'restaurantID'>): Promise<IMenu[]> => {
	const items =
		(menusMock as Record<string, IMenu[]>)[String(restaurantID)] ?? [];
	return new Promise(resolve => setTimeout(() => resolve(items), 800));
};
