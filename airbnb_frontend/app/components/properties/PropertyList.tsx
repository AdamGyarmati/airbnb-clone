"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import { PropertyModel } from "@/app/models/propertyModel";
import apiService from "@/app/services/apiService";
import { PropertyListProps } from "@/app/props/propertyListProps";
import useSearchModal from "@/app/hooks/useSearchModal";
import { format } from "date-fns";

const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
  favorites,
}) => {
  const [properties, setProperties] = useState<PropertyModel[]>([]);
  const searchModal = useSearchModal();
  const country = searchModal.query.country;
  const numGuests = searchModal.query.guests;
  const numBathrooms = searchModal.query.bathrooms;
  const numBedrooms = searchModal.query.bedrooms;
  const checkinDate = searchModal.query.checkIn;
  const checkoutDate = searchModal.query.checkOut;
  const category = searchModal.query.category;

  const markFavorite = (id: string, is_favorite:boolean) => {
    const tmpPorperties = properties.map((property: PropertyModel) => {
      if (property.id === id) {
        property.is_favorite = is_favorite;

        if (is_favorite) {
          console.log("added to list of favorited proeprties.");
        } else {
          console.log("removed from list of favorited proeprties.");
        }
      }

      return property;
    })

    setProperties(tmpPorperties);
   }

  const getProperties = async () => {
    let url = `/api/properties/`;

    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`
    } else if (favorites) {
      url += "?is_favorites=true"
    } else {
      let urlQuery = "";

      if (country) {
        urlQuery += "&country=" + country;
      }
      if (numGuests) {
        urlQuery += "&numGuests=" + numGuests;
      }
      if (numBathrooms) {
        urlQuery += "&numBathrooms=" + numBathrooms;
      }
      if (numBedrooms) {
        urlQuery += "&numBedrooms=" + numBedrooms;
      }
      if (checkinDate) {
        urlQuery += "&checkin=" + format(checkinDate, "yyyy-MM-dd");
      }
      if (checkoutDate) {
        urlQuery += "&checkout=" + format(checkoutDate, "yyyy-MM-dd");
      }
      if (category) {
        urlQuery += "&category=" + category;
      }

      if (urlQuery.length) {
        console.log("Query", urlQuery);

        urlQuery = "?" + urlQuery.substring(1);

        url += urlQuery;
      }
    }

    const tmpPorperties = await apiService.get(url);

    setProperties(tmpPorperties.data.map((property: PropertyModel) => {
      if (tmpPorperties.favorites.includes(property.id)) {
        property.is_favorite = true;
      } else {
        property.is_favorite = false;
      }
      return property;
    }));
  };

  useEffect(() => {
    getProperties();
  }, [category, searchModal.query]);

  return(
    <>
    {properties.map((property : PropertyModel) => {
      return (
        <PropertyListItem
          key={property.id}
          property={property}
          markFavorite={(is_favorite: any) => markFavorite(property.id, is_favorite)}
        />
      )
    })}
    </>
  )
}

export default PropertyList;