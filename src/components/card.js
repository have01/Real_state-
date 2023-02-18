import React from "react";

const card = ({ item }) => {
  return (
    <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src={item?.imgSrc}
          alt=""
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
          {item?.property} {item?.homeStatus}
        </span>
        <h2 className="mt-2 mb-2  font-bold">Palm Harbour </h2>

        <div className="mt-3 flex items-center">
          &nbsp;
          <span className="font-bold text-xl">{item?.price}</span>&nbsp;
          <span className="text-sm font-semibold">$</span>
        </div>
      </div>
      <div className="p-4 border-t border-b text-xs font-bold">
        <span className="flex items-center justify-around mb-1">
          <p classNameName="font-bold"> Bedrooms</p>

          <p classNameName="font-bold">{item?.bathrooms} Bathroom</p>
          <p classNameName="font-bold">
            {" "}
            {item?.lotAreaValue}
            {item?.lotAreaUnit}
          </p>
        </span>
        <span class="flex items-center pl-1">
          {item?.streetAddress},{item?.state}
        </span>
      </div>
    </div>
  );
};

export default card;
