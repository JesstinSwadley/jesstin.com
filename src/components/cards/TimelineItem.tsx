interface ExperienceItem {
	date: string;
	role: string;
	company: string;
	bullets: string[];
	isActive?: boolean;
}

interface TimelineItemProps {
	experience: ExperienceItem
}

const TimelineItem = ({
	experience
}: TimelineItemProps) => {
	return (
		<div
			className="relative pl-2">
				<div 
					className={`absolute -left-10 top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-colors duration-300 ${ experience.isActive ? 'bg-blue-600' : 'bg-slate-200'}`} />

				<p 
					className={`text-sm font-bold mb-1 tracking-wide ${experience.isActive ? 'text-blue-600' : 'text-slate-400'}`}>
						{experience.date}
				</p>
								
				<h4 
					className="text-xl font-bold text-slate-900">
						{experience.role}
				</h4>

				<p 
					className="text-slate-500 font-medium mb-3">
						{experience.company}
				</p>

				<ul 
					className="text-slate-600 text-sm space-y-2 max-w-2xl leading-relaxed">
						{experience.bullets.map((bullet, index) => (
							<li
								key={index}>
									• {bullet}
							</li>
						))}
				</ul>
		</div>
	)
}

export default TimelineItem