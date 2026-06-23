import { Workflow } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import OperationsCard from "../cards/OperationsCard";


const OperationsPortfolio = () => {
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

	return (
		<SectionContainer
			className="bg-slate-100 dark:bg-slate-900/40 rounded-3xl">
				<SectionHeader 
					title="Operations Portfolio"
					description="Building the technical infrastructure and governance models that allow professional services teams to scale."/>

				<div 
					className="grid grid-cols-1 gap-8">
						{opsProjects.map((project, index) => (
							<OperationsCard
								key={index}
								project={project} />
						))}
				</div>
		</SectionContainer>
	)
}

export default OperationsPortfolio