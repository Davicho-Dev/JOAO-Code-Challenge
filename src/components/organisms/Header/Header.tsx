import { FormSelect, FormSelectSkt } from '@atoms';
import { ToggleThemeButton } from '@molecules';
import { useFetchRestaurants } from '@hooks';

import styles from './Header.module.sass';

export const Header = () => {
	const { data, isLoading } = useFetchRestaurants();

	return (
		<header
			className={`w-full h-fit py-6 px-6 flex items-center bg-neutral-900 ${styles['header']}`}
		>
			<form className='w-1/3'>
				{isLoading ? (
					<FormSelectSkt />
				) : (
					<FormSelect
						label='Restaurant'
						placeholder='Selecciona un restaurant'
						options={
							data
								? data?.map(({ restaurantID, restaurantName }) => ({
										value: restaurantID.toString(),
										label: restaurantName,
									}))
								: []
						}
					/>
				)}
			</form>
			<figure className='w-1/3 grid place-items-center'>
				<img src='/logo.png' alt='JOAO Logo' />
			</figure>
			<div className='w-fit ml-auto'>
				<ToggleThemeButton />
			</div>
		</header>
	);
};
