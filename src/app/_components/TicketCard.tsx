import Image from "next/image";
import React from "react";

interface TicketCardProps {
  data: {
    thumbnail: string;
    teamName: string;
    time: {
      date: string;
      day: string;
      time: string;
    };
    place: string;
  };
}

const TicketCard: React.FC<TicketCardProps> = ({ data }) => {
  const { thumbnail, teamName, time, place } = data;

  return (
    <div className="drop-shadow-md">
      <figure className="p-3 bg-white dark:bg-[#3B3E47]">
        <Image
          src={thumbnail}
          className="w-full shadow-lg"
          alt="Avatar"
          width={300}
          height={80}
        />
      </figure>

      <svg
        className="w-full text-white dark:text-[#3B3E47]"
        viewBox="0 0 257 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M257 0H0V7C5.52285 7 10 11.4772 10 17C10 22.5228 5.52285 27 0 27V34H257V27C251.477 27 247 22.5228 247 17C247 11.4772 251.477 7 257 7V0Z"
          fill="currentColor"
        />
        <line
          x1="23"
          y1="16.5201"
          x2="234"
          y2="16.5201"
          stroke="#A9ACB2"
          stroke-width="0.959843"
          stroke-dasharray="5.76 5.76"
        />
      </svg>

      <div className="text-center bg-white p-3  dark:bg-[#3B3E47]">
        <h4 className="font-medium text-lg mb-4 text-center">{teamName}</h4>
        <p className="text-sm mt-2 mb-3">
          {time?.date} | {time?.day} | {time?.time}
        </p>
        <p className="mb-5 text-sm opacity-70">{place}</p>
        <button className="bg-gray-950 text-white py-2.5 w-full hover:shadow-lg">
          Take Flight Collection
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
