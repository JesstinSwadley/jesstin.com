import type React from "react";
import Badge from "../ui/Badge";

interface OperationsItem {
	title: string;
	description: string;
	impact: string;
	tools: string[];
	icon: React.ReactNode;
}

interface OperationsCardProps {
	project: OperationsItem;
}

const OperationsCard = ({
	project
}: OperationsCardProps) => {
	return (
		<div 
			className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm">
				<div 
					className="flex items-center gap-4 mb-6">
						<div 
							className="p-3 bg-blue-600 text-white rounded-xl">
								{project.icon}
						</div>
						
						<h3 
							className="text-2xl font-bold text-slate-900">
								{project.title}
						</h3>
				</div>
			
				<p 
					className="text-slate-600 mb-6 leading-relaxed">
						{project.description}
				</p>

			<div 
				className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div 
						className="bg-slate-50 p-4 rounded-xl border border-slate-100">
							<p 
								className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">
									Primary Impact
							</p>
							<p 
								className="text-slate-900 font-semibold">
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
			</div>
		</div>
	)
}

export default OperationsCard