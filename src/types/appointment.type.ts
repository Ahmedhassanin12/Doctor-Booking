import type { Specialties } from "./specialties.type";

export type Appointment = {
  doctorId: string;
  doctorName: string;
  specialty: Specialties;
  location: string;
  dateTime: string;
}