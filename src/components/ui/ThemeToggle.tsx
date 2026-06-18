import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
	const {theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			type="button"
			aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
			className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg cursor-pointer transition-all hover:scale-110 active:scale-95 duration-200">
				{theme === 'light' ? (
					<Moon
						size={20} />
				) : (
					<Sun
						size={20}
						className='text-yellow-500' />
				)}
		</button>
	)
}

export default ThemeToggle