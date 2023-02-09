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
          className="rounded-full home-img"
          alt={data.name}
          src={image}
          width={100}
          height={100}
        />
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-patch-check home-img-chack" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/> </svg>
      <h1
        className="font-semibold mt-4 mb-8 text-xl"
        style={{ color: "white" }}
      >
        {dbUser?.firstName} {dbUser?.lastName}
      </h1>
      <h3 className="home__description" style={{ color: "white" }}>
        {dbUser?.title?.[0]}, {dbUser?.title?.[1]}, {dbUser?.title?.[2]}
      </h3>

      <div className="grid place-items-center w-full mt-2">
        {links.map((link) => (
          <LinkCard key={link.href} link={link} />
        ))}
      </div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="gap-3 items-center flex mt-10">
            {data?.socials?.map((social) => {
              return <Socials title={social?.title} key={social?.href} />;
            })}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <div className="footer__container">
            <span className="footer__copy">
              &#169; Manuel LABRIDY All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
