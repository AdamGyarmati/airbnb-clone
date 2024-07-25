export interface ModalProps {
  label: string;
  close: () => void;
  content: React.ReactElement;
  isOpen: boolean;
}