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
		slate: "bg-slate-100 text-slate-600",
		blue: "bg-blue-100 text-blue-600"
	};

	return (
		<span
			className={`${baseStyles} ${variants[variant]} ${className}`}>
				{children}
		</span>
	)
}

export default Badge