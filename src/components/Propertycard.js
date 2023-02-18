import React from "react";
import Card from "./card";
const Propertcard = ({ item }) => {
  return (
    <>
      <div className=" p-4 hover:scale-110 transition duration-300 ease-in ">
        <Card item={item} />
      </div>
    </>
  );
};

export default Propertcard;
