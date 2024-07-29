import Image from "next/image";
import { PropertyProps } from "@/app/props/propertyProps";
import { useRouter } from "next/navigation";
import FavoriteButton from "../FavoriteButton";

const PropertyListItem: React.FC<PropertyProps> = ({
  property,
  markFavorite
}) => {

  const router = useRouter();

  return(
    <div
      onClick={() => router.push(`/properties/${property.id}`)}
      className="cursor-pointer"
    >
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

        {markFavorite && (
          <FavoriteButton
            id={property.id}
            is_favorite={property.is_favorite}
            markFavorite={(is_favorite) => markFavorite(is_favorite)}
          />
        )}
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