import type { IOrder } from '@interfaces';

interface IOrderDetailProps {
	readonly order: IOrder;
	readonly onClose: () => void;
}

export type { IOrderDetailProps };
