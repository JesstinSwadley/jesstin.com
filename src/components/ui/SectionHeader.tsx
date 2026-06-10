interface SectionHeaderProps {
	title: string;
	description?: string;
	align?: 'left' | 'center';
	className?: string;
}

const SectionHeader = ({
	title,
	description,
	align = 'left',
	className = '',
}: SectionHeaderProps) => {
	const isCenter = align === 'center';

	return (
		<div
			className={`w-full ${isCenter ? 'text-center mb-16' : 'text-left mb-12'} ${className}`}>
				<h2
					className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-slate-900">
						{title}
				</h2>

				{
					description && (
						<p
							className={`text-slate-500 leading-relaxed ${isCenter ? 'text-lg max-w-2xl mx-auto' : 'text-base max-w-xl'}`}>
								{description}
						</p>
					)
				}
		</div>
	)
}

export default SectionHeader