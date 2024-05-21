import React from "react";
import Image from "next/image";
import { CiSaveDown2 } from "react-icons/ci";
import WildCard from "../components/WildCard";
import cardImage from "@/app/assets/wildcardimage.svg";
import graph from "@/app/assets/graph.png";
import doghnurt from "@/app/assets/donught.svg";
import cardEyeImage from "@/app/assets/cardeye.png";
import SaveImage from "@/app/assets/total.png";
import { Bar } from "react-chartjs-2";
import SmallCard from "../components/SmallCard";
import { Doughnut } from "react-chartjs-2";
import { data } from "@/app/components/charts/Doughnut";
import { options } from "@/app/components/charts/Barchat";
import { barData } from "@/app/components/charts/Barchat";
import growthImage from "@/app/assets/growth.png";
import VisitorImage from "@/app/assets/visitors.png";
import PageViewImage from "@/app/assets/pageview.png";

const DashBoardTop = () => {
  return (
    <main className=" mb-12 mt-7 border-[1px] border-primary px-7 py-7">
      <section className="mt-6 flex items-center justify-between ">
        <WildCard
          cardText="Properties"
          cardNumber="150"
          cardIcon={<CiSaveDown2 />}
          cardTitle="ALL PROPERTIES"
          cardImage={cardImage}
          className="w-[22%]"
        />{" "}
        <WildCard
          cardText="Properties"
          cardNumber="150"
          cardIcon={<CiSaveDown2 />}
          cardTitle="TOTAL SAVED"
          cardImage={cardImage}
          className="w-[22%]"
        />{" "}
        <WildCard
          cardText="Properties"
          cardNumber="150"
          cardIcon={<CiSaveDown2 />}
          cardTitle="TOTAL SAVED"
          cardImage={SaveImage}
          className="w-[22%]"
        />{" "}
        <WildCard
          cardText="Properties"
          cardNumber="150"
          cardIcon={<CiSaveDown2 />}
          cardTitle="GROWTH RATE"
          cardImage={growthImage}
          className="w-[22%]"
        />
      </section>
      <section className="mt-16 flex items-center gap-6">
        <div className="h-[400px] rounded-md bg-white px-4 py-4 shadow-md md:w-[35%]">
          <p className="font-medium">Daily Inquiry</p>
          <Doughnut data={data} redraw={true} />
        </div>
        <div className="h-[400px] rounded-md bg-white px-4 py-4 shadow-md md:w-[35%]">
          <p className="font-medium">Property Stats</p>
          <Bar options={options} data={barData} redraw={true} width="100%" />
        </div>
        <div className="rounded-md bg-white px-4 py-4 shadow-md md:w-[30%]">
          <iframe
            width="100%"
            height="500px"
            title="map"
            className=" inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=76+Chime+Avenue,+New+Haven,+Enugu,+Nigeria.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </section>
      <section className="flex items-center justify-between pt-12">
        <SmallCard
          cardImage={cardEyeImage}
          cardText="Sessions"
          cardNumber="500"
          className=" min-h-[100px] w-[30%]  px-4 py-6"
        />
        <SmallCard
          cardImage={VisitorImage}
          cardText="Sessions"
          cardNumber="500"
          className=" min-h-[100px] w-[30%]  px-4 py-6"
        />
        <SmallCard
          cardImage={PageViewImage}
          cardText="Sessions"
          cardNumber="500"
          className=" min-h-[100px] w-[30%]   px-4 py-6"
        />
      </section>
    </main>
  );
};

export default DashBoardTop;
