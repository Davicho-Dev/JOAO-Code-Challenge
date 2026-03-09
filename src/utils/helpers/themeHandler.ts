const getTheme = () => {
	const htmlTheme = document.getElementsByTagName('html')[0].classList.value;
	const storageTheme = localStorage.getItem('theme');

	return { theme: `${storageTheme || htmlTheme}` };
};

const setTheme = ({ theme }: { theme: string }) => {
	const html = document.getElementsByTagName('html')[0];

	html.classList.remove('dark', 'light');
	html.classList.add(theme);
	localStorage.setItem('theme', theme);
};

export { getTheme, setTheme };
