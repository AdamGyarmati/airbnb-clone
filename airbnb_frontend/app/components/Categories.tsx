import Image from "next/image";

const Categories = () => {
  return(
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
        <Image src="/pool-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Beach</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
        <Image src="/villas-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Villas</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
        <Image src="/cabin-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Cabins</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 transition duration-200">
        <Image src="/littlehouse-icon.jpg" alt="A pool icon" width={25} height={25}></Image>
        <span className="text-xs ">Tiny House</span>
      </div>
    </div>
  );
}

export default Categories;