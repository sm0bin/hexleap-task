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
      <figure className="p-3 bg-white">
        <Image
          src={thumbnail}
          className="w-full shadow-lg"
          alt="Avatar"
          width={300}
          height={80}
        />
      </figure>
      <Image
        src="/images/ticket-gap.svg"
        className="w-full -my-1"
        alt="Ticket Gap"
        width={300}
        height={36}
      />
      <div className="text-center bg-white p-3">
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
