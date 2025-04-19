import { DOCTORS } from "@/constants/doctors";
import { useState } from "react";

const useFilterDoctors = () => {
	const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");

	const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
		[],
	);

	const filteredDoctors = DOCTORS.filter((doctor) => {
		// Filter by specialty
		if (selectedSpecialty && doctor.specialty !== selectedSpecialty) {
			return false;
		}

		// Filter by availability
		if (selectedAvailability.length > 0) {
			const now = new Date();
			const today = now.toISOString().split("T")[0];
			const tomorrow = new Date(now.setDate(now.getDate() + 1))
				.toISOString()
				.split("T")[0];

			const hasMatchingAvailability = doctor.availability.some((avail) => {
				// Check time-based availability
				const hasMorning =
					selectedAvailability.includes("morning") &&
					avail.times.some(
						(time) =>
							Number.parseInt(time.split(":")[0]) >= 8 &&
							Number.parseInt(time.split(":")[0]) < 12,
					);

				const hasAfternoon =
					selectedAvailability.includes("afternoon") &&
					avail.times.some(
						(time) =>
							Number.parseInt(time.split(":")[0]) >= 12 &&
							Number.parseInt(time.split(":")[0]) < 17,
					);

				const hasEvening =
					selectedAvailability.includes("evening") &&
					avail.times.some(
						(time) =>
							Number.parseInt(time.split(":")[0]) >= 17 &&
							Number.parseInt(time.split(":")[0]) < 21,
					);

				// Check day-based availability
				const isToday =
					selectedAvailability.includes("today") && avail.date === today;
				const isTomorrow =
					selectedAvailability.includes("tomorrow") && avail.date === tomorrow;

				return (
					hasMorning || hasAfternoon || hasEvening || isToday || isTomorrow
				);
			});

			if (!hasMatchingAvailability) {
				return false;
			}
		}

		return true;
	});
	return {
		filteredDoctors,
		selectedAvailability,
		selectedSpecialty,
		setSelectedAvailability,
		setSelectedSpecialty,
	};
};

export default useFilterDoctors;
