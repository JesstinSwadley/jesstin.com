import { ArrowRight } from 'lucide-react';
import React from 'react'

interface ImpactItem {
	metric: string;
	label: string;
	description: string;
	icon: React.ReactNode;
}

interface ImpactCardProps {
	result: ImpactItem;
}

const ImpactCard = ({ 
	result 
}: ImpactCardProps) => {
	return (
		<div
			className="group p-8 border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 cursor-pointer bg-white">
				<div
					className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
						{result.icon}
				</div>

				<div
					className="flex items-baseline gap-2 mb-1">
						<span
							className="text-4xl font-black tracking-tight text-slate-900">
								{result.metric}
						</span>
				</div>

				<p
					className="text-slate-900 font-bold mb-4">
						{result.label}
				</p>

				<p
					className="text-slate-500 text-sm leading-relaxed">
						{result.description}
				</p>

				<div
					className="mt-6 flex items-center gap-2 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						VIEW STORY
						<ArrowRight
							size={14} />
				</div>
		</div>
	)
}

export default ImpactCard