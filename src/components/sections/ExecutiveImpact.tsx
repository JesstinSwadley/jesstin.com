import SectionContainer from '../ui/SectionContainer';
import SectionHeader from '../ui/SectionHeader';
import ImpactCard from '../cards/ImpactCard';
import { useState } from 'react';
import Modal from '../ui/Modal';
import { impactResults } from '../../data/executiveImpactData';

const ExecutiveImpact = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const activeResult = activeIndex !== null ? impactResults[activeIndex] : null;

	return (
		<SectionContainer
				wrapperClassName="bg-slate-100 dark:bg-slate-900">
					<SectionHeader
						title="Executive Impact & Results"
						description="A track record of optimizing infrastructure to drive efficiency, retention, and scalable growth."
						align="center"/>


					<div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{impactResults.map((item, index) => (
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
						title={activeResult ? `${activeResult.label} Deep Dive` : ''}>
							{/* <div
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
							</div> */}

							{activeResult && (
								<div
									className='space-y-6 py-2'>
										<div>
											<h4
												className='text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2'>
													The Situation
											</h4>

											<p
												className='text-slate-700 dark:text-slate-300 text-base'>
													{activeResult.story.situation}
											</p>
										</div>

										<div>
											<h4
												className='text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2'>
													Actions
											</h4>

											<p
												className='text-slate-700 dark:text-slate-300 text-base'>
													{activeResult.story.action}
											</p>
										</div>

										<div
											className='p-5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/40 rounded-xl transition-colors duration-300'>
												<h4
													className='text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2'>
														Results
												</h4>

												<p
													className='text-slate-900 dark:text-slate-100 font-medium text-base'>
														{activeResult.story.result}
												</p>
										</div>
								</div>
							)}
					</Modal>
		</SectionContainer>
	)
}

export default ExecutiveImpact;