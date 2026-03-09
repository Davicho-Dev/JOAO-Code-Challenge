import type { IOrder, TOrderStatus } from '@interfaces';

type TOrderFilter = TOrderStatus | 'all';

interface IOrdersGridProps {
	readonly orders: IOrder[];
	readonly activeFilter: TOrderFilter;
	readonly selectedOrderID: string | null;
	readonly isLoading?: boolean;
	readonly onSelectOrder: (orderID: string) => void;
	readonly onFilterChange: (filter: TOrderFilter) => void;
}

export type { IOrdersGridProps, TOrderFilter };
