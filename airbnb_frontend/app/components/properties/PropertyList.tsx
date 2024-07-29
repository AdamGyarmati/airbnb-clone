"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import { PropertyModel } from "@/app/models/propertyModel";
import apiService from "@/app/services/apiService";
import { PropertyListProps } from "@/app/props/propertyListProps";

const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
}) => {
  const [properties, setProperties] = useState<PropertyModel[]>([]);
  const getProperties = async () => {
    let url = `/api/properties/`;

    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`
    }

    const tmpPorperties = await apiService.get(url);

    setProperties(tmpPorperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return(
    <>
    {properties.map((property : PropertyModel) => {
      return (
        <PropertyListItem
          key={property.id}
          property={property}
          />
      )
    })}
    </>
  )
}

export default PropertyList;