import { apiPublic } from './config/api';

import type { IMenu, IRestaurant } from '@interfaces';

export const fetchMenuByRestaurantId = async ({
	restaurantID,
}: Pick<IRestaurant, 'restaurantID'>) => {
	const { data } = await apiPublic.get<IMenu[]>(
		`/restaurant/${restaurantID}/menu`,
	);

	return data;
};
