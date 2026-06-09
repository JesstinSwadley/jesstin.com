import { Briefcase, Rocket, ShieldCheck, Zap } from "lucide-react"
import SectionContainer from "../ui/SectionContainer"

const CareerEvolution = () => {
	return (
		<SectionContainer>
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
									className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
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
		</SectionContainer>
	)
}

export default CareerEvolution