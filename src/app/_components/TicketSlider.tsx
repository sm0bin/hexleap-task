"use client";
import React, { useState, useEffect } from "react";
import TicketCard from "./TicketCard";
import ticketsData from "@/data/tickets";

const TicketSlider = () => {
  const [index, setIndex] = useState(0);
  const [numTickets, setNumTickets] = useState(1);

  // Set the number of tickets to display based on screen width
  useEffect(() => {
    const updateNumTickets = () => {
      if (window.innerWidth <= 320) {
        setNumTickets(1);
      } else {
        setNumTickets(3);
      }
    };

    updateNumTickets();

    window.addEventListener("resize", updateNumTickets);

    return () => {
      window.removeEventListener("resize", updateNumTickets);
    };
  }, []);

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < ticketsData.length - numTickets) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="md:max-w-screen-md mx-auto relative h-[720px] md:h-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 mx-auto">
        {ticketsData.slice(index, index + numTickets).map((data, i) => (
          <TicketCard key={i} data={data} />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className={`w-9 h-12 border border-blue-500 text-xl text-blue-500 hover:text-white bg-white md:bg-opacity-0 hover:bg-blue-500 absolute top-1/2 left-5 md:-left-20 transition duration-300
        ${index === 0 ? "hidden" : ""}`}
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className={`w-9 h-12 border border-blue-500 text-xl text-blue-500 hover:text-white bg-white md:bg-opacity-0 hover:bg-blue-500 absolute top-1/2 right-5 md:-right-20 transition duration-300
        ${index >= ticketsData.length - numTickets ? "hidden" : ""}`}
      >
        ❯
      </button>
    </div>
  );
};

export default TicketSlider;
