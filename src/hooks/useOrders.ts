import { useQuery } from '@tanstack/react-query';

import { fetchOrdersMock } from '@utils';

export const useOrders = () =>
	useQuery({
		queryKey: ['orders'],
		queryFn: fetchOrdersMock,
	});
