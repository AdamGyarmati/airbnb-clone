"use client";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { AddPropertyButtonProps } from "@/app/props/addPropertyButtonProps";
import React from "react";

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId,
}) => {
  const addPropertyModel = useAddPropertyModal();
  const loginModel = useLoginModal();
  const airbnbYourHome = () => {
    if (userId) {
      addPropertyModel.open();
    } else {
      loginModel.open();
    }
  }

  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200 transition duration-200"
    >
      Djangobnb your home
    </div>
  )
}

export default AddPropertyButton;