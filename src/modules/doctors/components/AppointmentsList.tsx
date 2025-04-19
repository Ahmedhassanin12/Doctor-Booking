import { useBookingStore } from "@/store/useBookingStore";
import { RiFilterOffLine } from "react-icons/ri";
import AppointmentCard from "./AppointmentCard";

export const AppointmentsList = () => {
	const appointments = useBookingStore((state) => state.appointments);

	if (appointments.length === 0) {
		return (
			<div className="flex items-center justify-center w-full h-[500px]">
				<p className="text-gray-500 flex items-center gap-2">
					You have no upcoming appointments. <RiFilterOffLine />{" "}
				</p>
			</div>
		);
	}

	return (
		<div
			className="flex items-center w-full gap-2"
			aria-label="Your appointments"
		>
			{appointments.map((appointment, index) => (
				<AppointmentCard
					key={`${appointment.dateTime + index}`}
					appointment={appointment}
				/>
			))}
		</div>
	);
};
