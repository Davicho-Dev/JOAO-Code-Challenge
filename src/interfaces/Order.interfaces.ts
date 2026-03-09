type TOrderStatus = 'pending' | 'preparing' | 'served';

interface IOrderItem {
	readonly itemID: number;
	readonly itemName: string;
	readonly quantity: number;
	readonly unitPrice: number;
}

interface IOrder {
	readonly orderID: string;
	readonly tableNumber: number;
	readonly status: TOrderStatus;
	readonly items: IOrderItem[];
	readonly createdAt: string;
}

export type { IOrder, IOrderItem, TOrderStatus };
