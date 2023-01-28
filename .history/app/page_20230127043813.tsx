"use client";

import Image from "next/image";
import data from "data.json";
import image from "../public/ManuelTL2.jpg";
import image1 from "../public/ManuelTL2.jpg";
import { useEffect, useState } from "react";
import Socials from "../components/Socials";
import Share from "@/components/Share";
import LinkShare from "@/components/LinkShare";

function LinkCard({
  href,
  title,
  image,}
) {

  return (
    <a
      href={href}
      className="flex items-center p-3 w-full rounded-lg hover:scale-105 transition-all bg-gray-100 mb-3 -mt-2 max-w-3xl .home__linkcard-box"
    >
      <div className="flex text-center w-full home__linkcard-card">
        <div className="home__linkcard-img">
          {image1 && (
            <Image
              className=" linkcard-img"
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
        <LinkShare/>
      </div>
    </a>
  );
}

export default function Home() {
  /*==================== Toggle Menu ====================== */
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /* +++++++++++++++++++++++++++++++++++++++++++++++++ */
  

  useEffect(() => {
    if (toggle) {
      // const calcInnerWidth = function () {
      //   setBreakpoint(breakpoints(window.innerWidth));
      // };
      // window.addEventListener("resize", calcInnerWidth);
      window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        //scroll higher than 200 viewport height
        //add scroll header class to a tag with the scroll-top
        if (this.scrollY >= 80) header?.classList.add("scroll-header");
        else header?.classList.remove("scroll-header");
      });
    }
  }, []);

  useEffect(() => {
    showMenu(true);
  }, []);

  return (
    <div
      className="flex-col mx-auto w-full mt-16 px-8 home-card "
      link="https://portfolio-manu.vercel.app/"
    >
      <Share />
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        // className={
        //   activeNav === "#home" ? "nav__logo active-link" : "nav__logo"
        // }
      >
        <Image
          className="rounded-full"
          alt={data.name}
          src={image}
          width={96}
          height={96}
        />
      </a>

      <h1
        className="font-semibold mt-4 mb-8 text-xl"
        style={{ color: "white" }}
      >
        {data.name}
      </h1>
      <h3 className="home__description" style={{ color: "white" }}>
        {data.small_description}
      </h3>

      <div className="grid place-items-center w-full mt-2">
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>

      <div className="gap-3 items-center flex mt-10">
        {data?.socials?.map((social) => {
          return <Socials title={social?.title} key={social?.href} />;
        })}
      </div>
    </div>
  );
}