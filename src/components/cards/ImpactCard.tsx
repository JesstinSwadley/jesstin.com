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
			className="group p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50/50 dark:hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer bg-slate-100 dark:bg-slate-900">
				<div
					className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
						{result.icon}
				</div>

				<div
					className="flex items-baseline gap-2 mb-1">
						<span
							className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 transition-colors duration-300">
								{result.metric}
						</span>
				</div>

				<p
					className="text-slate-900 dark:text-slate-100 font-bold mb-4 transition-colors duration-300">
						{result.label}
				</p>

				<p
					className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
						{result.description}
				</p>

				<div
					className="mt-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						VIEW STORY
						<ArrowRight
							size={14} />
				</div>
		</div>
	)
}

export default ImpactCard