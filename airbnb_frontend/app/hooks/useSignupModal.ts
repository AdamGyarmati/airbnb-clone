import { create } from "zustand";
import { SignupModalStore } from "../models/signupModalStore";

const useSignupModal = create<SignupModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useSignupModal;