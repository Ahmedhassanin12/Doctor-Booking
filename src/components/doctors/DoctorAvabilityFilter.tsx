import { AVAILABILITY_OPTIONS } from "@/constants/doctors";
import React from "react";

interface AvailabilityFilterProps {
	selectedAvailability: string[];
	onAvailabilityChange: (availability: string[]) => void;
}

export const AvailabilityFilter = ({
	selectedAvailability,
	onAvailabilityChange,
}: AvailabilityFilterProps) => {
	const handleCheckboxChange = (optionId: string) => {
		const newSelection = selectedAvailability.includes(optionId)
			? selectedAvailability.filter((id) => id !== optionId)
			: [...selectedAvailability, optionId];
		onAvailabilityChange(newSelection);
	};

	return (
		<div className="flex items-start md:items-center flex-col md:flex-row gap-1.5">
			<legend className=" text-md font-bold text-gray-700 ">
				Filter by Availability:
			</legend>
			<div className="flex  items-center flex-wrap gap-1">
				{AVAILABILITY_OPTIONS.map((option) => (
					<div key={option.id} className="flex items-center">
						<input
							id={`availability-${option.id}`}
							name="availability"
							type="checkbox"
							checked={selectedAvailability.includes(option.id)}
							onChange={() => handleCheckboxChange(option.id)}
							className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
						/>
						<label
							htmlFor={`availability-${option.id}`}
							className="ml-2 block text-sm text-gray-700"
						>
							{option.label}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};
