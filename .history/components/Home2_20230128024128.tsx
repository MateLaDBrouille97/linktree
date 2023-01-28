"use client";

import Image from "next/image";
import data from "data.json";
import image from "../public/ManuelTL2.jpg";
import React, { useEffect, useState } from "react";
import Socials from "../components/Socials";
import Share from "@/components/Share";
import LinkCard from "./LinkCard";
import { useUserContext } from "../contexts/UserContext";
import { useLinkContext } from "@/contexts/LinkContext";

export default function Home2() {
  /*==================== Toggle Menu ====================== */
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const { dbUser } = useUserContext();

  const { links } = useLinkContext();

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
          width={100}
          height={100}
        />
      </a>

      <h1
        className="font-semibold mt-4 mb-8 text-xl"
        style={{ color: "white" }}
      >
        {dbUser?.firstName} {dbUser?.lastName}
      </h1>
      <h3 className="home__description" style={{ color: "white" }}>
        {dbUser?.title?.[0]}, {dbUser?.title?.[1]} and {dbUser?.title?.[2]}
      </h3>

      <div className="grid place-items-center w-full mt-2">
        {links.map((link) => (
          <LinkCard key={link.href} link={link} />
        ))}
      </div>

      <div className="gap-3 items-center flex mt-10">
        {data?.socials?.map((social) => {
          return <Socials title={social?.title} key={social?.href} />;
        })}
      </div>
      <footer>
        <div className="">
        <span className="footer__copy">&#169; Manuel LABRIDY All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
