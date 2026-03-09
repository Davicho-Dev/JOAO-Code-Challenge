import { Outlet } from 'react-router';

import { Header } from '@organisms';

export const CommonLayout = () => {
	return (
		<div className='w-full h-screen'>
			<Header />
			<Outlet />
		</div>
	);
};
