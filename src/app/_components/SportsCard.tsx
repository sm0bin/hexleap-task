import Image from "next/image";
import React from "react";

interface SportsCardProps {
  data: {
    thumbnail: string;
    teamName: string;
    totalEvents: number;
    sport: string;
  };
}

const SportsCard: React.FC<SportsCardProps> = ({ data }) => {
  const { thumbnail, teamName, totalEvents, sport } = data;
  return (
    <div className="shadow-md p-2.5 dark:bg-[#3B3E47]">
      <Image
        src={thumbnail}
        className="w-full"
        alt="Avatar"
        width={120}
        height={80}
      />
      <div className="">
        <h4 className="font-medium text-lg my-4">{teamName}</h4>
        <div className="px-2.5 py-3 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 bg-gray-200 dark:bg-[#292B32]">
          <div>
            <p className="text-xs opacity-70 mb-1 md:mb-3">Total Events</p>
            <p className="text-sm">{totalEvents} Events</p>
          </div>
          <div>
            <p className="text-xs opacity-70 mb-1 md:mb-3">Sport</p>
            <p className="text-sm">{sport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
