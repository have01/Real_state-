import React, { useState } from "react";
import Select from "react-select";
import "../index.css";
import {
  cities,
  propertyOption,
  price,
  area,
} from "../DummyData/filteroptiondata";
const Search = (props) => {
  return (
    <div className="select__Contianer mt-10">
      <div className="min-h-[10vh]  w-[70vw] container flex  max-[640px]:flex-col  items-center justify-around  ">
        <Select
          defaultValue={props.selectedLocation}
          onChange={props.setSelectedLocation}
          options={cities}
          placeholder="City"
          className="font-sans text-slate-600 font-normal container max-[640px]:m-2"
        />
        <Select
          defaultValue={props.selectedPrice}
          onChange={props.setSelectedPrice}
          options={price}
          placeholder="Price"
          className="font-sans text-slate-600 font-normal container max-[640px]:m-2"
        />
        <Select
          defaultValue={props.selectedProperty}
          onChange={props.setSelectedProperty}
          options={propertyOption}
          placeholder="Property Type"
          className="font-sans text-slate-600 font-normal container max-[640px]:m-2"
        />
        <Select
          defaultValue={props.area}
          onChange={props.setarea}
          options={area}
          placeholder="Area"
          className="font-sans text-slate-600 font-normal container max-[640px]:m-2"
        />
        <button
          onClick={props.filterdata}
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
