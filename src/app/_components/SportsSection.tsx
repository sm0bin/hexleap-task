"use client";
import React from "react";
import SportsCard from "./SportsCard";
import sportsData from "@/data/sports";
import AdCard from "./AdCard";

const SportsSection = () => {
  const [displayData, setDisplayData] = React.useState(sportsData.slice(0, 4));

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 underline underline-offset-[.75rem] ">
        Sports
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
        {displayData.map((data, index) => (
          <SportsCard key={index} data={data} />
        ))}
        <AdCard />
      </div>

      {displayData.length === sportsData.length ? (
        <button
          onClick={() => setDisplayData(sportsData.slice(0, 4))}
          className="bg-blue-500 text-white px-8 py-2.5 rounded my-12 mx-auto block hover:shadow-md"
        >
          See Less
        </button>
      ) : (
        <button
          onClick={() => setDisplayData(sportsData)}
          className="bg-blue-500 text-white px-8 py-2.5 rounded my-12 mx-auto block hover:shadow-md"
        >
          See More
        </button>
      )}
    </section>
  );
};

export default SportsSection;
