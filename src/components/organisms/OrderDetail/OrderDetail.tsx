import { LuX } from 'react-icons/lu';

import { OrderStatusBadge } from '@molecules';

import type { IOrderDetailProps } from './OrderDetail.interfaces';

import styles from './OrderDetail.module.sass';

const formatDate = (iso: string): string =>
	new Date(iso).toLocaleString([], {
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});

export const OrderDetail = ({ order, onClose }: IOrderDetailProps) => {
	const { orderID, tableNumber, status, items, createdAt } = order;

	const total = items
		.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
		.toFixed(2);

	return (
		<aside className={styles['panel']}>
			<header className='flex items-start justify-between gap-x-4'>
				<div className='flex flex-col gap-y-1'>
					<span className='font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500'>
						{orderID}
					</span>
					<span className='text-3xl font-black leading-tight text-neutral-800 dark:text-neutral-100'>
						Table {tableNumber}
					</span>
					<div className='mt-1'>
						<OrderStatusBadge status={status} />
					</div>
				</div>
				<button
					className='flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition-colors duration-150 hover:text-neutral-700 dark:hover:text-neutral-200'
					onClick={onClose}
					aria-label='Close detail panel'
				>
					<LuX className='text-lg' />
				</button>
			</header>

			<div className={styles['divider']} />

			<div className='flex flex-1 flex-col gap-y-0 overflow-y-auto'>
				<p className='mb-3 text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500'>
					{formatDate(createdAt)} · {items.length} item
					{items.length !== 1 ? 's' : ''}
				</p>

				{items.map(item => (
					<div key={item.itemID} className='flex items-center gap-x-3 py-2'>
						<span className='flex-1 text-sm font-medium text-neutral-700 dark:text-neutral-200'>
							{item.itemName}
						</span>
						<span className='rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-500'>
							×{item.quantity}
						</span>
						<span className='text-sm font-semibold tabular-nums text-neutral-700 dark:text-neutral-200'>
							${(item.quantity * item.unitPrice).toFixed(2)}
						</span>
					</div>
				))}
			</div>

			<div className={styles['divider']} />

			<div className='flex items-center justify-between pt-3'>
				<span className='text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400'>
					Total
				</span>
				<span className='text-2xl font-black tabular-nums text-amber-600 dark:text-amber-400'>
					${total}
				</span>
			</div>
		</aside>
	);
};
