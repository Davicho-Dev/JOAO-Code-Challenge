import { OrderStatusBadge } from '@molecules';

import type { IOrderCardProps } from './OrderCard.interfaces';

import styles from './OrderCard.module.sass';

const formatTime = (iso: string): string =>
	new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const calcTotal = (items: IOrderCardProps['order']['items']): string =>
	items
		.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
		.toFixed(2);

const OrderCard = ({ order, isSelected, onSelect }: IOrderCardProps) => {
	const { orderID, tableNumber, status, items, createdAt } = order;

	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<article
			className={isSelected ? styles['card--selected'] : styles['card']}
			onClick={() => onSelect(orderID)}
			role='button'
			tabIndex={0}
			aria-selected={isSelected}
			onKeyDown={e => e.key === 'Enter' && onSelect(orderID)}
		>
			<header className='flex items-start justify-between gap-x-2'>
				<div className='flex flex-col gap-y-1'>
					<span className={styles['meta-label']}>Table</span>
					<span className='text-4xl font-black leading-none text-neutral-800 dark:text-neutral-100'>
						{tableNumber}
					</span>
				</div>
				<OrderStatusBadge status={status} />
			</header>

			<div className='h-px w-full bg-neutral-100 dark:bg-neutral-700' />

			<footer className='flex items-center justify-between'>
				<div className='flex flex-col gap-y-0.5'>
					<span className={styles['meta-label']}>Items</span>
					<span className={styles['meta-value']}>{totalItems}</span>
				</div>
				<div className='flex flex-col gap-y-0.5 text-right'>
					<span className={styles['meta-label']}>Total</span>
					<span className={styles['meta-value']}>${calcTotal(items)}</span>
				</div>
				<div className='flex flex-col gap-y-0.5 text-right'>
					<span className={styles['meta-label']}>Time</span>
					<span className={styles['meta-value']}>{formatTime(createdAt)}</span>
				</div>
			</footer>
		</article>
	);
};

const skt = 'rounded-md bg-neutral-200 dark:bg-neutral-700';

const OrderCardSkt = () => (
	<div className='flex animate-pulse flex-col gap-y-3 rounded-2xl border-2 border-transparent bg-white p-4 dark:bg-neutral-800'>
		<div className='flex items-start justify-between gap-x-2'>
			<div className='flex flex-col gap-y-2'>
				<div className={`h-3 w-10 ${skt}`} />
				<div className={`h-10 w-10 ${skt}`} />
			</div>
			<div className={`h-6 w-20 rounded-full ${skt}`} />
		</div>
		<div className='h-px w-full bg-neutral-100 dark:bg-neutral-700' />
		<div className='flex items-center justify-between'>
			{[0, 1, 2].map(i => (
				<div key={i} className='flex flex-col gap-y-1.5'>
					<div className={`h-3 w-8 ${skt}`} />
					<div className={`h-4 w-12 ${skt}`} />
				</div>
			))}
		</div>
	</div>
);

export { OrderCard, OrderCardSkt };
