import React from "react";
import Map from "../../../assets/map.svg";
import Image from "next/image";

const Direction = () => {
  return (
    <div className="mx-auto w-[90%] pt-20">
      <h1 className="pb-9 text-[28px] font-bold ">DIRECTIONS</h1>
      <div className="relative">
        <iframe
          width="100%"
          height="500px"
          title="map"
          className=" inset-0"
          style={{ filter: "opacity(0.7)" }}
          src="https://www.google.com/maps/embed/v1/place?q=76+Chime+Avenue,+New+Haven,+Enugu,+Nigeria.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  );
};

export default Direction;
