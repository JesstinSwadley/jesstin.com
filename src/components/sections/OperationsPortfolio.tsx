import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import OperationsCard from "../cards/OperationsCard";
import { useState } from "react";
import InlineCollapsible from "../ui/InlineCollapsible";
import { operationsProject } from "../../data/operationsData";


const OperationsPortfolio = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const toggleOpsProject = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<SectionContainer
			className="bg-slate-100 dark:bg-slate-900/40 rounded-3xl">
				<SectionHeader 
					title="Operations Portfolio"
					description="Building the technical infrastructure and governance models that allow professional services teams to scale."/>

				<div 
					className="grid grid-cols-1 gap-8">
						{operationsProject.map((project, index) => {
							const isExpanded = expandedIndex === index;

							return (
								<OperationsCard
									key={index}
									project={project}
									isExpanded={isExpanded}
									onToggle={() => toggleOpsProject(index)}>
										<InlineCollapsible
											isOpen={isExpanded}>
												<div 
													className="space-y-3 font-sans">
														<p 
															className="font-bold text-slate-900 dark:text-slate-100">
																{project.detailsTitle}
														</p>
														<ul 
															className="space-y-2 text-xs md:text-sm list-none pl-2 text-slate-600 dark:text-slate-400">
																{project.details.map((detail, dtlIndx) => {
																	const [label, ...rest] = detail.split(':');
																	const description = rest.join(':');

																	return (
																		<li
																			key={dtlIndx}
																			className='leading-relaxed'>
																				<strong
																					className="text-slate-900 dark:text-slate-100">
																						{label}:
																				</strong>

																				{description}
																		</li>
																	);
																})}
														</ul>
												</div>
										</InlineCollapsible>
									</OperationsCard>
							)
						})}
				</div>
		</SectionContainer>
	)
}

export default OperationsPortfolio