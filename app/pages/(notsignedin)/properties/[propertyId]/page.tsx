"use client";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FiBold, FiItalic } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdLink, IoLogoWhatsapp } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "@/app/assets/propviewmore1.svg";
import Image2 from "@/app/assets/propviewmore2.svg";
import Image3 from "@/app/assets/propviewmore3.svg";
import Image4 from "@/app/assets/carousel1.svg";
import Image5 from "@/app/assets/carousel2.svg";
import Image6 from "@/app/assets/carousel3.svg";
import Location from "@/app/assets/location.svg";
import Calender from "@/app/assets/customimageblog.svg";
import Star from "@/app/assets/star.svg";
import Eye from "@/app/assets/eye.svg";
import Cart2 from "@/app/assets/cart2.svg";
import Car2 from "@/app/assets/car2.svg";
import El2 from "@/app/assets/El2.svg";
import Floor from "@/app/assets/floor.svg";
import Tick from "@/app/assets/Tick.svg";
import { IoCarOutline } from "react-icons/io5";
import TextField from "@/app/components/ui/inputs/custominput";
import Button from "@/app/components/ui/buttons";
import Man from "@/app/assets/man.svg";
import Woman from "@/app/assets/woman.svg";
import ArrowUp from "@/app/assets/arrowup.svg";
import ArrowDown from "@/app/assets/arrowdown.svg";
import Prof from "@/app/assets/prof.svg";
import MyTextArea from "@/app/components/ui/inputs/textarea";

interface carouselProps {
  id: number;
  image: string;
}
const CarouselContent: carouselProps[] = [
  {
    id: 1,
    image: Image4,
  },
  {
    id: 2,
    image: Image5,
  },
  {
    id: 1,
    image: Image6,
  },
  {
    id: 4,
    image: Image1,
  },
  {
    id: 5,
    image: Image2,
  },
  {
    id: 6,
    image: Image3,
  },
];
interface searchProps {
  text: string;
}

