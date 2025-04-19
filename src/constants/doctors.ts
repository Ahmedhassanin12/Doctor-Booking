import type { Doctor } from "@/types/doctor.type";
import DoctorOne from "../../public/images/doctor-1.avif"
import DoctorTwo from "../../public/images/doctor-2.jpg"
import DoctorThree from "../../public/images/doctor-3.jpg"
import DoctorFour from "../../public/images/doctor-4.avif"
import DoctorFive from "../../public/images/doctor-5.jpg"
import DoctorSix from "../../public/images/doctor-6.avif"

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ahmed Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    availability: ["2025-05-10T09:00", "2025-05-10T11:00", "2025-05-11T14:00"],
    location: "Downtown Medical Center",
    photo: DoctorOne.src,
  },
  {
    id: "2",
    name: "Dr. Kareem Ash",
    specialty: "Orthopedics",
    rating: 4.5,
    availability: ["2025-05-10T09:00", "2025-05-10T11:00", "2025-05-11T14:00"],
    location: "Downtown Medical Center",
    photo: DoctorTwo.src,
  },
  {
    id: "3",
    name: "Dr. Ibrahim Ahmed",
    specialty: "Dermatology",
    rating: 4.3,
    availability: ["2025-05-10T09:00", "2025-05-10T11:00", "2025-05-11T14:00"],
    location: "Downtown Medical Center",
    photo: DoctorThree.src,
  },
  {
    id: "4",
    name: "Dr. Arianna Magdy",
    specialty: "Neurology",
    rating: 4.8,
    availability: ["2025-05-10T09:00", "2025-05-10T11:00", "2025-05-11T14:00"],
    location: "Downtown Medical Center",
    photo: DoctorFour.src,
  },
  {
    id: "5",
    name: "Dr. Rana Mohammed",
    specialty: "Neurology",
    rating: 4.7,
    availability: ["2025-05-10T09:00", "2025-05-10T11:00", "2025-05-11T14:00"],
    location: "Downtown Medical Center",
    photo: DoctorFive.src,
  },
  {
    id: "6",
    name: "Dr. Esraa Mostafa",
    specialty: "Orthopedics",
    rating: 4.3,
    availability: ["2025-05-10T09:00", "2025-05-10T11:00", "2025-05-11T14:00"],
    location: "Downtown Medical Center",
    photo: DoctorSix.src,
  },
];