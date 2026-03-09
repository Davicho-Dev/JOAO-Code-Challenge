const STORAGE_KEY = 'restaurantID';

const getRestaurantID = (): number | null => {
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored ? Number(stored) : null;
};

const setRestaurantID = (id: number | null): void => {
	if (id === null) {
		localStorage.removeItem(STORAGE_KEY);
	} else {
		localStorage.setItem(STORAGE_KEY, id.toString());
	}
};

export { getRestaurantID, setRestaurantID };
