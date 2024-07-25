"use client";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
  const router = useRouter();
  const signupModal = useSignupModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password,
      password2: retypedPassword,
    };

    const url = "/api/auth/register/";

    const response = await apiService.post(url, formData);

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      signupModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  }

  const content = (
    <>
      <form
        action={submitSignup}
        className="space-y-4"
      >
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Your email address"/>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Your password"/>
        <input onChange={(e) => setRetypedPassword(e.target.value)} type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Repeat your password"/>

        {errors.map((error, index) => {
          return (
            <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
              {error}
            </div>
            )
          })
        }

        <CustomButton
          label="Submit"
          onClick={submitSignup}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  )
}

export default SignupModal;