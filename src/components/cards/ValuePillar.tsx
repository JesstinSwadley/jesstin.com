import React from 'react'

interface ValuePillarProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const ValuePillar = ({
	title,
	description,
	icon
}: ValuePillarProps) => {
	return (
		<div
			className="text-center group">
				<div
					className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-blue-100 dark:group-hover:text-blue-100">
						{icon}
				</div>

				<h3
					className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100 transition-colors duration-300">
						{title}
				</h3>

				<p
					className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed transition-colors duration-300">
						{description}
				</p>
		</div>
	)
}

export default ValuePillar