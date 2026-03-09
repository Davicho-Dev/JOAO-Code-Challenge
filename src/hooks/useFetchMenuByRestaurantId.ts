import { useQuery } from '@tanstack/react-query';

import { fetchMenuByRestaurantId } from '@services';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { IMenu, IRestaurant } from '@interfaces';

type TOptions = Pick<UseQueryOptions<IMenu[]>, 'enabled'>;

export const useFetchMenuByRestaurantId = (
	{ restaurantID }: Pick<IRestaurant, 'restaurantID'>,
	options?: TOptions,
) =>
	useQuery({
		queryFn: () => fetchMenuByRestaurantId({ restaurantID }),
		queryKey: ['menu', restaurantID],
		...options,
	});
