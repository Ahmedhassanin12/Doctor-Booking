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
		isTimeSlotBooked,
	] = useBookingStore((state) => [
		state.selectedDoctor,
		state.selectedTime,
		state.isModalOpen,
		state.setSelectedTime,
		state.setIsModalOpen,
		state.addAppointment,
		state.isTimeSlotBooked,
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

	const formatTimeSlot = (date: string, time: string) => {
		const dateObj = new Date(`${date}T${time}:00`);
		return dateObj.toLocaleString("en-US", {
			weekday: "short",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
			<div className="bg-white rounded-lg p-6 w-full max-w-md">
				<h2 id="modal-title" className="text-xl font-bold mb-4">
					Book with {selectedDoctor.name}
				</h2>

				<fieldset className="mb-4">
					<legend className="font-medium mb-2">Available Time Slots</legend>
					<div className="space-y-2 max-h-60 overflow-y-auto">
						{selectedDoctor.availability.map((avail) => (
							<div key={avail.date} className="mb-4">
								<h4 className="font-medium mb-2">
									{new Date(avail.date).toLocaleDateString("en-US", {
										weekday: "long",
										month: "long",
										day: "numeric",
									})}
								</h4>
								<div className="grid grid-cols-2 gap-2">
									{avail.times.map((time) => {
										const fullDateTime = `${avail.date}T${time}:00`;
										const isBooked = isTimeSlotBooked(
											selectedDoctor.id,
											fullDateTime,
										);

										return (
											<button
												key={fullDateTime}
												type="button"
												onClick={() =>
													!isBooked && setSelectedTime(fullDateTime)
												}
												className={`p-2 border rounded text-sm ${
													isBooked
														? "bg-gray-100 text-gray-400 cursor-not-allowed"
														: selectedTime === fullDateTime
															? "bg-blue-100 border-blue-500"
															: "hover:bg-gray-50"
												}`}
												aria-label={`Select appointment at ${formatTimeSlot(avail.date, time)}`}
												disabled={isBooked}
											>
												{time}
												{isBooked ? (
													<span className="text-xs block">Booked</span>
												) : null}
											</button>
										);
									})}
								</div>
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
						disabled={
							!selectedTime || isTimeSlotBooked(selectedDoctor.id, selectedTime)
						}
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
