import { create } from "zustand";
import { SearchModalStore } from "../models/searchModalStore";
import { SearchQuery } from "../types/SearchQuery";

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  open: (step) => set({ isOpen: true, step: step }),
  close: () => set({ isOpen: false }),
  query: {
    country: "",
    checkIn: null,
    checkOut: null,
    guests: 1,
    bathrooms: 0,
    bedrooms: 0,
    category: "",
  } ,
  setQuery: (query: SearchQuery) => set({query: query}),
  step: ""
}));

export default useSearchModal;