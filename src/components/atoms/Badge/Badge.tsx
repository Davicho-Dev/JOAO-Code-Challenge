import type { IBadgeProps } from './Badge.interfaces';

import styles from './Badge.module.sass';

export const Badge = ({ variant, label, icon }: IBadgeProps) => (
	<span className={styles[`badge--${variant}`]}>
		{icon && <span className='text-sm leading-none'>{icon}</span>}
		{label}
	</span>
);
