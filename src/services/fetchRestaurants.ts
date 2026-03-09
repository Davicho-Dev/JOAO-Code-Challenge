import type { IRestaurant } from '@interfaces';

import restaurantsMock from './__mocks__/restaurants.json';

export const fetchRestaurants = (): Promise<IRestaurant[]> =>
	new Promise(resolve =>
		setTimeout(() => resolve(restaurantsMock as IRestaurant[]), 800),
	);
