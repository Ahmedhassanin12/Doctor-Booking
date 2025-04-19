import { FiX } from "react-icons/fi";

import type { ReactNode } from "react";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children?: ReactNode;
	className?: string;
};

export function PopupModal(props: ModalProps) {
	const { isOpen, onClose, children, className } = props;

	if (!isOpen) return null;

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center transition-colors ${isOpen ? "visible bg-black/50" : "invisible"}`}
			onClick={onClose}
			onKeyDown={onClose}
		>
			{/* Modal body */}
			<div
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				className={`bg-white rounded-lg shadow py-6 px-4 transition-all ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"} ${className}`}
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
				>
					<span className="sr-only">Close</span>
					<FiX size={20} className="cursor-pointer text-xl" />
				</button>
				<div className="py-4 px-2">{children}</div>
			</div>
		</div>
	);
}
