import { apiPublic } from '@services';

import type { IRestaurant } from '@interfaces';

export const fetchRestaurants = async () => {
	const { data } = await apiPublic.get<IRestaurant[]>('/restaurant');

	return data;
};
