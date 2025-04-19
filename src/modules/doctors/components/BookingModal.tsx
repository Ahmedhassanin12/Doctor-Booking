import { Button } from "@/components/ui/Button";
import { PopupModal } from "@/components/ui/Modal";
import { useBookingStore } from "@/store/useBookingStore";
import React from "react";

const BookingModal = () => {
	const [
		selectedDoctor,
		selectedTime,
		isModalOpen,
		setSelectedTime,
		setIsModalOpen,
		addAppointment,
	] = useBookingStore((state) => [
		state.selectedDoctor,
		state.selectedTime,
		state.isModalOpen,
		state.setSelectedTime,
		state.setIsModalOpen,
		state.addAppointment,
	]);

	if (!isModalOpen || !selectedDoctor) return null;

	const handleConfirm = () => {
		if (selectedTime) {
			addAppointment({
				doctorId: selectedDoctor.id,
				doctorName: selectedDoctor.name,
				specialty: selectedDoctor.specialty,
				location: selectedDoctor.location,
				dateTime: selectedTime,
			});
			setIsModalOpen(false);
		}
	};

	return (
		<PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
			<div className="bg-white rounded-lg p-6 w-full max-w-md">
				<h2 id="modal-title" className="text-xl font-bold mb-4">
					Book with {selectedDoctor.name}
				</h2>

				<fieldset className="mb-4">
					<legend className="font-medium mb-2">Available Time Slots</legend>
					<div className="space-y-2">
						{selectedDoctor.availability.map((time) => (
							<div key={time} className="flex items-center">
								<input
									type="radio"
									id={time}
									name="timeSlot"
									checked={selectedTime === time}
									onChange={() => setSelectedTime(time)}
									className="mr-2"
								/>
								<label htmlFor={time}>{new Date(time).toLocaleString()}</label>
							</div>
						))}
					</div>
				</fieldset>
				<div className="flex justify-end space-x-3">
					<Button
						onClick={() => setIsModalOpen(false)}
						className="px-4 py-2 border rounded"
						aria-label="Cancel booking"
						variant="outline"
					>
						Cancel
					</Button>
					<Button
						onClick={handleConfirm}
						disabled={!selectedTime}
						className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
						aria-label="Confirm appointment"
					>
						Confirm
					</Button>
				</div>
			</div>
		</PopupModal>
	);
};

export default BookingModal;
