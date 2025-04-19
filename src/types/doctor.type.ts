import type { Specialties } from "./specialties.type";

export interface Doctor {
  id: string;
  name: string;
  specialty: Specialties;
  rating: number;
  availability: string[];
  location: string;
  photo: string;
}