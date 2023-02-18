import React, { useState } from "react";
import { data } from "../DummyData/data";
import Search from "../components/Search";
import Header from "../components/Header";
import Propertycard from "../components/Propertycard";
import Notfound from "../components/Notfound";

const Home = () => {
  const [propeties] = useState(data);
  const [getFilterResult, setGetFilterResult] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  const [selectedProperty, setSelectedProperty] = useState();
  const [area, setarea] = useState();
  const filterdata = () => {
    let newData;
    const cityValue = selectedLocation?.value;
    const propertyValue = selectedProperty?.value;
    const priceValue = selectedPrice?.value;
    const propertyArea = area?.value;

    if (cityValue && priceValue) {
      newData = data?.results.filter(
        (item) =>
          item?.city === cityValue &&
          item?.price >= priceValue[0] &&
          item?.price <= priceValue[1] &&
          item?.property === propertyValue &&
          item?.lotAreaValue >= propertyArea
      );
      setGetFilterResult(newData);
      setResultsFound(false);
      console.log(newData);
    }
  };
  return (
    <>
      <div className="container flex flex-col items-center justify-center max-w-full mx-auto  ">
        <Header />
        <Search
          area={area}
          setarea={setarea}
          setSelectedLocation={setSelectedLocation}
          selectedLocation={selectedLocation}
          filterdata={filterdata}
          setSelectedPrice={setSelectedPrice}
          selectedPrice={selectedPrice}
          selectedProperty={selectedProperty}
          setSelectedProperty={setSelectedProperty}
        />
        <div class="container mt-4 mx-auto">
          <div class="container grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 space-x-5 max-w-7xl mx-auto  ">
            {resultsFound ? (
              propeties?.results?.map((item) => {
                return <Propertycard item={item} />;
              })
            ) : getFilterResult?.length !== 0 ? (
              getFilterResult?.map((item) => {
                return <Propertycard item={item} />;
              })
            ) : (
              <Notfound />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
