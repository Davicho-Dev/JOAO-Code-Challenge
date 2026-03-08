const getTheme = () => {
	const htmlTheme = document.getElementsByTagName('html')[0].dataset.theme;
	const storageTheme = localStorage.getItem('theme');

	return { theme: `${storageTheme || htmlTheme}` };
};

const setTheme = ({ theme }: { theme: string }) => {
	const html = document.getElementsByTagName('html')[0];

	html.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
};

export { getTheme, setTheme };
