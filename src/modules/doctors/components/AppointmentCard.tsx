import { Button } from "@/components/ui/Button";
import { DOCTORS } from "@/constants/doctors";
import type { Appointment } from "@/types/appointment.type";
import Image from "next/image";
import { MdCancel } from "react-icons/md";

const AppointmentCard = ({
	appointment,
	index,
	cancelAppointment,
}: {
	appointment: Appointment;
	index: number;
	cancelAppointment: (index: number) => void;
}) => {
	const doctorInfo = DOCTORS.find((doc) => doc.id === appointment.doctorId);

	return (
		<div
			className="bg-white p-4 rounded-lg shadow flex  items-center justify-start md:justify-evenly gap-2 "
			aria-label={`Appointment with Dr. ${appointment.doctorName}`}
		>
			<Image
				width={100}
				height={100}
				className="object-center min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] rounded-full border border-blue-100"
				src={doctorInfo?.photo ?? ""}
				alt={doctorInfo?.name ?? "doctor"}
			/>
			<div>
				<h3 className="font-semibold">{appointment.doctorName}</h3>
				<p className="text-gray-600">{appointment.specialty}</p>
				<p className="text-sm">
					{new Date(appointment.dateTime).toLocaleString()}
				</p>
				<p className="text-sm text-gray-500">{appointment.location}</p>
				<Button
					size="small"
					color="indigo"
					variant="outline"
					className="p-2"
					endIcon={<MdCancel />}
					onClick={() => cancelAppointment(index)}
				>
					Cancel Appointment
				</Button>
			</div>
		</div>
	);
};

export default AppointmentCard;
