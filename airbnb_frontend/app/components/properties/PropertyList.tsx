"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import { PropertyModel } from "@/app/models/propertyModel";
import apiService from "@/app/services/apiService";
import { url } from "inspector";

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyModel[]>([]);
  const url = "/api/properties/";
  const getProperties = async () => {
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