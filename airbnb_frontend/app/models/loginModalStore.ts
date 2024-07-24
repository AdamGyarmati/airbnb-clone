export interface LoginModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}