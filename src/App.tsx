import { ArrowRight, ArrowUpRight, BarChart3, BookOpenCheck, Briefcase, Code2, Cpu, ExternalLink, GitFork, Handshake, Mail, MapPin, Rocket, ShieldCheck, TrendingUp, User, Users, Workflow, Zap } from 'lucide-react';
import React from 'react';

function App() {
	const currentYear = new Date().getFullYear();

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
										href="https://github.com/JesstinSwadley" 
										className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
											<Code2
												size={18} />

											Github
									</a>

									<a 
										href="https://www.linkedin.com/in/jesstin-swadley/" 
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
													VIEW STORY <ArrowRight size={14} />
											</div>
									</div>
								))}
						</div>
				</section>

				<section
					className="max-w-5xl mx-auto px-6 py-20">
						<div
							className="mb-12">
								<h2
									className="text-3xl font-black mb-4">
										Developer Portfolio
								</h2>

								<p
									className="text-slate-500 max-w-xl">
										Engineering scalable tools to bridge the gap between technical execution and operational efficiency.
								</p>
						</div>

						<div 
							className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{projects.map((project, index) => (
									<div 
										key={index} 
											className="group p-8 border border-slate-200 rounded-2xl bg-white transition-all hover:border-slate-300">
										<div 
											className="flex justify-between items-start mb-6">
												<div 
													className="p-3 bg-slate-900 text-white rounded-xl">
														<Code2 size={24} />
												</div>

											<a 
												href={project.link} 
												className="text-slate-400 hover:text-slate-900 transition-colors">
													<GitFork size={20} />
											</a>
										</div>

										<h3 
											className="text-2xl font-bold mb-3">
												{project.title}
										</h3>

										<p 
											className="text-slate-600 text-sm leading-relaxed mb-6">
												{project.description}
										</p>

										{/* Static Tech Tags (Future Filter Targets) */}
										<div 
											className="flex flex-wrap gap-2 mb-8">
												{project.tags.map((tag) => (
													<span 
														key={tag} 
														className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md uppercase tracking-wider">
															{tag}
													</span>
												))}
										</div>

										{/* Placeholder for Phase 3 "Deep Dive" */}
										<div 
											className="flex items-center gap-2 text-sm font-bold text-blue-600">
												PROJECT DETAILS COMING SOON 
												
												<ExternalLink 
													size={14} />
										</div>
									</div>
								))}
						</div>
				</section>

				<section
					className="max-w-5xl mx-auto px-6 py-20 bg-slate-50 rounded-3xl">
						<div
							className="mb-12">
							<h2
								className="text-3xl font-black mb-4">
									Operations Portfolio
							</h2>
							<p
								className="text-slate-500 max-w-xl">
									Building the technical infrastructure and governance models that allow professional services teams to scale
							</p>
						</div>

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
														<span 
															key={tool} 
															className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md uppercase tracking-wider">
																{tool} 
														</span>
													))}
											</div>
										</div>
									</div>
								))}
						</div>
				</section>

				<section 
					className="max-w-5xl mx-auto px-6 py-24">
						<div 
							className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
								<div 
									className="text-center">
										<div 
											className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
												<Zap 
													size={24} />
										</div>

										<h3 
											className="font-bold text-lg mb-2">
												Technical Depth
										</h3>

										<p 
											className="text-sm text-slate-500">
												I build the tools I manage. From Go backends to React frontends, I understand the full stack of modern operations.
										</p>
								</div>

								<div 
									className="text-center">
										<div 
											className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
												<ShieldCheck 
													size={24} />
										</div>

										<h3 
											className="font-bold text-lg mb-2">
												Operational Rigor
										</h3>

										<p 
											className="text-sm text-slate-500">
												I specialize in governance and SOPs, turning manual, high-error processes into automated, scalable workflows.
										</p>
								</div>


								<div 
									className="text-center">
										<div 
											className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
												<Rocket 
													size={24} />
										</div>

										<h3 
											className="font-bold text-lg mb-2">
												Strategic Scaling
										</h3>

										<p 
											className="text-sm text-slate-500">
												I bridge the gap between business objectives and technical execution, partnering with Sales, Finance, and IT.
										</p>
								</div>
						</div>
		
						<div 
							className="relative border-l-2 border-slate-100 ml-4 md:ml-8 pl-8 space-y-16">
								<h2 
									className="text-3xl font-black mb-12 -ml-8 flex items-center gap-3">
										<Briefcase 
											className="text-blue-600" /> 
											
										Career Evolution
								</h2>

								<div 
									className="relative">
										<div 
											className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
										<p 
											className="text-sm font-bold text-blue-600 mb-1">
												JUNE 2023 - PRESENT
										</p>

										<h4 
											className="text-xl font-bold">
												Operations Manager (Systems & Onboarding)
										</h4>

										<p 
											className="text-slate-500 font-medium mb-3">
												Shoprev | Remote
										</p>

										<ul 
											className="text-slate-600 text-sm space-y-2 max-w-2xl leading-relaxed">
												<li>
													• Optimized Services TTV by 30%-50% and improved project margins through automated Post Sales workflows.
												</li>

												<li>
													• Authored 100+ SOPs and Delivery Policies to standardize Professional Services methodologies.
												</li>
										</ul>
								</div>

								<div 
									className="relative">
										<div 
											className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-slate-200 border-4 border-white shadow-sm" />

										<p 
											className="text-sm font-bold text-slate-400 mb-1">OCTOBER 2019 - MAY 2023</p>

										<h4 
											className="text-xl font-bold">
												Web Implementation Manager
										</h4>

										<p 
											className="text-slate-500 font-medium mb-3">
												Shoprev | Remote
										</p>

										<ul 
											className="text-slate-600 text-sm space-y-2 max-w-2xl leading-relaxed">
												<li>
													• Engineered a data aggregation platform for strategic decision-making and account segmentation.
												</li>

												<li>
													• Optimized UIs via data visualization, resulting in a 12% increase in customer retention.
												</li>
										</ul>
								</div>
						</div>
				</section>

			<footer 
				className="bg-slate-900 text-white py-20">
					<div 
						className="max-w-5xl mx-auto px-6">
							<div 
								className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
									<div>
										<h2 className="text-3xl font-black mb-6">Let's Connect</h2>
										<p 
											className="text-slate-400 text-lg mb-8 leading-relaxed">
												I am currently seeking opportunities to lead technical operations and architect 
												scalable systems. Whether you are in <strong>Austin</strong> or looking for a 
												<strong> Remote-First</strong> leader, I am ready to drive impact.
										</p>

										<div 
											className="flex items-center gap-2 text-blue-400 font-bold">
												<MapPin 
													size={18} />

												<span>
													Available for Remote, Hybrid, or Onsite in the Southeast US
												</span>
										</div>
									</div>

									<div 
										className="flex flex-col gap-4">

										<a 
											href="mailto:contact@jesstin.com" 
											className="group flex items-center justify-between p-6 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all">
												<div 
													className="flex items-center gap-4">
													<Mail 
														className="text-blue-400" />
															<div>
																<p 
																	className="text-xs text-slate-400 uppercase font-bold tracking-widest">
																		Email
																</p>

																<p
																	className="text-lg font-bold">
																		contact@jesstin.com
																</p>
															</div>
												</div>

												<ArrowUpRight 
													className="text-slate-500 group-hover:text-white transition-colors" />
										</a>

										<div 
											className="grid grid-cols-2 gap-4">
												<a 
													href="https://www.linkedin.com/in/jesstin-swadley/" 
													target="_blank" 
													className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all">
														<User 
															size={20} 
															className="text-blue-400" />

														<span 
															className="font-bold">
																LinkedIn
														</span>
												</a>

												<a 
													href="https://github.com/JesstinSwadley" 
													target="_blank" 
													className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all">
														<Code2 
															size={20} 
															className="text-blue-400" />

														<span 
															className="font-bold">
																GitHub
														</span>
												</a>
										</div>
									</div>
							</div>

							<div 
								className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
									<p>© {currentYear} Jesstin Swadley. Built with React 19 & Tailwind 4.0.</p>
									
									<p 
										className="italic">
											Systems Architect | Technical Services Operations Leader
									</p>
							</div>
					</div>
			</footer>
		</div>
	)
}

export default App;