const ViewMoreProperty = ({ params }: { params: { propertyId: string } }) => {
  const { register, handleSubmit, control } = useForm<searchProps>();
  return (
    <div className="pt-40">
      <section className="flex h-[700px] w-full flex-col md:flex-row">
        <main className="h-full w-full  md:w-[40%] ">
          <Image src={Image1} alt="" className="h-full w-full object-cover" />
        </main>
        <main className="flex h-full w-full md:w-[60%] md:flex-col">
          <div className="flex-grow overflow-hidden">
            <Image src={Image2} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex-grow overflow-hidden">
            <Image src={Image3} alt="" className="h-full w-full object-cover" />
          </div>
        </main>
      </section>

      <section className=" flex h-[250px] items-center bg-[#023C63]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="h-[200px] px-9"
        >
          {CarouselContent.map((item) => (
            <div key={item.id} className=" mx-1 h-full">
              <Image
                src={item.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="mx-auto w-[92%]">
        <p className="leading-[40px]">Listed by Alice Realty</p>

        <main className="flex flex-col justify-between md:flex-row">
          <div className="w-[90%] md:w-[47%]">
            <section className="flex flex-col gap-y-4">
              <h1 className="text-3xl font-semibold">
                4 Bedroom Semi-Detached Duplex With BQ
              </h1>
              <div className="flex gap-4">
                <Image src={Location} alt="" />
                <p>123, Somewhere in Ajah, Lagos, Nigeria.</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src={Star} alt="" />
                <Image src={Star} alt="" />
                <Image src={Star} alt="" />
                <Image src={Star} alt="" />
                <Image src={Star} alt="" />
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Image src={Eye} alt="" />
                  <p>22 views</p>
                </div>{" "}
                <div className="flex items-center gap-2">
                  <Image src={Calender} alt="" />
                  <p>Jan 09, 2024</p>
                </div>
              </div>
            </section>

            <h1 className="pt-10 text-3xl font-semibold">Overview</h1>
            <section className="mt-4 flex min-h-[200px] items-center justify-between px-12 shadow-xlarge">
              <div className="flex flex-col items-center gap-4">
                <p>Bedroom</p>
                <Image src={Car2} alt="" />
                <h1>1 Rooms</h1>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p>Bathroom</p>
                <Image src={Cart2} alt="" />
                <h1>4 Baths</h1>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p>Square</p>
                <Image src={El2} alt="" />
                <h1>500 m²</h1>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p>Floors</p>
                <Image src={Floor} alt="" />
                <h1>1</h1>
              </div>
            </section>
            <section className="flex flex-col gap-y-5 pt-10">
              <h1 className="text-3xl font-semibold">Description</h1>
              <p className="leading-[28px]">
                A REWARDING ESCAPE PEACEFULLY SITUATED: Luxurious and upgraded,
                this 4 bedroom, 4.5 bathroom home of 5,281 sq. ft. (including
                poolhouse, per independent third-party measurement) rests on a
                lot of 1.23 acres (per county) on a peaceful cul-de-sac in the
                Lakeside neighborhood. Richly-appointed spaces include large
                gathering areas, a bright, professional-grade kitchen,
                spectacular dining room, two walk-out master suites, and a home
                theater. Contemporary amenities include solar PV and a Tesla EV
                charging station. The expansive backyard includes a sparkling
                pool and spa plus a comfortable poolhouse all in private,
                verdant surroundings.{" "}
              </p>
            </section>
            <section>
              <h1>Features</h1>
              <section className="min-h-[200px] shadow-xlarge">
                <div className="flex flex-wrap items-center gap-y-8 pl-6 pt-14">
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>Oven</p>
                  </div>{" "}
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>CCTV</p>
                  </div>{" "}
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>Jacuzzi</p>
                  </div>{" "}
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>Fully fitted Kitchen</p>
                  </div>{" "}
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>Microwave</p>
                  </div>{" "}
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>Video Bell</p>
                  </div>{" "}
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>Water heater</p>
                  </div>{" "}
                  <div className="flex w-[22%] items-center gap-1">
                    <Image src={Tick} alt="" />
                    <p>Pop ceiling</p>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <form
            action=""
            className="flex w-full flex-col gap-y-6 rounded-[10px] px-7 py-10 shadow-xlarge md:w-[47%]"
          >
            <h1 className="text-[28px] font-semibold">Contact Agent</h1>
            <div className="flex flex-col gap-y-9">
              <div className="flex items-center gap-x-4">
                <Image src={Prof} alt="" />
                <div>
                  <h1 className="font-bold ">Agent’s Name</h1>
                  <p>123 456 780 LAN</p>
                </div>
              </div>
              <main className="flex flex-col gap-y-6">
                <div>
                  <label htmlFor="">Name</label>
                  <TextField
                    control={control}
                    name="text"
                    placeholder="Enter name"
                    type="text"
                    rules={{
                      required: {
                        value: true,
                        message: "Matric Number is reuired",
                      },
                    }}
                    className="bg-whitw my-0 h-[50px] w-[95%] rounded-lg border-none"
                  />
                </div>{" "}
                <div>
                  <label htmlFor="">Phone</label>
                  <TextField
                    control={control}
                    name="text"
                    placeholder="Enter Phone Number"
                    type="text"
                    rules={{
                      required: {
                        value: true,
                        message: "Matric Number is reuired",
                      },
                    }}
                    className="bg-whitw my-0 h-[50px] w-[95%] rounded-lg border-none"
                  />
                </div>{" "}
                <div>
                  <label htmlFor="">Email</label>
                  <TextField
                    control={control}
                    name="text"
                    placeholder="Enter Email"
                    type="text"
                    rules={{
                      required: {
                        value: true,
                        message: "Matric Number is reuired",
                      },
                    }}
                    className="bg-whitw my-0 h-[50px] w-[95%] rounded-lg border-none"
                  />
                </div>{" "}
                <div>
                  <label htmlFor="">Message</label>
                  <Controller
                    control={control}
                    // rules={{
                    //   required: {
                    //     value: true,
                    //     message: "Name is required",
                    //   },
                    // }}
                    defaultValue=""
                    name="text"
                    render={({
                      field: { onChange, onBlur, value },
                      formState,
                    }) => (
                      <MyTextArea
                        placeholder="Message *"
                        cols={30}
                        rows={10}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
                <Button
                  variant="add"
                  size="md"
                  disabled={false}
                  text={"Send Email"}
                  className="h-[50px] w-full"
                />
                <div className="flex items-center gap-5">
                  <span className="flex h-[50px] w-[47%] items-center justify-center gap-2 border-2 border-[#023C63] text-[20px] font-semibold">
                    <FaPhoneAlt />
                    Call
                  </span>
                  <span className="flex h-[50px] w-[47%] items-center justify-center gap-2 border-2 border-[#023C63]  text-[20px]  font-semibold">
                    <SiWhatsapp />
                    Whatsapp
                  </span>
                </div>
              </main>
            </div>
          </form>
        </main>
      </section>

      <section className="mx-auto mt-8 w-[92%] px-6 pb-14 pt-12 shadow-xlarge ">
        <h1 className="pb-8 text-3xl font-semibold">Amenities</h1>
        <div className="flex flex-wrap gap-x-10 gap-y-11">
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Swimming pool
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            School Community
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Community Hospital
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            24 Hours security
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            CCTV protection
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Gymnasium
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Resident park
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Serviced apartment
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Sport facility
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Parking space
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Pantry
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Good title document
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Good Neighbourhood
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Beautiful ensuite rooms
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Housekeeping services
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Excellent location
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            Fully Fitted kitchen
          </p>{" "}
          <p className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center">
            24 hours electricity
          </p>
        </div>
      </section>

      <section className=" mx-auto mt-8 w-[92%] px-6 pb-14 pt-12">
        <div className="w-full rounded-[10px] shadow-xlarge md:w-[45%]">
          <div className="mx-auto w-full  md:block md:w-[80%]">
            <h1 className=" pb-8 pt-6 text-3xl  font-semibold">Virtual Tour</h1>
            <iframe
              className="md:w-[500px]"
              height="315"
              src="https://www.youtube.com/embed/A8AdS92qmhg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{
                objectFit: "cover",

                paddingBottom: "40px",
              }}
            ></iframe>
          </div>
        </div>
      </section>

      <section className="  bg-[#F2F9FB] px-6 pb-14 pt-12">
        <form className="mx-auto mt-8 flex w-[92%] flex-col gap-y-6">
          <h1 className="text-[28px] font-semibold">
            Contact Property Manager
          </h1>
          <div>
            <label htmlFor="">Name</label>
            <TextField
              control={control}
              name="text"
              placeholder=""
              type="text"
              rules={{
                required: {
                  value: true,
                  message: "Matric Number is reuired",
                },
              }}
              className="bg-whitw my-0 h-[50px] w-[95%] rounded-lg border-none"
            />
          </div>
          <div className="flex justify-between">
            <div className="w-[48%]">
              <label htmlFor="">Phone Number</label>
              <TextField
                control={control}
                name="text"
                placeholder=""
                type="text"
                rules={{
                  required: {
                    value: true,
                    message: "Matric Number is reuired",
                  },
                }}
                className="my-0 h-[50px] w-[95%] rounded-lg border-none bg-white"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="">Email</label>
              <TextField
                control={control}
                name="text"
                placeholder=""
                type="text"
                rules={{
                  required: {
                    value: true,
                    message: "Matric Number is reuired",
                  },
                }}
                className="my-0 h-[50px] w-[95%] rounded-lg border-none bg-white"
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Message</label>
            <TextField
              control={control}
              name="text"
              placeholder="I am interested in this property"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: "Matric Number is reuired",
                },
              }}
              className="my-0 h-[50px] w-[95%] rounded-lg border-none bg-white"
            />
          </div>
          <Button
            variant="add"
            size="md"
            disabled={false}
            text={"Contact Agent"}
            className="h-[50px] w-full"
          />
        </form>
      </section>

      <section className=" mx-auto mt-8 w-[92%] pb-14 pt-12 md:px-6">
        <div className="w-full rounded-[10px] py-8 shadow-xlarge md:w-[45%]">
          <div className="mx-auto flex w-full flex-col gap-y-9 md:w-[80%]">
            <h1 className=" text-[28px]  font-semibold">Comments</h1>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-6">
                <Image src={Man} alt="" />
                <p>John Doe</p>
              </div>
              <p className="leading-[30px]">
                I just tried this recipe and it was amazing! The instructions
                were clear and easy to follow, and the end result was delicious.
                I will definitely be making this again. Thanks for sharing!
              </p>
              <div className=" flex justify-between pt-6 ">
                <div className="flex items-center gap-3">
                  <FiBold fontSize={30} />
                  <FiItalic fontSize={30} />
                  <IoMdLink fontSize={30} />
                </div>
                <Button
                  variant="add"
                  size="md"
                  disabled={false}
                  text={"Contact Agent"}
                  className="h-[50px] w-[40%]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-4 pt-16">
              <div className="flex items-center gap-6">
                <Image src={Woman} alt="" />
                <p>John Doe</p>
              </div>
              <p className="leading-[30px]">
                I just tried this recipe and it was amazing! The instructions
                were clear and easy to follow, and the end result was delicious.
                I will definitely be making this again. Thanks for sharing!
              </p>
              <div className=" flex justify-between pt-6 ">
                <div className="flex items-center gap-3">
                  <Image src={ArrowUp} alt="" />
                  <Image src={ArrowDown} alt="" />
                  <p>5 min ago</p>
                </div>
              </div>
            </div>
            <Button
              variant="add"
              size="md"
              disabled={false}
              text={"Load More"}
              className="h-[50px] w-full bg-[#E0E0E1] text-black"
            />
          </div>{" "}
        </div>
      </section>
      <section className=" relative  px-6 pb-14 pt-12">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={myResponsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="min-h-[600px] "
        >
          {/* <div className="float-right mr-7 mt-5 flex h-[30px] w-[100px] items-center justify-center bg-[#2C9FD9] text-base font-semibold text-white">
            For Sale
          </div> */}
          {CarouselContent.map((item) => (
            <div key={item.id} className="mx-2 h-full bg-[#F2F9FB] px-4 py-4 ">
              <Image
                src={item.image}
                alt=""
                className="h-[600px] w-full object-cover"
              />
              <div className="min-h-[100px] bg-[#F2F9FB] pt-3">
                <p>Semi Detached Duplex</p>
                <h1 className="text-[16px] font-semibold">
                  4 Bedroom Semi- Detached Duplex With...
                </h1>
                <p>Lagos</p>
                <div className=" inner inset text-black-0 flex h-[50px] w-full items-center gap-5  pl-4 text-sm">
                  <div className="flex items-center gap-1">
                    <p className="font-sm text-base">4</p>
                    <Image src={Car2} height={20} width={20} alt="" />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-sm text-base">4</p>
                    <Image src={Cart2} height={20} width={20} alt="" />
                  </div>
                  <div className="flex items-center gap-1">
                    <p>500 m²</p>
                    <Image src={El2} height={20} width={20} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <section className="  mt-22 flex flex-col items-center justify-center gap-y-10 bg-[#F2F9FB] px-6 pb-14 pt-12">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[28px] font-semibold">
            Are You a Property Owner?
          </h1>
          <p>Enter your email address to get listed</p>
        </div>
        <div className="mx-auto flex items-center gap-3 ">
          <input
            type="text"
            placeholder=" Your Phone Number"
            className="h-[47px] px-5 "
          />
          <button className="h-[47px] bg-[#F6901B] px-8 py-3 text-white">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default ViewMoreProperty;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const myResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
