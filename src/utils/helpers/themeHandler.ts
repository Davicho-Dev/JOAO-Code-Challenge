const getTheme = () => {
	const theme = localStorage.getItem('theme') || 'light';

	const html = document.documentElement;
	html.classList.remove('dark', 'light');
	html.classList.add(theme);

	return { theme };
};

const setTheme = ({ theme }: { theme: string }) => {
	const html = document.documentElement;

	html.classList.remove('dark', 'light');
	html.classList.add(theme);
	localStorage.setItem('theme', theme);
};

export { getTheme, setTheme };
