import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import { useState } from "react";
import InlineCollapsible from "../ui/InlineCollapsible";

const DeveloperPortfolio = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

	const toggleProject = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	}

	return (
		<SectionContainer>
			<SectionHeader
				title="Developer Portfolio"
				description="Engineering scalable tools to bridge the gap between technical execution and operational efficiency."
				align="left"/>


			<div
				className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => {
						const isExpanded = expandedIndex === index;

						return (
							<ProjectCard
								key={index}
								project={project}
								isExpanded={isExpanded}
								onToggle={() => toggleProject(index)}>
									<InlineCollapsible
										isOpen={isExpanded}>
											<div
												className='space-y-3 font-sans'>
													<p
														className='font-bold text-slate-900 dark:text-slate-100'>
														Architecture & API Endpoint Logs
													</p>

													<ul
														className='space-y-1.5 text-xs md:text-sm list-disc pl-4 text-slate-500 dark:text-slate-400'>
															<li>Backend Matrix: Stateless microservices written completely in pure Go.</li>
															<li>Delivery Framework: Bundled using clean multi-stage Docker environment parameters.</li>
															<li>Database Wire-up: Mock placeholder configurations validating active component height.</li>
													</ul>
											</div>
									</InlineCollapsible>
							</ProjectCard>
						);
					})}
			</div>
		</SectionContainer>
	)
}

export default DeveloperPortfolio;