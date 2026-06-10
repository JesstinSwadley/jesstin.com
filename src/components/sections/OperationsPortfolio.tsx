import { Workflow } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";


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
			className="bg-slate-50 rounded-3xl">
				<SectionHeader 
					title="Operations Portfolio"
					description="Building the technical infrastructure and governance models that allow professional services teams to scale."/>

				<div 
					className="grid grid-cols-1 gap-8">
						{opsProjects.map((project, index) => (
							<div 
								key={index} 
								className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm">
									<div 
										className="flex items-center gap-4 mb-6">
											<div className="p-3 bg-blue-600 text-white rounded-xl">
												{project.icon}
											</div>
											
											<h3 
												className="text-2xl font-bold">
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
											className="bg-slate-50 p-4 rounded-xl">
												<p 
													className="text-xs font-bold text-slate-400 uppercase mb-1">
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
						))}
				</div>
		</SectionContainer>
	)
}

export default OperationsPortfolio