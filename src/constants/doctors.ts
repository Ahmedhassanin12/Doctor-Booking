import type { Doctor } from "@/types/doctor.type";
import DoctorOne from "../../public/images/doctor-1.avif"
import DoctorTwo from "../../public/images/doctor-2.jpg"
import DoctorThree from "../../public/images/doctor-3.jpg"
import DoctorFour from "../../public/images/doctor-4.avif"
import DoctorFive from "../../public/images/doctor-5.jpg"
import DoctorSix from "../../public/images/doctor-6.avif"
import { getToday, getTomorrow } from "@/utils/getToday";

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ahmed Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    availability: [
      { date: getToday(), times: ["09:00", "11:00", "13:00", "15:00"] },
      { date: getTomorrow(), times: ["12:00", "14:00"] }],
    location: "Downtown Medical Center",
    photo: DoctorOne.src,
  },
  {
    id: "2",
    name: "Dr. Kareem Ash",
    specialty: "Orthopedics",
    rating: 4.5,
    availability: [
      { date: getToday(), times: ["09:00", "11:00"] },
      { date: getTomorrow(), times: ["14:00"] }],
    location: "Downtown Medical Center",
    photo: DoctorTwo.src,
  },
  {
    id: "3",
    name: "Dr. Ibrahim Ahmed",
    specialty: "Dermatology",
    rating: 4.3,
    availability: [
      { date: getToday(), times: ["13:00", "14:00"] },
      { date: getTomorrow(), times: ["14:00"] }],
    location: "Downtown Medical Center",
    photo: DoctorThree.src,
  },
  {
    id: "4",
    name: "Dr. Arianna Magdy",
    specialty: "Neurology",
    rating: 4.8,
    availability: [
      { date: getToday(), times: ["15:00", "16:00"] },
      { date: getTomorrow(), times: ["14:00", "18:00"] }],
    location: "Downtown Medical Center",
    photo: DoctorFour.src,
  },
  {
    id: "5",
    name: "Dr. Rana Mohammed",
    specialty: "Neurology",
    rating: 4.7,
    availability: [
      { date: getToday(), times: ["09:00", "11:00"] },
      { date: getTomorrow(), times: ["14:00", "15:00"] }],
    location: "Downtown Medical Center",
    photo: DoctorFive.src,
  },
  {
    id: "6",
    name: "Dr. Esraa Mostafa",
    specialty: "Orthopedics",
    rating: 4.3,
    availability: [
      { date: getToday(), times: ["09:00", "11:00"] },
      { date: getTomorrow(), times: ["14:00", "16:00"] }],
    location: "Downtown Medical Center",
    photo: DoctorSix.src,
  },
];


export const AVAILABILITY_OPTIONS = [
  { id: "morning", label: "Morning (8AM-12PM)" },
  { id: "afternoon", label: "Afternoon (12PM-5PM)" },
  { id: "evening", label: "Evening (5PM-9PM)" },
  { id: "today", label: "Available Today" },
  { id: "tomorrow", label: "Available Tomorrow" },
];