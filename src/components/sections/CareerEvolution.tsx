import { Briefcase, Rocket, ShieldCheck, Zap } from "lucide-react"
import SectionContainer from "../ui/SectionContainer"
import ValuePillar from "../cards/ValuePillar"
import TimelineItem from "../cards/TimelineItem"

const CareerEvolution = () => {
	const pillars = [
		{
			title: "Technical Depth",
			description: "I build the tools I manage. From Go backends to React frontends, I understand the full stack of modern operations.",
			icon: <Zap 
					size={24} />
		},
		{
			title: "Operational Rigor",
			description: "I specialize in governance and SOPs, turning manual, high-error processes into automated, scalable workflows.",
			icon: <ShieldCheck
					size={24} />
		},
		{
			title: "Stratiegic Scaling",
			description: "I bridge the gap between business objectives and technical execution, partnering with Sales, Finance, and IT.",
			icon: <Rocket 
					size={24} />
		}
	]

	const experiences = [
		{
			date: "JUNE 2023 - PRESENT",
			role: "Operations Manager (Systems & Onboarding)",
			company: "Shoprev | Remote",
			isActive: true,
			bullets: [
				"Optimized Services TTV by 30%-50% and improved project margins through automated Post Sales workflows.",
				"Authored 100+ SOPs and Delivery Policies to standardize Professional Services methodologies."
			]
		},
		{
			date: "OCTOBER 2019 - MAY 2023",
			role: "Web Implementation Manager",
			company: "Shoprev | Remote",
			isActive: false,
			bullets: [
				"Engineered a data aggregation platform for strategic decision-making and account segmentation.",
				"Optimized UIs via data visualization, resulting in a 12% increase in customer retention."
			]
		}
	];

	return (
		<SectionContainer>
				<div 
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
						{pillars.map((pillar, index) => (
							<ValuePillar
								key={index}
								title={pillar.title}
								description={pillar.description}
								icon={pillar.icon} />
						))}
				</div>

				<div 
					className="relative border-l-2 border-slate-100 ml-4 md:ml-8 pl-8 space-y-16">
						<h2 
							className="text-3xl font-black mb-12 -ml-8 flex items-center gap-3">
								<Briefcase 
									className="text-blue-600" /> 
									
								Career Evolution
						</h2>

						{experiences.map((exp, index) => (
							<TimelineItem
								key={index}
								experience={exp} />
						))}
				</div>
		</SectionContainer>
	)
}

export default CareerEvolution