import { ArrowRight, BarChart3, BookOpenCheck, Cpu, TrendingUp, Users, Zap } from 'lucide-react';

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
			description: "Authored 100+ SOPs and Delivery Policies to standardize methodologies, driving a 10% reduction in manual workload[cite: 5, 15].",
			icon: <BookOpenCheck 
					className="text-blue-600"
					size={24} />,
		},
		{
			metric: "12%",
			label: "Retention Boost",
			description: "Optimized user interfaces via data visualization, resulting in a 12% increase in customer retention[cite: 24].",
			icon: <Users 
				className="text-blue-600" 
				size={24} />,
		},
		{
			metric: "20%",
			label: "Usage Increase",
			description: "Engineered a data aggregation platform for strategic decision-making, leading to a 20% boost in product usage[cite: 23, 24].",
			icon: <TrendingUp 
					className="text-blue-600" 
					size={24} />,
		},
		{
			metric: "10%",
			label: "Manual Workload ↓",
			description: "Developed custom data entry automation scripts to reduce manual workload for internal teams[cite: 24].",
			icon: <Cpu
					className="text-blue-600" 
					size={24} />,
		},
		{
			metric: "Scalable",
			label: "Systems Architecture",
			description: "Partnered with Sales Ops and Finance to translate operational needs into scalable systems[cite: 16].",
			icon: <BarChart3 
					className="text-blue-600" 
					size={24} />,
		}
	]

	return (
		<section 
			className="max-w-5xl mx-auto px-6 py-20 bg-white">
				<div 
					className="text-center mb-16">
						<h2 
							className="text-3xl md:text-4xl font-black tracking-tight mb-4">
								Executive Impact & Results
						</h2>

						<p 
							className="text-slate-500 text-lg max-w-2xl mx-auto">
								A track record of optimizing infrastructure to drive efficiency, retention, and scalable growth.
						</p>
				</div>

				<div 
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{results.map((item, index) => (
							<div 
								key={index}
								className="group p-8 border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 cursor-pointer bg-white">
									<div 
										className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
											{item.icon}
									</div>

									<div 
										className="flex items-baseline gap-2 mb-1">
											<span 
												className="text-4xl font-black tracking-tight">
													{item.metric}
											</span>
									</div>
									<p 
										className="text-slate-900 font-bold mb-4">
											{item.label}
									</p>
									<p 
										className="text-slate-500 text-sm leading-relaxed">
											{item.description}
									</p>
								
									{/* Future "Expansion" hint for Phase 3 */}
									<div 
										className="mt-6 flex items-center gap-2 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
											VIEW STORY 
											<ArrowRight 
												size={14} />
									</div>
							</div>
						))}
				</div>
		</section>
	)
}

export default ExecutiveImpact;