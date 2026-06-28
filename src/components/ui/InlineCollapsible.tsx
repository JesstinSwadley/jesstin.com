import React from 'react'

interface InlineCollapsibleProps {
	isOpen: boolean;
	children: React.ReactNode;
	className?: string;
}

const InlineCollapsible = ({
	isOpen,
	children,
	className = ''
}: InlineCollapsibleProps) => {
	return (
		<div
			className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
				isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
			} ${className}`}
			aria-hidden={!isOpen}>
				<div
					className='overflow-hidden'>
						<div
							className='pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed'>
								{children}
						</div>
				</div>
		</div>
	)
}

export default InlineCollapsible