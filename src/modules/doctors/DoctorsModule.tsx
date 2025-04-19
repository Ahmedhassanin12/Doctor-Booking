"use client";
import DoctorCard from "@/components/doctors/DoctorCard";
import { Button } from "@/components/ui/Button";
import { DOCTORS } from "@/constants/doctors";
import { SPECIALTIES } from "@/constants/specialties";
import { useBookingStore } from "@/store/useBookingStore";
import type { Doctor } from "@/types/doctor.type";
import React, { useState } from "react";
import { AppointmentsList } from "./components/AppointmentsList";
import BookingModal from "./components/BookingModal";
import { IoMdCheckmark } from "react-icons/io";
import { RiFilterOffLine } from "react-icons/ri";

const DoctorsModule = () => {
	const [activeTab, setActiveTab] = useState<"doctors" | "appointments">(
		"doctors",
	);
	const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
	const [setSelectedDoctor, setIsModalOpen] = useBookingStore((state) => [
		state.setSelectedDoctor,
		state.setIsModalOpen,
	]);

	const filteredDoctors = selectedSpecialty
		? DOCTORS.filter((doctor) => doctor.specialty === selectedSpecialty)
		: DOCTORS;

	const handleBookClick = (doctor: Doctor) => {
		setSelectedDoctor(doctor);
		setIsModalOpen(true);
	};
	return (
		<div className="flex items-center justify-center ">
			<div className="min-h-[calc(100vh-93px)]  bg-gray-50 p-4 md:p-8  container rounded-lg">
				<header className="mb-8">
					<h1 className="text-2xl font-bold text-gray-800">
						Doctor Booking System
					</h1>
				</header>
				<div className="mb-6 flex items-center justify-center gap-1">
					<Button
						onClick={() => setActiveTab("doctors")}
						className={`px-4 py-2 ${activeTab === "doctors" ? "border-b-2 border-blue-500" : ""}`}
						aria-current={activeTab === "doctors" ? "page" : undefined}
						variant={activeTab === "doctors" ? "solid" : "outline"}
						endIcon={activeTab === "doctors" ? <IoMdCheckmark /> : undefined}
					>
						Find Doctors
					</Button>
					<Button
						onClick={() => setActiveTab("appointments")}
						className={`px-4 py-2 ${activeTab === "appointments" ? "border-b-2 border-blue-500" : ""}`}
						aria-current={activeTab === "appointments" ? "page" : undefined}
						variant={activeTab === "appointments" ? "solid" : "outline"}
						endIcon={
							activeTab === "appointments" ? <IoMdCheckmark /> : undefined
						}
					>
						My Appointments
					</Button>
				</div>

				{activeTab === "doctors" ? (
					<>
						<div className="mb-6 flex items-center gap-2">
							<label htmlFor="specialty" className="block mb-2">
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
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
							{filteredDoctors.map((doctor) => (
								<DoctorCard
									key={doctor.id}
									doctor={doctor}
									onBook={() => handleBookClick(doctor)}
								/>
							))}
						</div>
						{filteredDoctors.length === 0 ? (
							<div className="flex items-center justify-center w-full h-[500px]">
								<p className="text-gray-500 flex items-center gap-2">
									we don&apos;t have doctors for this filters{" "}
									<RiFilterOffLine />
								</p>
							</div>
						) : null}
					</>
				) : (
					<AppointmentsList />
				)}

				<BookingModal />
			</div>
		</div>
	);
};

export default DoctorsModule;
