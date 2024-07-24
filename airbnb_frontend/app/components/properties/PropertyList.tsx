"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import { PropertyModel } from "@/app/models/propertyModel";

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyModel[]>([]);
  const getProperties = async () => {
    const url = "http://localhost:8000/api/properties/";

    await fetch(url, {
      method: "GET",
    })
      .then(response => response.json())
      .then((json) => {
        console.log(json);

        setProperties(json.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getProperties()
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