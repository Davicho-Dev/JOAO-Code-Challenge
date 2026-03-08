import { Outlet } from 'react-router';

import { Header } from '@organisms';

export const CommonLayout = () => {
	return (
		<div className='w-full h-screen grid grid-rows-[5rem,1fr] relative'>
			<Header />
			<Outlet />
		</div>
	);
};
