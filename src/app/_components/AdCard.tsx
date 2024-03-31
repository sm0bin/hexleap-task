import Image from "next/image";
import React from "react";

const AdCard = () => {
  return (
    <div className="shadow-md p-2.5 col-span-2 md:col-span-1 dark:bg-[#3B3E47]">
      <figure className="relative">
        <Image
          src="/images/ad-img.png"
          width={300}
          height={300}
          alt="Advertisement title"
        />
        <div className="bg-black px-4 py-1 font-bold text-xs absolute top-0 right-0 text-white">
          Ad
        </div>
      </figure>
      <h3 className="font-semibold text-xl mt-7 mb-2">Advertisement title</h3>
      <p className="text-sm opacity-70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default AdCard;
