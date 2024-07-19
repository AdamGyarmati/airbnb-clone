"use client";

import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const LoginModal = useLoginModal();
  const content = (
    <>
      <form className="space-y-4">
        <input type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Your email address"/>
        <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Your password"/>

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>

        <CustomButton
          label="Submit"
          onClick={() => console.log("click")}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={LoginModal.isOpen}
      close={LoginModal.close}
      label="Log in"
      content={content}
    />
  )
}

export default LoginModal;