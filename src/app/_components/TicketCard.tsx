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
    <div className="shadow-md p-2.5 relative overflow-hidden">
      <Image
        src={thumbnail}
        className="w-full shadow-lg"
        alt="Avatar"
        width={300}
        height={80}
      />
      <div className="w-5 h-5 bg-[#F9F8FF] shadow-inner  rounded-full absolute top-2/3 -left-2.5"></div>
      <hr className="border-dashed border border-gray-300 my-5" />
      <div className="w-5 h-5 bg-[#F9F8FF] shadow-inner  rounded-full absolute top-2/3 -right-2.5"></div>
      <div className="text-center">
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
