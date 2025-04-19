import { useBookingStore } from "@/store/useBookingStore";
import { RiFilterOffLine } from "react-icons/ri";
import AppointmentCard from "./AppointmentCard";

export const AppointmentsList = () => {
	const [appointments, cancelAppointment] = useBookingStore((state) => [
		state.appointments,
		state.cancelAppointment,
	]);

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
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
			aria-label="Your appointments"
		>
			{appointments.map((appointment, index) => (
				<AppointmentCard
					key={`${appointment.dateTime + index}`}
					appointment={appointment}
					index={index}
					cancelAppointment={cancelAppointment}
				/>
			))}
		</div>
	);
};
