import { X } from 'lucide-react';
import React, { useEffect } from 'react'

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal = ({
	isOpen,
	onClose,
	title,
	children
}: ModalProps) => {
	useEffect(() => {
		if (!isOpen) {
			return
		};

		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = 'hidden';

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = originalStyle;
			window.removeEventListener('keydown', handleKeyDown);
		}
	}, [isOpen, onClose]);

	if (!isOpen) {
		return null;
	}

	return (
		<div
			onClick={onClose}
			role='dialog'
			aria-modal='true'
			aria-labelledby='modal-title'
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300'>
				<div
					onClick={(e) => e.stopPropagation()}
					className='relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden scale-100 transition-all duration-300'>
						<div
							className='flex items-start justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800'>
								<h3
									id='modal-title'
									className='text-2xl font-black text-slate-900 dark:text-white tracking-tight'>
										{title}
								</h3>

								<button
									onClick={onClose}
									type='button'
									aria-label='Close Modal'
									className='p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors'>
										<X
											size={20} />
								</button>
						</div>
						<div
							className='flex-1 overflow-y-auto pr-2 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent'>
								{children}
						</div>
				</div>
		</div>
	)
}

export default Modal