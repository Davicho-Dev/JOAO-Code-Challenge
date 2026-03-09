import { useState } from 'react';

import { OrdersGrid, OrderDetail } from '@organisms';
import { useOrders } from '@hooks';

import type { TOrderFilter } from '@organisms';

export const OrdersPage = () => {
	const { data: orders, isLoading, isError } = useOrders();

	const [selectedOrderID, setSelectedOrderID] = useState<string | null>(null);
	const [activeFilter, setActiveFilter] = useState<TOrderFilter>('all');

	const hdlSelectOrder = (orderID: string) =>
		setSelectedOrderID(prev => (prev === orderID ? null : orderID));

	const hdlFilterChange = (filter: TOrderFilter) => {
		setActiveFilter(filter);
		setSelectedOrderID(null);
	};

	if (isError || !orders)
		return (
			<main className='flex h-full flex-col gap-6 overflow-hidden p-6 lg:flex-row'>
				<div className='flex flex-col gap-y-4 overflow-y-auto transition-all duration-300 lg:flex-1'>
					<header className='flex flex-shrink-0 items-baseline gap-x-3'>
						<h1 className='text-2xl font-black text-neutral-800 dark:text-neutral-100'>
							Order
						</h1>
						{!isLoading && (
							<span className='text-sm text-neutral-400 dark:text-neutral-500'>
								order
							</span>
						)}
					</header>
					<OrdersGrid
						orders={[]}
						activeFilter={activeFilter}
						selectedOrderID={selectedOrderID}
						isLoading={isLoading}
						onSelectOrder={hdlSelectOrder}
						onFilterChange={hdlFilterChange}
					/>
				</div>
			</main>
		);

	const selectedOrder = orders.find(o => o.orderID === selectedOrderID) ?? null;

	const visibleCount =
		activeFilter === 'all'
			? orders.length
			: orders.filter(o => o.status === activeFilter).length;

	return (
		<main className='flex h-full flex-col gap-6 overflow-hidden p-6 lg:flex-row'>
			<div
				className={`flex flex-col gap-y-4 overflow-y-auto transition-all duration-300 ${
					selectedOrder ? 'lg:flex-1' : 'w-full'
				}`}
			>
				<header className='flex flex-shrink-0 items-baseline gap-x-3'>
					<h1 className='text-2xl font-black text-neutral-800 dark:text-neutral-100'>
						Orders
					</h1>
					{!isLoading && (
						<span className='text-sm text-neutral-400 dark:text-neutral-500'>
							{visibleCount} {visibleCount === 1 ? 'order' : 'orders'}
						</span>
					)}
				</header>

				<OrdersGrid
					orders={orders}
					activeFilter={activeFilter}
					selectedOrderID={selectedOrderID}
					isLoading={isLoading}
					onSelectOrder={hdlSelectOrder}
					onFilterChange={hdlFilterChange}
				/>
			</div>

			{selectedOrder && (
				<div className='w-full flex-shrink-0 lg:h-full lg:w-80 xl:w-96'>
					<OrderDetail
						order={selectedOrder}
						onClose={() => setSelectedOrderID(null)}
					/>
				</div>
			)}
		</main>
	);
};
