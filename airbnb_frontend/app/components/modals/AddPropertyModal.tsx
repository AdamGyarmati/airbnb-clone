"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import Categories from "../addproperty/Cagetories";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState(0);
  const [dataBedrooms, setDataBedrooms] = useState(0);
  const [dataBathrooms, setDataBathrooms] = useState(0);
  const [dataGuests, setDataGuests] = useState(0);

  const addPropertyModal = useAddPropertyModal();

  const setCategory = (category: string) => {
    setDataCategory(category);
  }

  const content = (
    <>
      {currentStep == 1 ? (
        <>
            <h2 className="mb-6 text-2xl">Choose category</h2>

            <Categories
              dataCategory={dataCategory}
              setCategory={(category) => setCategory(category)}
            />

            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(2)}
            />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e => setDataTitle(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <input
                type="text"
                value={dataDescription}
                onChange={(e => setDataDescription(e.target.value))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>

          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(1)}
          />

          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(3)}
          />
        </>
      ) : currentStep == 3 ? (
        <>
           <h2 className="mb-6 text-2xl">Details</h2>

           <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Price per night</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e => setDataPrice(parseInt(e.target.value)))}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>

          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(2)}
          />

          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(4)}
          />
        </>
      ) : (
        <p>Step 4</p>
      )}

    </>
  )

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label="Add property"
        content={content}
      />
    </>
  )
}

export default AddPropertyModal;
