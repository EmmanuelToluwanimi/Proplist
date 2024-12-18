import { IProperty } from "@/utils/interface";
import React from "react";

export default function Property({ property }: { property: IProperty }) {
  return (
    <div role="button" className="border rounded-md shadow-md p-4">
      <img
        src={property.imageUrl || "/placeholder.png"}
        alt={property.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{property.name}</h2>
      <p className="text-sm text-gray-600">{property.address}</p>
      <p className="text-sm text-gray-600">{property.propertyType}</p>
      <p className="text-sm text-gray-800 font-bold">{property.price}</p>
    </div>
  );
}
