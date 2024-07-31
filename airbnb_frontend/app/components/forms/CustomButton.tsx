import { CustomButtonProps } from "@/app/props/customButtonProps";

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white text-center rounded-xl transition duration-200 cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
}

export default CustomButton;