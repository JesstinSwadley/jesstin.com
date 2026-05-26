import { ArrowRight, BarChart3, BookOpenCheck, Cpu, GitBranchIcon, Handshake, MapPin, TrendingUp, Users, Zap } from 'lucide-react';
import React from 'react';

function App() {
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
		<div
			className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
				{/* Hero Section */}
				<section
					className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">

					<h1
						className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
							Jesstin Swadley
					</h1>

					<div
						className="mb-8 flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold tracking-wide border border-slate-200">
							<MapPin
								size={16}
								className="text-blue-600" />
							
							Relocating to Austin, TX
					</div>

					<p
						className="text-xl md:text-3xl text-slate-600 font-light mb-10 max-w-3xl leading-snug">
							Technical Services Operations Leader with <strong>Remote-First Expertise</strong>
					</p>

					<p
						className="text-lg text-slate-500 mb-12 max-w-2xl leading-relaxed">
							I optimize post-sales infrastructure for scale. Expert in <strong>reducing TTV by 50%</strong> and architecting systems that bridge the gap between technical execution and business goals.
					</p>

					<div
						className="flex flex-col sm:flex-row items-center gap-4 mb-16">
							<a 
								href="mailto:contact@jesstin.com"
								className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-200">
									View Results 
									
									<ArrowRight
										size={18} />
							</a>

							<div
								className="flex items-center gap-4 px-6 py-4">
									<a 
										href="https://github.com" 
										className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
											<GitBranchIcon 
												size={18} />

											Github
									</a>

									<a 
										href="https://linkedin.com" 
										className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
											<Handshake 
												size={18} />

											LinkedIn
									</a>
							</div>

							<div 
								className="flex items-center gap-2 text-sm text-slate-400 font-medium italic">
									<Zap 
										size={14} 
										className="text-yellow-500" />
								
									Leveraging Gemini to optimize Project Margins, Forecasting, and Utilization.
							</div>

							<div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent w-full max-w-5xl mx-auto" />
					</div>
				</section>

				<section className="max-w-6xl mx-auto px-6 py-20 bg-white">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Executive Impact & Results</h2>
						<p className="text-slate-500 text-lg max-w-2xl mx-auto">
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
												VIEW STORY <ArrowRight size={14} />
										</div>
								</div>
							))}
					</div>
				</section>
		</div>
	)
}

export default App;