import type { IOrder } from '@interfaces';

const ORDERS_MOCK: IOrder[] = [
	{
		orderID: 'ORD-001',
		tableNumber: 1,
		status: 'pending',
		createdAt: '2024-03-09T10:05:00Z',
		items: [
			{ itemID: 1, itemName: 'Margherita Pizza', quantity: 1, unitPrice: 12.5 },
			{ itemID: 2, itemName: 'Caesar Salad', quantity: 2, unitPrice: 8.0 },
		],
	},
	{
		orderID: 'ORD-002',
		tableNumber: 3,
		status: 'preparing',
		createdAt: '2024-03-09T10:12:00Z',
		items: [
			{ itemID: 3, itemName: 'Grilled Salmon', quantity: 1, unitPrice: 18.9 },
			{ itemID: 4, itemName: 'Sparkling Water', quantity: 2, unitPrice: 2.5 },
			{ itemID: 5, itemName: 'Tiramisu', quantity: 1, unitPrice: 6.0 },
		],
	},
	{
		orderID: 'ORD-003',
		tableNumber: 5,
		status: 'served',
		createdAt: '2024-03-09T09:50:00Z',
		items: [
			{ itemID: 6, itemName: 'Beef Burger', quantity: 2, unitPrice: 14.0 },
			{ itemID: 7, itemName: 'French Fries', quantity: 2, unitPrice: 4.5 },
			{ itemID: 8, itemName: 'Lemonade', quantity: 2, unitPrice: 3.0 },
		],
	},
	{
		orderID: 'ORD-004',
		tableNumber: 2,
		status: 'pending',
		createdAt: '2024-03-09T10:18:00Z',
		items: [
			{ itemID: 9, itemName: 'Pasta Carbonara', quantity: 1, unitPrice: 13.5 },
		],
	},
	{
		orderID: 'ORD-005',
		tableNumber: 7,
		status: 'preparing',
		createdAt: '2024-03-09T10:20:00Z',
		items: [
			{ itemID: 10, itemName: 'Club Sandwich', quantity: 3, unitPrice: 10.0 },
			{ itemID: 11, itemName: 'Orange Juice', quantity: 3, unitPrice: 3.5 },
		],
	},
	{
		orderID: 'ORD-006',
		tableNumber: 4,
		status: 'served',
		createdAt: '2024-03-09T09:40:00Z',
		items: [
			{
				itemID: 12,
				itemName: 'Mushroom Risotto',
				quantity: 2,
				unitPrice: 15.0,
			},
			{ itemID: 13, itemName: 'Red Wine', quantity: 1, unitPrice: 9.0 },
		],
	},
];

const fetchOrdersMock = (): Promise<IOrder[]> =>
	new Promise(resolve => setTimeout(() => resolve(ORDERS_MOCK), 800));

export { ORDERS_MOCK, fetchOrdersMock };
