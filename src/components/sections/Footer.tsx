import { ArrowUpRight, Code2, Mail, MapPin, User } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";


const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
				<SectionContainer
					as="footer"
					wrapperClassName="bg-slate-900 text-white">
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
				</SectionContainer>
	)
}

export default Footer