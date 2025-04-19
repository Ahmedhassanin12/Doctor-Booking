import type { Appointment } from "@/types/appointment.type";
import type { Doctor } from "@/types/doctor.type";
import { mutative } from "zustand-mutative";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";


type BookingState = {
  appointments: Appointment[];
  selectedDoctor: Doctor | null;
  selectedTime: string | null;
  isModalOpen: boolean;
}
type BookingActions = {
  addAppointment: (appointment: Appointment) => void;
  setSelectedDoctor: (doctor: Doctor | null) => void;
  setSelectedTime: (time: string | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

type BookingStore = BookingState & BookingActions

const initialState: BookingState = { appointments: [], selectedDoctor: null, selectedTime: null, isModalOpen: false }

export const useBookingStore = createWithEqualityFn(
  mutative<BookingStore>((set) => ({
    ...initialState,
    addAppointment: (appointment) => set((state) => {
      state.appointments = [...state.appointments, appointment]
    }),
    setSelectedDoctor: (doctor) => set((state) => {
      state.selectedDoctor = doctor
    }),
    setSelectedTime: (time) => set((state) => {
      state.selectedTime = time
    }),
    setIsModalOpen: (isOpen) => set((state) => {
      state.isModalOpen = isOpen
    })
  })),
  shallow,
);