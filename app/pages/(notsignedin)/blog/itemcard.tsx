"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Blog1 from "@/app/assets/blog1.svg";
import Blog2 from "@/app/assets/blog2.svg";
import Blog3 from "@/app/assets/blog3.svg";
import Blog4 from "@/app/assets/blog4.svg";
import Blog5 from "@/app/assets/blog5.svg";
import Blog6 from "@/app/assets/blog6.svg";
import Profile from "@/app/assets/profile.svg";
import CustomImage from "@/app/assets/customimageblog.svg";
import Image from "next/image";
import Pagination from "@/app/components/ui/pagination";
interface CardProps {
  img: string;
  customImage: string;
  date: string;
  header: string;
  topic: string;
  profile: string;
  id: number;
}
export const Card: CardProps[] = [
  {
    id: 1,
    img: Blog1,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 2,
    img: Blog2,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 3,
    img: Blog3,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 4,
    img: Blog1,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 5,
    img: Blog5,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 6,
    img: Blog6,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 1,
    img: Blog1,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 2,
    img: Blog2,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 3,
    img: Blog3,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 4,
    img: Blog1,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 5,
    img: Blog5,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
  {
    id: 6,
    img: Blog6,
    customImage: CustomImage,
    date: "Jan 09, 2024",
    header: "4 Bedroom Detached Duplex With BQ For Sale",
    topic:
      "Rat Infestation in the Home: How to Get Rid of Them and Protect Your Homes",
    profile: Profile,
  },
];

const ItemCard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(Card?.length / itemsPerPage);
  const currentData = Card?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const router = useRouter();
  const handleClick = (blogId: any) => {
    router.push(`/pages/blog/${blogId}`);
  };
  return (
    <div>
      <div className="grid gap-y-16 md:grid-cols-3 md:px-24">
        {currentData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(item.id)}
            className="min-h-[300px] cursor-pointer shadow-large"
          >
            <div>
              <Image
                src={item.img}
                alt=""
                className=" h-[300px] object-cover"
              />
            </div>
            <div className="px-4 py-5">
              <div className="flex items-center gap-2">
                <Image src={item.customImage} alt="" />
                <p>{item.date}</p>
              </div>
              <h1 className="pt-3 text-[18px] font-bold leading-[24px]">
                4 Bedroom Detached Duplex With BQ For Sale
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ItemCard;
