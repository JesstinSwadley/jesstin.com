import { Code2, ExternalLink, GitFork } from "lucide-react";
import Badge from "../ui/Badge";

interface ProjectItem {
	title: string;
	description: string;
	tags: string[];
	link: string;
}

interface ProjectCardProps {
	project: ProjectItem
}

const ProjectCard = ({
	project
}: ProjectCardProps) => {
	return (
		<div
			className="group p-8 border border-slate-200 rounded-2xl bg-white transition-all hover:border-slate-300">
				<div
					className="flex justify-between items-start mb-6">
						<div 
							className="p-3 bg-slate-900 text-white rounded-xl">
								<Code2 
									size={24} />
						</div>

						<a 
							href={project.link}
							className="text-slate-400 hover:text-slate-900 transition-colors">
								<GitFork 
									size={20} />
						</a>
				</div>

				<h3
					className="text-2xl font-bold mb-3 text-slate-900">
						{project.title}
				</h3>

				<p
					className="text-slate-600 text-sm leading-relaxed mb-6">
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

				<div
					className="flex items-center gap-2 text-sm font-bold text-blue-600">
						<ExternalLink
							size={14} />
				</div>
		</div>
	)
}

export default ProjectCard