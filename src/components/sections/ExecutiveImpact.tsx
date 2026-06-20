import { BarChart3, BookOpenCheck, Cpu, TrendingUp, Users, Zap } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import SectionHeader from '../ui/SectionHeader';
import ImpactCard from '../cards/ImpactCard';

const ExecutiveImpact = () => {
	const results = [
		{
			metric: "50%",
			label: "TTV Reduction",
			description: "Optimized Services Time-to-Value by 30%-50% and reduced delivery cycles from 30+ days to 14 days",
			icon: <Zap 
					className="text-blue-600"
					size={24} />
		},
		{
			metric: "100+",
			label: "SOPs Developed",
			description: "Authored 100+ SOPs and Delivery Policies to standardize methodologies, driving a 10% reduction in manual workload.",
			icon: <BookOpenCheck 
					className="text-blue-600"
					size={24} />,
		},
		{
			metric: "12%",
			label: "Retention Boost",
			description: "Optimized user interfaces via data visualization, resulting in a 12% increase in customer retention.",
			icon: <Users 
				className="text-blue-600" 
				size={24} />,
		},
		{
			metric: "20%",
			label: "Usage Increase",
			description: "Engineered a data aggregation platform for strategic decision-making, leading to a 20% boost in product usage.",
			icon: <TrendingUp 
					className="text-blue-600" 
					size={24} />,
		},
		{
			metric: "10%",
			label: "Manual Workload ↓",
			description: "Developed custom data entry automation scripts to reduce manual workload for internal teams.",
			icon: <Cpu
					className="text-blue-600" 
					size={24} />,
		},
		{
			metric: "Scalable",
			label: "Systems Architecture",
			description: "Partnered with Sales Ops and Finance to translate operational needs into scalable systems.",
			icon: <BarChart3 
					className="text-blue-600" 
					size={24} />,
		}
	]

	return (
		<SectionContainer
				wrapperClassName="bg-white">
					<SectionHeader
						title="Executive Impact & Results"
						description="A track record of optimizing infrastructure to drive efficiency, retention, and scalable growth."
						align="center"/>

					<div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{results.map((item, index) => (
								<ImpactCard
									key={index}
									result={item} />
							))}
					</div>
		</SectionContainer>
	)
}

export default ExecutiveImpact;