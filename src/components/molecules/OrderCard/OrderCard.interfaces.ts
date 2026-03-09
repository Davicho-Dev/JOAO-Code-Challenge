import type { IOrder } from '@interfaces';

interface IOrderCardProps {
	readonly order: IOrder;
	readonly isSelected: boolean;
	readonly onSelect: (orderID: string) => void;
}

export type { IOrderCardProps };
