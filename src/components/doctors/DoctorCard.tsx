import Image from "next/image";
import type { Doctor } from "@/types/doctor.type";
import { Button } from "../ui/Button";
import { useBookingStore } from "@/store/useBookingStore";

interface DoctorCardProps {
	doctor: Doctor;
	onBook: () => void;
}
const DoctorCard = ({ doctor, onBook }: DoctorCardProps) => {
	const isTimeSlotBooked = useBookingStore((state) => state.isTimeSlotBooked);

	const nextAvailability = doctor.availability[0]?.date
		? new Date(doctor.availability[0].date).toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric",
			})
		: "No availability";

	const hasAvailableSlots = doctor.availability.some((avail) =>
		avail.times.some((time) => {
			const fullDateTime = `${avail.date}T${time}:00`;
			return !isTimeSlotBooked(doctor.id, fullDateTime);
		}),
	);

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<Image
				width={140}
				height={140}
				src={doctor.photo}
				alt={`Photo of ${doctor.name}`}
				className="w-full h-80 object-center"
				aria-label={`Photo of Dr. ${doctor.name}`}
			/>
			<div className="p-4">
				<h3 className="text-lg font-semibold">{doctor.name}</h3>
				<p className="text-gray-600">{doctor.specialty}</p>
				<div className="flex items-center mt-2">
					<span className="text-yellow-500">★ {doctor.rating}</span>
				</div>
				<p className="text-sm text-gray-500 mt-2">{doctor.location}</p>
				<p className="text-sm mt-2">
					<span className="font-medium">Next available:</span>{" "}
					{nextAvailability}
				</p>

				<Button
					onClick={onBook}
					disabled={!hasAvailableSlots}
					className={`mt-4 py-2 px-4 rounded ${
						hasAvailableSlots
							? "bg-blue-600 text-white hover:bg-blue-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}
					aria-disabled={!hasAvailableSlots}
				>
					{hasAvailableSlots ? "Book Appointment" : "No Availability"}
				</Button>
			</div>
		</div>
	);
};

export default DoctorCard;
