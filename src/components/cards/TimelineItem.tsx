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
					className={`absolute -left-10 top-1 w-4 h-4 rounded-full border-4 border-slate-100 dark:border-slate-900 shadow-sm transition-colors duration-300 ${ experience.isActive ? 'bg-blue-600 dark:bg-blue-400' : 'bg-slate-200 dark:bg-slate-800'}`} />

				<p 
					className={`text-sm font-bold mb-1 tracking-wide transition-colors duration-300 ${experience.isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600'}`}>
						{experience.date}
				</p>
								
				<h4 
					className="text-xl font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300">
						{experience.role}
				</h4>

				<p 
					className="text-slate-500 dark:text-slate-400 font-medium mb-3 transition-colors duration-300">
						{experience.company}
				</p>

				<ul 
					className="text-slate-600 dark:text-slate-400 text-sm space-y-2 max-w-2xl leading-relaxed transition-colors duration-300">
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