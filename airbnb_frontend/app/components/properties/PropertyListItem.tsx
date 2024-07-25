import Image from "next/image";
import { PropertyProps } from "@/app/props/propertyProps";

const PropertyListItem: React.FC<PropertyProps> = ({
  property
}) => {
  return(
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          priority
          width={0}
          src={property.image_url}
          alt="A picture of a house with pool"
          sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
          className="hover:scale-110 object-cover transition duration-200 h-full w-full">
        </Image>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500"><strong>${property.price_per_night}</strong> per night</p>
      </div>
    </div>
  )
}

export default PropertyListItem;