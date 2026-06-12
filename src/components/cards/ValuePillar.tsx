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
					className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
						{icon}
				</div>

				<h3
					className="font-bold text-lg mb-2 text-slate-900">
						{title}
				</h3>

				<p
					className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
						{description}
				</p>
		</div>
	)
}

export default ValuePillar