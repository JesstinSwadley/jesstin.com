import type React from "react";
import Badge from "../ui/Badge";
import { ChevronDown, ChevronUp } from "lucide-react";

interface OperationsItem {
	title: string;
	description: string;
	impact: string;
	tools: string[];
	icon: React.ReactNode;
}

interface OperationsCardProps {
	project: OperationsItem;
	isExpanded: boolean;
	onToggle: () => void;
	children?: React.ReactNode;
}

const OperationsCard = ({
	project,
	isExpanded,
	onToggle,
	children
}: OperationsCardProps) => {
	return (
		<div 
			className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-sm transition-colors duration-300">
				<div 
					className="flex items-center gap-4 mb-6">
						<div 
							className="p-3 bg-blue-600 text-slate-100 rounded-xl">
								{project.icon}
						</div>
						
						<h3 
							className="text-2xl font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300">
								{project.title}
						</h3>
				</div>
			
				<p 
					className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors duration-300">
						{project.description}
				</p>

			<div 
				className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div 
						className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
							<p 
								className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-1 tracking-wider transition-colors duration-300">
									Primary Impact
							</p>
							<p 
								className="text-slate-900 dark:text-slate-100 font-semibold transition-colors duration-300">
									{project.impact}
							</p>
					</div>
				
				<div 
					className="flex flex-wrap gap-2 items-center">
						{project.tools.map(tool => (
							<Badge
								key={tool}
								variant="blue">
									{tool}
							</Badge>
						))}
				</div>

				<div
					className="pt-2">
						<button
							onClick={onToggle}
							type="button"
							className='flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-colors'>
								{isExpanded ? (
									<>
										Hide Framework Details 
										
										<ChevronUp
											size={14} />
									</>
								) : (
									<>
										View Framework Details

										<ChevronDown
											size={14} />
									</>
								)}
						</button>
				</div>

				{children}
			</div>
		</div>
	)
}

export default OperationsCard