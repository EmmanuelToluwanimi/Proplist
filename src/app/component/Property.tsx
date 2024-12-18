import { placeholder } from "@/utils";
import { IProperty } from "@/utils/interface";
import React from "react";

export default function Property({ property }: { property: IProperty }) {
  return (
    <div role="button" className="border rounded-md shadow-md p-4">
      <img
        src={property.imageUrl || placeholder}
        alt={property.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">
        <span className="text-xs text-gray-400 pr-3">Name:</span>
        {property.name}
      </h2>
      <p className="text-sm text-gray-600">
        <span className="text-xs text-gray-400 pr-3">Address:</span>
        {property.address}
      </p>
      <p className="text-sm text-gray-600">
        <span className="text-xs text-gray-400 pr-3">Type:</span>
        {property.propertyType}
      </p>
      <p className=" text-gray-800 text-lg font-bold mt-2">{property.price}</p>
    </div>
  );
}
