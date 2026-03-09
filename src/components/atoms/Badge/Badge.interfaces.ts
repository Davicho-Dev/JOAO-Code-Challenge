import type { ReactNode } from 'react';

type TBadgeVariant = 'pending' | 'preparing' | 'served' | 'neutral';

interface IBadgeProps {
	readonly variant: TBadgeVariant;
	readonly label: string;
	readonly icon?: ReactNode;
}

export type { IBadgeProps, TBadgeVariant };
