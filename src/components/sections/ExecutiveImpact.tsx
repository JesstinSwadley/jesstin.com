import { BarChart3, BookOpenCheck, Cpu, TrendingUp, Users, Zap } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import SectionHeader from '../ui/SectionHeader';
import ImpactCard from '../cards/ImpactCard';
import { useState } from 'react';
import Modal from '../ui/Modal';

const ExecutiveImpact = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const results = [
		{
			metric: "50%",
			label: "TTV Reduction",
			description: "Optimized Services Time-to-Value by 30%-50% and reduced delivery cycles from 30+ days to 14 days",
			icon: <Zap 
					size={24} />
		},
		{
			metric: "100+",
			label: "SOPs Developed",
			description: "Authored 100+ SOPs and Delivery Policies to standardize methodologies, driving a 10% reduction in manual workload.",
			icon: <BookOpenCheck 
					size={24} />,
		},
		{
			metric: "12%",
			label: "Retention Boost",
			description: "Optimized user interfaces via data visualization, resulting in a 12% increase in customer retention.",
			icon: <Users 
				size={24} />,
		},
		{
			metric: "20%",
			label: "Usage Increase",
			description: "Engineered a data aggregation platform for strategic decision-making, leading to a 20% boost in product usage.",
			icon: <TrendingUp 
					size={24} />,
		},
		{
			metric: "10%",
			label: "Manual Workload ↓",
			description: "Developed custom data entry automation scripts to reduce manual workload for internal teams.",
			icon: <Cpu
					size={24} />,
		},
		{
			metric: "Scalable",
			label: "Systems Architecture",
			description: "Partnered with Sales Ops and Finance to translate operational needs into scalable systems.",
			icon: <BarChart3 
					size={24} />,
		}
	]

	const activeResult = activeIndex !== null ? results[activeIndex] : null;

	return (
		<SectionContainer
				wrapperClassName="bg-slate-100 dark:bg-slate-900">
					<SectionHeader
						title="Executive Impact & Results"
						description="A track record of optimizing infrastructure to drive efficiency, retention, and scalable growth."
						align="center"/>


					<div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{results.map((item, index) => (
								<div
									key={index}
									onClick={() => setActiveIndex(index)}>
										<ImpactCard
											result={item} />
								</div>
							))}
					</div>

					<Modal
						isOpen={activeIndex !== null}
						onClose={() => setActiveIndex(null)}
						title={activeResult ? `${activeResult.label} Case Study` : ''}>
							<div
								className='space-y-4 py-2'>
									<p
										className='font-bold text-blue-600 dark:text-blue-400 text-lg'>
											Metric Highlighted: {activeResult?.metric} Impact Summary
									</p>

									<p>
										This is your temporary validation placeholder story block. Clicking outside this box or pressing the 
										<kbd className="px-2 py-1 mx-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-xs">Esc</kbd> 
										key will safely clear the active index state and close the frame.
									</p>

									<p
										className='text-slate-400 dark:text-slate-500 text-sm italic'>
											Mechanical Test Note: State isolation, dark-mode styling variables, and underlying body scroll locking are now fully active.
									</p>
							</div>
					</Modal>
		</SectionContainer>
	)
}

export default ExecutiveImpact;