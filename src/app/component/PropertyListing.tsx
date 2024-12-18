"use client";
import { ApiGetProperties } from "@/utils/api";
import { IPaginationData, IProperty } from "@/utils/interface";
import React, { useEffect, useState } from "react";
import Property from "./Property";

export default function PropertyListing() {
  const [paging, setPaging] = useState({
    limit: 10,
    offset: 0,
  });
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [pagination, setPagination] = useState<Partial<IPaginationData>>();

  async function FetchData() {
    setLoading(true);
    try {
      const payload = await ApiGetProperties(paging);
      setProperties(payload.data.list);
      setPagination(payload.data.pagination);
    } catch (error) {
      console.log(error);
      seterrorMessage("Error fetching properties!");
    }
    setLoading(false);
  }

  const handleNextPage = () => {
    setPaging({ ...paging, offset: paging.offset + paging.limit });
  };

  const handlePreviousPage = () => {
    const offset = paging.offset - paging.limit;
    setPaging({ ...paging, offset: offset < 0 ? 0 : offset });
  };

  useEffect(() => {
    FetchData();
  }, [paging]);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Property Listings</h1>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={pagination?.hasPrevPage}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
          onClick={handleNextPage}
          disabled={pagination?.hasNextPage}
        >
          Next
        </button>
      </div>
    </section>
  );
}
