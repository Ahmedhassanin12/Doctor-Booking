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
  isTimeSlotBooked: (doctorId: string, dateTime: string) => boolean;
  cancelAppointment: (index: number) => void
}

type BookingStore = BookingState & BookingActions

const initialState: BookingState = { appointments: [], selectedDoctor: null, selectedTime: null, isModalOpen: false }

export const useBookingStore = createWithEqualityFn(
  mutative<BookingStore>((set, get) => ({
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
    }),
    isTimeSlotBooked: (doctorId, dateTime) => {
      return get().appointments.some(
        appointment => appointment.doctorId === doctorId && appointment.dateTime === dateTime
      );
    },
    cancelAppointment: (index) => set(state => {
      state.appointments = state.appointments.filter((_el, idx) => index !== idx)
    })
  })),
  shallow,
);