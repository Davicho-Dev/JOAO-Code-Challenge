import { ToggleThemeButton } from '@molecules';

import styles from './Header.module.sass';

export const Header = () => {
	return (
		<header
			className={`w-full h-20 px-6 flex items-center justify-between ${styles['header']}`}
		>
			<h1>JOAO</h1>
			<ToggleThemeButton />
		</header>
	);
};
