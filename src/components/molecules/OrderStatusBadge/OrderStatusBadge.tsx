import { LuClock, LuChefHat, LuCircleCheck } from 'react-icons/lu';

import { Badge } from '@atoms';

import type { TBadgeVariant } from '@atoms';
import type { TOrderStatus } from '@interfaces';
import type { IOrderStatusBadgeProps } from './OrderStatusBadge.interfaces';
import type { ReactNode } from 'react';

const STATUS_MAP: Record<
	TOrderStatus,
	{ variant: TBadgeVariant; label: string; icon: ReactNode }
> = {
	pending: {
		variant: 'pending',
		label: 'Pending',
		icon: <LuClock />,
	},
	preparing: {
		variant: 'preparing',
		label: 'Preparing',
		icon: <LuChefHat />,
	},
	served: {
		variant: 'served',
		label: 'Served',
		icon: <LuCircleCheck />,
	},
};

export const OrderStatusBadge = ({ status }: IOrderStatusBadgeProps) => {
	const { variant, label, icon } = STATUS_MAP[status];

	return <Badge variant={variant} label={label} icon={icon} />;
};
