import { create } from "zustand";
import { AddPropertyModalStore } from "../models/addPropertyModalStore";

const useAddPropertyModal = create<AddPropertyModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useAddPropertyModal;