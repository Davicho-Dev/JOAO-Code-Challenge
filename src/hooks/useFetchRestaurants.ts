import { useQuery } from '@tanstack/react-query';

import { fetchRestaurants } from '@services';

export const useFetchRestaurants = () => {
	return useQuery({
		queryFn: async () => await fetchRestaurants(),
		queryKey: ['restaurants'],
	});
};
