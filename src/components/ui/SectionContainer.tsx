import React from 'react'

interface SectionContainerProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
	wrapperClassName?: string;
	as?: 'section' | 'footer' | 'header' | 'div';
}

const SectionContainer = ({
	children,
	id,
	className = '',
	wrapperClassName = '',
	as: Component = 'section'
}: SectionContainerProps) => {
	return (
		<Component
			id={id}
			className={`w-full transition-colors duration-300 ${wrapperClassName}`}>
				<div
					className={`max-w-5xl mx-auto px-6 py-20 transition-colors duration-300 ${className}`}>
						{children}
				</div>
		</Component>
	)
}

export default SectionContainer;