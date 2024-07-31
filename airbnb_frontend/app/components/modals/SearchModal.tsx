"use client";

import Modal from "./Modal";
import useSearchModal from "@/app/hooks/useSearchModal";
import SelectCountry from "../forms/SelectCountry";
import { SelectCountryValue } from "@/app/types/selectCountryValue";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import { Range } from "react-date-range";
import DatePicker from "../forms/Calendar";
import { SearchQuery } from "@/app/types/SearchQuery";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection"
}

const SearchModal = () => {
  const searchModal = useSearchModal();
  const [country, setCountry] = useState<SelectCountryValue>();
  const [dateRange, setDateRange] = useState<Range>(initialDateRange)
  const [numGuests, setNumGuests] = useState<string>("1")
  const [numBedrooms, setNumBedrooms] = useState<string>("0")
  const [numBathrooms, setNumBeathrooms] = useState<string>("0")
  let content = (<></>);

  const closeAndSearch = () => {
    const newSearchQuery: SearchQuery = {
      country: country?.label,
      checkIn: dateRange.startDate,
      checkOut: dateRange.endDate,
      guests: parseInt(numGuests),
      bedrooms: parseInt(numBedrooms),
      bathrooms: parseInt(numBathrooms),
      category: "",
    }

    searchModal.setQuery(newSearchQuery);
    searchModal.close();
  }

  const contentLocation = (
    <>
      <h2 className="mb-6 text-2xl">Where do you want to go?</h2>

      <SelectCountry
        value={country}
        onChange={(value) => setCountry(value as SelectCountryValue)}
      />

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check in date ->"
          onClick={() => searchModal.open("checkin")}
        />
      </div>
    </>
  )

  const contentCheckin = (
    <>
      <h2 className="mb-6 text-2xl">When do you want to check in?</h2>

      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mt-6 flex flex-row gap-4">
      <CustomButton
          label="<- Location"
          onClick={() => searchModal.open("location")}
        />
        <CustomButton
          label="Check out date ->"
          onClick={() => searchModal.open("checkout")}
        />
      </div>
    </>
  )

  const contentCheckout = (
    <>
      <h2 className="mb-6 text-2xl">When do you want to check out?</h2>

      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mt-6 flex flex-row gap-4">
      <CustomButton
          label="<- Check in date"
          onClick={() => searchModal.open("checkin")}
        />
        <CustomButton
          label="Details ->"
          onClick={() => searchModal.open("details")}
        />
      </div>
    </>
  )

  const contentDetails = (
    <>
      <h2 className="mb-6 text-2xl">Details</h2>

      <div className="space-y-4">
        <div className="space-y-4">
          <label>Number of guests:</label>
          <input
            type="number"
            min="1"
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
            className="w-full h-14 px-4 border border-gray-300 rounded-xl"
            placeholder="Number of guests."
          />
        </div>

        <div className="space-y-4">
          <label>Number of bedrooms:</label>
          <input
            type="number"
            min="1"
            value={numBedrooms}
            onChange={(e) => setNumBedrooms(e.target.value)}
            className="w-full h-14 px-4 border border-gray-300 rounded-xl"
            placeholder="Number of bedrooms."
          />
        </div>

        <div className="space-y-4">
          <label>Number of bathrooms:</label>
          <input
            type="number"
            min="1"
            value={numBathrooms}
            onChange={(e) => setNumBeathrooms(e.target.value)}
            className="w-full h-14 px-4 border border-gray-300 rounded-xl"
            placeholder="Number of bathrooms."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-row gap-4">
      <CustomButton
          label="<- Check out"
          onClick={() => searchModal.open("checkout")}
        />
        <CustomButton
          label="Search"
          onClick={closeAndSearch}
        />
      </div>
    </>
  )

  if (searchModal.step === "location") {
    content = contentLocation;
  }

  if (searchModal.step === "checkin") {
    content = contentCheckin;
  }

  if (searchModal.step === "checkout") {
    content = contentCheckout;
  }

  if (searchModal.step === "details") {
    content = contentDetails;
  }

  const _setDateRange = (selection: Range) => {
    if (searchModal.step === "checkin") {
      searchModal.open("checkout");
    } else if (searchModal.step === "checkout") {
      searchModal.open("details");
    }

    setDateRange(selection);
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      close={searchModal.close}
      label="Search"
      content={content}
    />
  )
}

export default SearchModal;