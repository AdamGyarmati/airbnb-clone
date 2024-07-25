import { CategoriesProps } from "@/app/props/categoriesProps";
import React from "react";
import Image from "next/image";

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
      <div
        onClick={() => setCategory("Beach")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Beach' ? 'border-gray-800 hover:border-gray-800 opacity-100' : 'border-white opacity-60'}  hover:border-gray-200 hover:opacity-100 transition duration-200`}
      >
        <Image src="/pool-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Beach</span>
      </div>

      <div
        onClick={() => setCategory("Villas")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Villas' ? 'border-gray-800 hover:border-gray-800 opacity-100' : 'border-white opacity-60'}  hover:border-gray-200 hover:opacity-100 transition duration-200`}
      >
        <Image src="/villas-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Villas</span>
      </div>

      <div
        onClick={() => setCategory("Cabins")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Cabins' ? 'border-gray-800 hover:border-gray-800 opacity-100' : 'border-white opacity-60'}  hover:border-gray-200 hover:opacity-100 transition duration-200`}
      >
        <Image src="/cabin-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Cabins</span>
      </div>

      <div
        onClick={() => setCategory("Tiny House")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Tiny House' ? 'border-gray-800 hover:border-gray-800 opacity-100' : 'border-white opacity-60'}  hover:border-gray-200 hover:opacity-100 transition duration-200`}
      >
        <Image src="/littlehouse-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Tiny House</span>
      </div>
      </div>
    </>
  )
}

export default Categories;