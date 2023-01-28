import Image from "next/image";
import data from "data.json";
import image1 from "../public/ManuelTL2.jpg";
import React from "react";
import LinkShare from "@/components/LinkShare";

function LinkCard({ href, title, image }) {
  return (
    <a
      href={href}
      className="flex items-center p-3 w-full rounded-lg hover:scale-105 transition-all bg-gray-100 mb-3 -mt-2 max-w-3xl .home__linkcard-box"
    >
      <div className="flex text-center w-full home__linkcard-card">
        <div className="home__linkcard-img">
          {image1 && (
            <Image
              className="linkcard-img"
              alt={data.name}
              src={image1}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10 home__linkcard-title">
          {title}
        </h2>
        <LinkShare />
      </div>
    </a>
  );
}

export default LinkCard;