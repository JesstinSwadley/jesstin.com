import { ArrowRight, Code2, Handshake, MapPin, Zap } from "lucide-react"

const Hero = () => {
	return (
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
			</div>
		</section>
	)
}

export default Hero;