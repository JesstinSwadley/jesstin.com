import { Code2, ExternalLink, GitFork } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";

const DeveloperPortfolio = () => {
	const projects = [
		{
			title: "Job Trakcer",
			description: "A production-ready stateless REST API to centralize job tracking with a focus on speed, security, and data integrity.",
			tags: [
				"Go", 
				"React 19", 
				"Docker", 
				"AWS"
			],
			link: "https://github.com/JesstinSwadley/job-tracker"
		}
	]

	return (
		<SectionContainer>
			<SectionHeader
				title="Developer Portfolio"
				description="Engineering scalable tools to bridge the gap between technical execution and operational efficiency."
				align="left"/>

				<div 
					className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<div 
								key={index} 
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
									className="text-2xl font-bold mb-3">
										{project.title}
								</h3>

								<p 
									className="text-slate-600 text-sm leading-relaxed mb-6">
										{project.description}
								</p>

								{/* Static Tech Tags (Future Filter Targets) */}
								<div 
									className="flex flex-wrap gap-2 mb-8">
										{project.tags.map((tag) => (
											<span 
												key={tag} 
												className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md uppercase tracking-wider">
													{tag}
											</span>
										))}
								</div>

								{/* Placeholder for Phase 3 "Deep Dive" */}
								<div 
									className="flex items-center gap-2 text-sm font-bold text-blue-600">
										PROJECT DETAILS COMING SOON 
										
										<ExternalLink 
											size={14} />
								</div>
							</div>
						))}
				</div>
		</SectionContainer>
	)
}

export default DeveloperPortfolio;