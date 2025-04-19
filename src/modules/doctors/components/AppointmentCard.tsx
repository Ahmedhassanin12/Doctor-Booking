import type { Appointment } from "@/types/appointment.type";

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => {
	return (
		<div
			className="bg-white p-4 rounded-lg shadow"
			aria-label={`Appointment with Dr. ${appointment.doctorName}`}
		>
			<h3 className="font-semibold">{appointment.doctorName}</h3>
			<p className="text-gray-600">{appointment.specialty}</p>
			<p className="text-sm">
				{new Date(appointment.dateTime).toLocaleString()}
			</p>
			<p className="text-sm text-gray-500">{appointment.location}</p>
		</div>
	);
};

export default AppointmentCard;
