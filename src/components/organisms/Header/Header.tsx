import type { ChangeEvent } from 'react';

import { FormSelect, FormSelectSkt } from '@atoms';
import { ToggleThemeButton } from '@molecules';
import { useAppDispatch, useAppSelector, useFetchRestaurants } from '@hooks';
import { setSelectedRestaurantID } from '@RTK/Slices';

import styles from './Header.module.sass';

export const Header = () => {
	const { data, isLoading } = useFetchRestaurants();
	const dispatch = useAppDispatch();
	const restaurantID = useAppSelector(({ ui }) => ui.restaurantID);

	const hdlRestaurantChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		dispatch(setSelectedRestaurantID(value ? Number(value) : null));
	};

	return (
		<header
			className={`flex h-fit w-full items-center bg-neutral-900 px-6 py-6 ${styles['header']}`}
		>
			<form className='w-1/3' onSubmit={e => e.preventDefault()}>
				{isLoading ? (
					<FormSelectSkt />
				) : (
					<FormSelect
						label='Restaurant'
						placeholder='Select a restaurant'
						value={restaurantID?.toString() ?? ''}
						onChange={hdlRestaurantChange}
						options={
							data
								? data?.map(({ restaurantID: id, restaurantName }) => ({
										value: id.toString(),
										label: restaurantName,
									}))
								: []
						}
					/>
				)}
			</form>
			<figure className='grid w-1/3 place-items-center'>
				<img src='/logo.png' alt='JOAO Logo' />
			</figure>
			<div className='ml-auto w-fit'>
				<ToggleThemeButton />
			</div>
		</header>
	);
};
