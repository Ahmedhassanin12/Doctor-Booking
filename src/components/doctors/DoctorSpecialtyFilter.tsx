import { SPECIALTIES } from "@/constants/specialties";
import React, { type Dispatch, type SetStateAction } from "react";

const DoctorSpecialtyFilter = ({
	selectedSpecialty,
	setSelectedSpecialty,
}: {
	selectedSpecialty: string;
	setSelectedSpecialty: Dispatch<SetStateAction<string>>;
}) => {
	return (
		<>
			<label
				htmlFor="specialty"
				className="block mb-2  text-md font-bold text-gray-700"
			>
				Filter by Specialty:
			</label>
			<select
				id="specialty"
				value={selectedSpecialty}
				onChange={(e) => setSelectedSpecialty(e.target.value)}
				className="p-2 border rounded"
				aria-label="Filter doctors by specialty"
			>
				<option value="">All Specialties</option>
				{SPECIALTIES.map((specialty) => (
					<option key={specialty} value={specialty}>
						{specialty}
					</option>
				))}
			</select>
		</>
	);
};

export default DoctorSpecialtyFilter;
