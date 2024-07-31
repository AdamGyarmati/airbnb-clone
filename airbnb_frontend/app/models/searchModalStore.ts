import { SearchQuery } from "../types/SearchQuery";

export interface SearchModalStore {
  isOpen: boolean;
  open: (step: string) => void;
  close: () => void;
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
  step: string;
}