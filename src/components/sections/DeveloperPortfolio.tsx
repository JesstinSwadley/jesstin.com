import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import { useState } from "react";
import InlineCollapsible from "../ui/InlineCollapsible";
import { developerProjects } from "../../data/developerData";

const DeveloperPortfolio = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
					{developerProjects.map((project, index) => {
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
															{project.specsTitle}
													</p>

													<ul
														className='space-y-2 text-xs md:text-sm list-none pl-2 text-slate-500 dark:text-slate-400'>
															{project.specs.map((spec, specIndx) => {
																const [label, ...rest] = spec.split(':');
																const description = rest.join(':');

																return (
																	<li
																		key={specIndx}
																		className='leading-relaxed'>
																			<strong
																				className="text-slate-900 dark:text-slate-200">
																					{label}:
																			</strong>

																			{description}
																	</li>
																);
															})}
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