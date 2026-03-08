import { LuMoon, LuSunMedium } from 'react-icons/lu';

import { ButtonIcon } from '@atoms';
import { useAppDispatch, useAppSelector } from '@hooks';
import { toggleThemeMode } from '@RTK/Slices';

export const ToggleThemeButton = () => {
	const { theme } = useAppSelector(({ ui }) => ui);
	const dispatch = useAppDispatch();

	const hdlTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';

		dispatch(toggleThemeMode(newTheme));
	};

	return (
		<ButtonIcon className='w-10 h-10' onClick={hdlTheme}>
			{theme === 'dark' ? (
				<LuSunMedium className='text-xl' />
			) : (
				<LuMoon className='text-xl stroke-white' />
			)}
		</ButtonIcon>
	);
};
