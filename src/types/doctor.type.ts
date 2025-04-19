import type { Specialties } from "./specialties.type";

export interface Availability {
  date: string; // "YYYY-MM-DD"
  times: string[]; // ["09:00", "11:00", "14:00"]
}


export interface Doctor {
  id: string;
  name: string;
  specialty: Specialties;
  rating: number;
  availability: Availability[];
  location: string;
  photo: string;
}