import { ArrowUpRight, Code2, Mail, MapPin, User } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";


const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<SectionContainer
			as="footer"
			wrapperClassName="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
				<div 
					className="max-w-5xl mx-auto px-6">
						<div 
							className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
								<div>
									<h2 
										className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-6 transition-colors duration-300">
											Let's Connect
									</h2>

									<p 
										className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed transition-colors duration-300">
											I am currently seeking opportunities to lead technical operations and architect 
											scalable systems. Whether you are in <strong>Austin</strong> or looking for a 
											<strong> Remote-First</strong> leader, I am ready to drive impact.
									</p>

									<div 
										className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold transition-colors duration-300">
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
										className="group flex items-center justify-between p-6 bg-slate-200 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300">
											<div 
												className="flex items-center gap-4">
												<Mail 
													className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />
														<div>
															<p 
																className="text-xs text-slate-400 uppercase font-bold tracking-widest">
																	Email
															</p>

															<p
																className="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300">
																	contact@jesstin.com
															</p>
														</div>
											</div>

											<ArrowUpRight 
												className="text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
									</a>

									<div 
										className="grid grid-cols-2 gap-4">
											<a 
												href="https://www.linkedin.com/in/jesstin-swadley/" 
												target="_blank" 
												className="flex items-center gap-3 p-4 bg-slate-200 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300">
													<User 
														size={20} 
														className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />

													<span 
														className="font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300">
															LinkedIn
													</span>
											</a>

											<a 
												href="https://github.com/JesstinSwadley" 
												target="_blank" 
												className="flex items-center gap-3 p-4 bg-slate-200 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300">
													<Code2 
														size={20} 
														className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />

													<span 
														className="font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300">
															GitHub
													</span>
											</a>
									</div>
								</div>
						</div>

						<div 
							className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 dark:text-slate-600 text-sm transition-colors duration-300">
								<p>© {currentYear} Jesstin Swadley. Built with React 19 & Tailwind 4.0.</p>
								
								<p 
									className="italic">
										Systems Architect | Technical Services Operations Leader
								</p>
						</div>
				</div>
		</SectionContainer>
	)
}

export default Footer