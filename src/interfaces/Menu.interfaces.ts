interface IMenu {
	readonly imageUrl: string;
	readonly itemDescription: string;
	readonly itemID: number;
	readonly itemName: string;
	readonly itemPrice: number;
	readonly restaurantID: number;
	readonly restaurantName: string;
}

export type { IMenu };
