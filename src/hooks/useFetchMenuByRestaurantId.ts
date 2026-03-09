import { useQuery } from '@tanstack/react-query';

import { fetchMenuByRestaurantId } from '@services';

import type { IRestaurant } from '@interfaces';

export const useFetchMenuByRestaurantId = ({
	restaurantID,
}: Pick<IRestaurant, 'restaurantID'>) => {
	return useQuery({
		queryFn: async () => await fetchMenuByRestaurantId({ restaurantID }),
		queryKey: ['menu', restaurantID],
	});
};
