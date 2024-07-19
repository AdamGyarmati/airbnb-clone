"use client";

import { MenuLinkProps } from "@/app/types/menuLinkProps";

const MenuLink: React.FC<MenuLinkProps> = ({
  label,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="px-5 py-4 cursor-pointer hover:bg-gray-100 transition duration-200"
    >
      {label}
    </div>

  );
}

export default MenuLink;