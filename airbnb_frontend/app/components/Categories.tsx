"use client";

import { useState } from "react";
import Image from "next/image";
import useSearchModal from "../hooks/useSearchModal";
import { SearchQuery } from "../types/SearchQuery";

const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      bedrooms: searchModal.query.bedrooms,
      bathrooms: searchModal.query.bathrooms,
      category: _category
    };

    searchModal.setQuery(query);
  }

  return(
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">

      <div
        onClick={() => _setCategory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == "" ? "border-black opacity-100" : "border-white opacity-60 hover:border-gray-200 hover:opacity-100"} transition duration-200`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <span className="text-xs">All</span>
      </div>

      <div
        onClick={() => _setCategory("Beach")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == "Beach" ? "border-black opacity-100" : "border-white opacity-60 hover:border-gray-200 hover:opacity-100"} transition duration-200`}
      >
        <Image src="/pool-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Beach</span>
      </div>

      <div
        onClick={() => _setCategory("Villas")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == "Villas" ? "border-black opacity-100" : "border-white opacity-60 hover:border-gray-200 hover:opacity-100"} transition duration-200`}
        >
        <Image src="/villas-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Villas</span>
      </div>

      <div
        onClick={() => _setCategory("Cabins")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == "Cabins" ? "border-black opacity-100" : "border-white opacity-60 hover:border-gray-200 hover:opacity-100"} transition duration-200`}
        >
        <Image src="/cabin-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Cabins</span>
      </div>

      <div
        onClick={() => _setCategory("Tiny House")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == "Tiny House" ? "border-black opacity-100" : "border-white opacity-60 hover:border-gray-200 hover:opacity-100"} transition duration-200`}
        >
        <Image src="/littlehouse-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Tiny House</span>
      </div>
    </div>
  );
}

export default Categories;