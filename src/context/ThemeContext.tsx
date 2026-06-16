import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({
	children
}: { children: React.ReactNode}) => {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === 'undefined') {
			return 'light'
		};

		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme) {
			return savedTheme
		};

		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return systemPrefersDark ? 'dark' : 'light';
	});

	useEffect(() => {
		const root = document.documentElement;

		if (theme === 'dark') {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => (
			prevTheme === 'light' ? 'dark' : 'light'
		));
	}, []);

	const contextValue = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

	return (
		<ThemeContext
			value={contextValue}>
				{children}
		</ThemeContext>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be executed within a valid ThemeProvider boundary context');
	}

	return context;
}

export default ThemeProvider