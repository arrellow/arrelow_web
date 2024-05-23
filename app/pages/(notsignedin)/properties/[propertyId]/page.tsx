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
import useGeSinglePost from "@/app/services/post-controller/single-post-controller/use-get-single-post";
import { IPost, InputsContactUs } from "@/app/types/interface";
import useMutateContactUs from "@/app/services/contactus-controller/use-mutate-contactus";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import PageLoader from "@/app/components/loader/PageLoader";
import useMutateContactAdmin from "@/app/services/contact-admin-controller/use-mutate-contact-admin";

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
  const { register, handleSubmit, control, reset } = useForm<InputsContactUs>();
  const contactAdminMutation = useMutateContactAdmin();
  const onSubmit: SubmitHandler<InputsContactUs> = async (data) => {
    console.log(data);

    try {
      const res = await contactAdminMutation.mutateAsync(data);
      console.log(res);
      reset();
      toast.success("Message Sent Successfully");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    }
  };

  console.log(params.propertyId);
  const { data: post, isLoading } = useGeSinglePost(params?.propertyId);
  if (!post) {
    return <div>No data available</div>;
  }
  console.log(post);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="md:pt-40">
          <section className="flex h-[700px] w-full flex-col md:flex-row">
            <main className="w-full max-md:h-[500px]  md:w-[40%] ">
              <Image
                src={Image1}
                alt=""
                className="h-full w-full object-cover"
              />
            </main>
            <main className="flex h-full w-full md:w-[60%] md:flex-col">
              <div className="flex-grow overflow-hidden">
                <Image
                  src={Image2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-grow overflow-hidden">
                <Image
                  src={Image3}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </main>
            {/* {post?.images[0]} */}
          </section>

          <section className=" flex h-[250px] items-center bg-[#023C63]">
            <Carousel
              swipeable={true}
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
              {CarouselContent?.map((item) => (
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

          <section className="mx-auto w-[92%] max-md:pt-10">
            <p className="leading-[40px]">
              Listed by {post && post?.product_detail?.user?.username}
            </p>

            <main className="flex flex-col justify-between md:flex-row">
              <div className="w-[100%] md:w-[47%]">
                <section className="flex flex-col gap-y-4">
                  <h1 className="text-3xl font-semibold">
                    {post && post?.product_detail?.title}
                  </h1>
                  <div className="flex gap-4">
                    <Image src={Location} alt="" />
                    <p>{post && post?.product_detail?.property_location}</p>
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
                      <p>{post && post?.product_detail?.views} views</p>
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      <Image src={Calender} alt="" />
                      <p>{post && post?.product_detail?.createdAt}</p>
                    </div>
                  </div>
                </section>

                <h1 className="pt-10 text-3xl font-semibold">Overview</h1>
                <section className="mt-4 flex min-h-[200px] w-full items-center justify-between px-12 shadow-xlarge">
                  <div className="flex flex-col items-center gap-4">
                    <p>Bedroom</p>
                    <Image src={Car2} alt="" />
                    <h1>
                      {post && post?.product_detail?.number_of_bedrooms} Rooms
                    </h1>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p>Bathroom</p>
                    <Image src={Cart2} alt="" />
                    <h1>
                      {post && post?.product_detail?.number_of_bathrooms} Baths
                    </h1>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p>Square</p>
                    <Image src={El2} alt="" />
                    <h1>{post && post?.product_detail?.square} m²</h1>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p>Floors</p>
                    <Image src={Floor} alt="" />
                    <h1>{post && post?.product_detail?.number_of_floors}</h1>
                  </div>
                </section>
                <section className="flex flex-col gap-y-5 pt-10">
                  <h1 className="text-3xl font-semibold">Description</h1>
                  <p className="leading-[28px]">
                    {post && post?.product_detail?.description}
                  </p>
                </section>
                <section>
                  <h1 className="pt-10 text-3xl font-semibold">Features</h1>
                  <section className="mt-4 min-h-[200px] shadow-xlarge">
                    <div className="flex flex-wrap items-center gap-y-8 pl-6 pt-14">
                      {post &&
                        post?.product_detail?.features.map(
                          (item: string, idx: number) => (
                            <div
                              key={idx}
                              className="flex w-[45%] items-center gap-1 sm:w-[30%] md:w-[22%]"
                            >
                              <Image src={Tick} alt="" />
                              <p>{item}</p>
                            </div>
                          ),
                        )}
                    </div>
                  </section>
                </section>
              </div>
              <div className="flex w-full flex-col gap-y-6 rounded-[10px] px-7 py-10 shadow-xlarge md:w-[47%]">
                <h1 className="text-[28px] font-semibold">Contact Agent</h1>
                <div className="flex flex-col gap-y-9">
                  <div className="flex items-center gap-x-4">
                    <Image src={Prof} alt="" />
                    <div>
                      <h1 className="font-bold ">Agent’s Name</h1>
                      <p>123 456 780 LAN</p>
                    </div>
                  </div>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)} className="">
                  <main className="flex flex-col gap-y-6">
                    <div>
                      <label htmlFor="">Name</label>
                      <TextField
                        control={control}
                        name="fullname"
                        placeholder="Enter name"
                        type="text"
                        rules={{
                          required: {
                            value: true,
                            message: "Name is reuired",
                          },
                        }}
                        className="bg-whitw my-0 h-[50px] w-[95%] rounded-lg border-[1px] border-[#D1D1D5]"
                      />
                    </div>{" "}
                    <div>
                      <label htmlFor="">Phone</label>
                      <TextField
                        control={control}
                        name="phone_number"
                        placeholder="Enter Phone Number"
                        type="text"
                        rules={{
                          required: {
                            value: true,
                            message: "Phone Number is reuired",
                          },
                        }}
                        className="bg-whitw my-0 h-[50px] w-[95%] rounded-lg  border-[1px] border-[#D1D1D5]"
                      />
                    </div>{" "}
                    <div>
                      <label htmlFor="">Email</label>
                      <TextField
                        control={control}
                        name="email"
                        placeholder="Enter Email"
                        type="text"
                        rules={{
                          required: {
                            value: true,
                            message: "Email is reuired",
                          },
                        }}
                        className="bg-whitw my-0 h-[50px] w-[95%] rounded-lg  border-[1px] border-[#D1D1D5]"
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
                        name="message"
                        render={({
                          field: { onChange, onBlur, value },
                          formState,
                        }) => (
                          <MyTextArea
                            placeholder="Message *"
                            cols={30}
                            className=""
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
                      text={"Contact Agent"}
                      className="h-[50px] w-full"
                    />
                  </main>
                </form>
                <div className="flex items-center justify-between gap-5">
                  <span className="flex h-[50px] w-[47%] items-center justify-center gap-2 border-2 border-[#023C63] text-[20px] font-semibold">
                    <FaPhoneAlt />
                    Call
                  </span>
                  <span className="flex h-[50px] w-[47%] items-center justify-center gap-2 border-2 border-[#023C63]  text-[20px]  font-semibold">
                    <SiWhatsapp />
                    Whatsapp
                  </span>
                </div>
              </div>
            </main>
          </section>

          <section className="mx-auto mt-8 w-[92%] px-6 pb-14 pt-12 shadow-xlarge ">
            <h1 className="pb-8 text-3xl font-semibold">Amenities</h1>
            <div className="flex flex-wrap gap-x-10 gap-y-11">
              {post &&
                post?.product_detail?.amenities?.map(
                  (item: string, idx: number) => (
                    <p
                      className="w-[17%] rounded-[7px] bg-[#F2F9FB] py-1 text-center"
                      key={idx}
                    >
                      {item}
                    </p>
                  ),
                )}
            </div>
          </section>

          <section className=" mx-auto mt-8 w-[92%] pb-14 pt-12">
            <div className="w-full rounded-[10px] px-6 shadow-xlarge md:w-[45%]">
              <div className="mx-auto w-full  md:block md:w-[80%]">
                <h1 className=" pb-8 pt-6 text-3xl  font-semibold">
                  Virtual Tour
                </h1>
                <iframe
                  className="w-full md:w-[500px]"
                  height="400"
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

          <section className="  hidden bg-[#F2F9FB] px-6 pb-14 pt-12">
            <form
              className="mx-auto mt-8 flex w-[92%] flex-col gap-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-[28px] font-semibold">
                Contact Property Manager
              </h1>
              <div>
                <label htmlFor="">Name</label>
                <TextField
                  control={control}
                  name="fullname"
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
                    name="phone_number"
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
                    name="email"
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
                  name="message"
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

          <section className=" mx-auto mt-8 w-[92%] pb-14 pt-12">
            <div className="w-full rounded-[10px] px-6 py-8 shadow-xlarge md:w-[45%]">
              <div className="mx-auto flex w-full flex-col gap-y-9 md:w-[80%]">
                <h1 className=" text-[28px]  font-semibold">Comments</h1>
                <div className="flex flex-col gap-y-4">
                  <div className="flex items-center gap-6">
                    <Image src={Man} alt="" />
                    <p>John Doe</p>
                  </div>
                  <p className="leading-[30px]">
                    I just tried this recipe and it was amazing! The
                    instructions were clear and easy to follow, and the end
                    result was delicious. I will definitely be making this
                    again. Thanks for sharing!
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
                      text={"Comment"}
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
                    I just tried this recipe and it was amazing! The
                    instructions were clear and easy to follow, and the end
                    result was delicious. I will definitely be making this
                    again. Thanks for sharing!
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
            <h1 className="text-3xl font-extrabold">Related Properties</h1>

            {/* <div className="float-right mr-7 mt-5 flex h-[30px] w-[100px] items-center justify-center bg-[#2C9FD9] text-base font-semibold text-white">
            For Sale
          </div> */}
            <div className="flex justify-between gap-6 max-md:flex-col">
              {post &&
                post?.related_properties?.map((item: IPost) => (
                  <div
                    key={item?.id}
                    className="mx-2 h-full bg-[#F2F9FB] px-4 py-4 md:w-[30%]"
                  >
                    <Image
                      src={item?.banner}
                      height={60}
                      width={60}
                      alt=""
                      className="h-[600px] w-full object-cover"
                    />
                    <div className="min-h-[100px] bg-[#F2F9FB] pt-3">
                      <p>{item?.category}</p>
                      <h1 className="text-[16px] font-semibold">
                        {item?.title}
                      </h1>
                      <p>{item?.property_location}</p>
                      <div className=" inner inset text-black-0 flex h-[50px] w-full items-center gap-5  pl-4 text-sm">
                        <div className="flex items-center gap-1">
                          <p className="font-sm text-base">
                            {item?.number_of_bedrooms}
                          </p>
                          <Image src={Car2} height={20} width={20} alt="" />
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="font-sm text-base">
                            {item?.number_of_bathrooms}
                          </p>
                          <Image src={Cart2} height={20} width={20} alt="" />
                        </div>
                        <div className="flex items-center gap-1">
                          <p>{item?.square} m²</p>
                          <Image src={El2} height={20} width={20} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* <Carousel
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
          className="min-h-[600px]"
        >
          {post &&
            post?.related_properties?.map((item: IPost) => (
              <div
                key={item?.id}
                className="mx-2 h-full bg-[#F2F9FB] px-4 py-4 "
              >
                <Image
                  src={item?.banner}
                  height={60}
                  width={60}
                  alt=""
                  className="h-[600px] w-full object-cover"
                />
                <div className="min-h-[100px] bg-[#F2F9FB] pt-3">
                  <p>{item?.category}</p>
                  <h1 className="text-[16px] font-semibold">{item?.title}</h1>
                  <p>{item?.property_location}</p>
                  <div className=" inner inset text-black-0 flex h-[50px] w-full items-center gap-5  pl-4 text-sm">
                    <div className="flex items-center gap-1">
                      <p className="font-sm text-base">
                        {item?.number_of_bedrooms}
                      </p>
                      <Image src={Car2} height={20} width={20} alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-sm text-base">
                        {item?.number_of_bathrooms}
                      </p>
                      <Image src={Cart2} height={20} width={20} alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                      <p>{item?.square} m²</p>
                      <Image src={El2} height={20} width={20} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel> */}
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
      )}
    </>
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
