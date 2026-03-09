import { ButtonOutlined } from '@atoms';
import { OrderCard, OrderCardSkt } from '@molecules';
import { EmptyTemplate } from '@templates';

import type { TOrderStatus } from '@interfaces';
import type { IOrdersGridProps, TOrderFilter } from './OrdersGrid.interfaces';

import styles from './OrdersGrid.module.sass';

const FILTERS: { value: TOrderFilter; label: string }[] = [
	{ value: 'all', label: 'All' },
	{ value: 'pending', label: 'Pending' },
	{ value: 'preparing', label: 'Preparing' },
	{ value: 'served', label: 'Served' },
];

const SKELETON_COUNT = 6;

export const OrdersGrid = ({
	orders,
	activeFilter,
	selectedOrderID,
	isLoading = false,
	onSelectOrder,
	onFilterChange,
}: IOrdersGridProps) => {
	const filtered =
		activeFilter === 'all'
			? orders
			: orders.filter(o => o.status === (activeFilter as TOrderStatus));

	const countFor = (filter: TOrderFilter) =>
		filter === 'all'
			? orders.length
			: orders.filter(o => o.status === filter).length;

	return (
		<section className='flex flex-col gap-y-5'>
			<nav
				className='flex flex-wrap items-center gap-x-2 gap-y-2'
				aria-label='Filter orders'
			>
				{FILTERS.map(({ value, label }) => (
					<ButtonOutlined
						key={value}
						disabled={isLoading}
						className={
							activeFilter === value
								? styles['filter-btn--active']
								: styles['filter-btn']
						}
						onClick={() => onFilterChange(value)}
					>
						{label}
						<span className='ml-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs font-bold'>
							{isLoading ? '·' : countFor(value)}
						</span>
					</ButtonOutlined>
				))}
			</nav>

			{isLoading ? (
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{Array.from({ length: SKELETON_COUNT }).map((_, i) => (
						<OrderCardSkt key={i} />
					))}
				</div>
			) : filtered.length === 0 ? (
				<EmptyTemplate
					title='No orders found'
					description={`There are no ${activeFilter === 'all' ? '' : activeFilter + ' '}orders at the moment.`}
				/>
			) : (
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{filtered.map(order => (
						<OrderCard
							key={order.orderID}
							order={order}
							isSelected={order.orderID === selectedOrderID}
							onSelect={onSelectOrder}
						/>
					))}
				</div>
			)}
		</section>
	);
};
