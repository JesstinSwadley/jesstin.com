import { Workflow } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import OperationsCard from "../cards/OperationsCard";
import { useState } from "react";
import InlineCollapsible from "../ui/InlineCollapsible";


const OperationsPortfolio = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const opsProjects = [
		{
			title: "Services Infrastructure Modernization",
			description: "Architected a 19-step automated framework to standardize Post-Sales delivery and monitor Capacity in real-time.",
			impact: "Reduced TTV by 50% and delivery cycles from 30+ to 14 days.",
			tools: [
				"Salesforce", 
				"ClickUp", 
				"GoHighLevel", 
				"SOPs"
			],
			icon: <Workflow 
					size={24} />
		}
	];

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
						{opsProjects.map((project, index) => {
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
																📋 19-Step Execution & Automation Mapping
														</p>
														<ul 
															className="space-y-1 text-xs md:text-sm list-disc pl-4 text-slate-500 dark:text-slate-400">
																<li>Governance Strategy: Automated handoff pipelines triggered cleanly from CRM wins.</li>
																<li>Capacity Tracking: Real-time bandwidth tracking models using customized dashboard arrays.</li>
																<li>Validation Alert: Height-recalculations and CSS grid track metrics operating smoothly.</li>
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