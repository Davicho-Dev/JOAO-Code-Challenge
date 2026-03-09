import { NavLink, Outlet } from 'react-router';

import { Header } from '@organisms';
import { NAV } from '@utils';

export const CommonLayout = () => (
	<div className='flex h-screen w-full flex-col bg-neutral-50 dark:bg-neutral-900'>
		<Header />
		<nav className='flex flex-shrink-0 gap-x-1 border-b border-neutral-200 px-6 pb-0 pt-3 dark:border-neutral-800'>
			{NAV.map(({ to, label, end }) => (
				<NavLink
					key={to}
					to={to}
					end={end}
					className={({ isActive }) =>
						[
							'rounded-t-lg px-4 py-2 text-sm font-medium transition-colors duration-150',
							isActive
								? '-mb-px border-b-2 border-amber-500 text-amber-600 dark:text-amber-400'
								: 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
						].join(' ')
					}
				>
					{label}
				</NavLink>
			))}
		</nav>
		<div className='flex-1 overflow-hidden'>
			<Outlet />
		</div>
	</div>
);
