import Image from "next/image";
import type { Doctor } from "@/types/doctor.type";
import { Button } from "../ui/Button";

interface DoctorCardProps {
	doctor: Doctor;
	onBook: () => void;
}
const DoctorCard = ({ doctor, onBook }: DoctorCardProps) => {
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
				<Button
					onClick={onBook}
					className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label={`Book appointment with Dr. ${doctor.name}`}
				>
					Book Appointment
				</Button>
			</div>
		</div>
	);
};

export default DoctorCard;
