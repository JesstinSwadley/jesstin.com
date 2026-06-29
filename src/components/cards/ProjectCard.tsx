import  React from 'react';
import { ChevronDown, ChevronUp, Code2, ExternalLink, GitFork } from "lucide-react";
import Badge from "../ui/Badge";

interface ProjectItem {
	title: string;
	description: string;
	tags: string[];
	link: string;
}

interface ProjectCardProps {
	project: ProjectItem;
	isExpanded: boolean;
	onToggle: () => void;
	children?: React.ReactNode
}

const ProjectCard = ({
	project,
	isExpanded,
	onToggle,
	children
}: ProjectCardProps) => {
	return (
		<div
			className="group p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-100 dark:bg-slate-900 transition-all hover:border-slate-300 dark:hover:border-slate-300">
				<div
					className="flex justify-between items-start mb-6">
						<div 
							className="p-3 bg-slate-900 dark:bg-slate-800 text-slate-100 rounded-xl transition-colors duration-300">
								<Code2 
									size={24} />
						</div>

						<a 
							href={project.link}
							className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
								<GitFork 
									size={20} />
						</a>
				</div>

				<h3
					className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 transition-colors duration-300">
						{project.title}
				</h3>

				<p
					className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors duration-300">
						{project.description}
				</p>

				<div
					className="flex flex-wrap gap-2 mb-8">
						{project.tags.map((tag) => (
							<Badge
								key={tag}
								variant="slate">
									{tag}
							</Badge>
						))}
				</div>

				{/* <div
					className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
						<ExternalLink
							size={14} />
				</div> */}

				<div>
					<div
						className='flex items-center justify-between pt-2'>
							<button
								onClick={onToggle}
								type='button'
								className='flex items-center gap-1 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-colors'>
									{isExpanded ? (
										<>
											Hide Tech Specs 

											<ChevronUp
												size={14} />
										</>
									) : (
										<>
											View Tech Specs

											<ChevronDown
												size={14} />
										</>
									)}
							</button>

							<a 
								href={project.link}
								target='_blank'
								rel='noreferrer'
								className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'>
									<ExternalLink
										size={14} />
							</a>
					</div>

					{children}
				</div>
		</div>
	)
}

export default ProjectCard