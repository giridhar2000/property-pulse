import React from "react";
import bed from "@/assets/images/bed.svg";
import bath from "@/assets/images/bath.svg";
import measure from "@/assets/images/measure.svg";
import Image from "next/image";

const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-2">{property.type}</div>
        <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
        <p className="text-red-400 mb-2">
          {property?.location?.city}, {property?.location?.state}
        </p>
        <h1 className="bg-gray-800 text-lg text-white my-6 px-2">
          Rates & Options
        </h1>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center">
            Nightly
            {property?.rates?.nightly ? (
              <p className="px-2 text-2xl text-blue-500">
                ${property?.rates?.nightly?.toLocaleString()}
              </p>
            ) : (
              <p className="px-2 text-2xl font-bold text-red-500">&#10005;</p>
            )}
          </div>
          <div className="flex items-center">
            Weekly{" "}
            {property?.rates?.weekly ? (
              <p className="px-2 text-2xl text-blue-500">
                ${property?.rates?.weekly?.toLocaleString()}
              </p>
            ) : (
              <p className="px-2 text-2xl font-bold text-red-500">&#10005;</p>
            )}
          </div>
          <div className="flex items-center">
            Monthly{" "}
            {property?.rates?.monthly ? (
              <p className="px-2 text-2xl text-blue-500">
                ${property?.rates?.monthly?.toLocaleString()}
              </p>
            ) : (
              <p className="px-2 text-2xl font-bold text-red-500">&#10005;</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left my-6">
        <div className="font-bold mb-4">Description & Details</div>
        <div className="flex items-center justify-center gap-20 mb-6">
          <p className="text-gray-500 text-xl flex gap-2">
            <Image src={bed} alt="beg-img" width={15} />
            {property?.beds} Beds
          </p>
          <p className="text-gray-500 text-xl flex gap-2">
            <Image src={bath} alt="beg-img" width={15} />
            {property?.baths} Baths
          </p>
          <p className="text-gray-500 text-xl flex gap-2">
            <Image src={measure} alt="beg-img" width={15} />
            {property?.square_feet} sqft
          </p>
        </div>
        <div className="text-center">{property?.description}</div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left my-6">
        <div className="font-bold mb-4">Amenities</div>
        {property?.amenities?.map((value, index) => (
          <div key={index} className="flex gap-2">
            <p className="text-green-500">&#10003;</p> {value}
          </div>
        ))}
      </div>
    </main>
  );
};

export default PropertyDetails;
