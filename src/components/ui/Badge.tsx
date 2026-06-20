import React from "react"

interface BadgeProps {
	children: React.ReactNode;
	variant?: 'slate' | 'blue';
	className?: string;
}

const Badge = ({
	children,
	variant = 'slate',
	className = ''
}: BadgeProps) => {
	const baseStyles = "px-3 py-1 text-xs font-bold rounded-md uppercase tracking-wider transition-colors duration-300";

	const variants = {
		slate: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
		blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
	};

	return (
		<span
			className={`${baseStyles} ${variants[variant]} ${className}`}>
				{children}
		</span>
	)
}

export default Badge