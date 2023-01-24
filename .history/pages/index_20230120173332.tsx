import Image from "next/image";
import data from "data.json";
import image from "../public/ManuelTL2.jpg";
import image1 from "../public/ManuelTL2.jpg";
import { useEffect, useState } from "react";
import socials from "../components/Socials";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex item-center p-4 w-full 
    rounded-lg hover:scale-110 transition-all border bg-gray-100 border-gray-300 mb-4 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image1 && (
            <Image
              className="rounded-sm  "
              alt={data.name}
              src={image1}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className=" flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
        <p className="tet gray 500">{image}</p>
      </div>
    </a>
  );
}

export default function Home() {
  /*==================== Toggle Menu ====================== */
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /* +++++++++++++++++++++++++++++++++++++++++++++++++ */
  // const { dbUser, image } = useUserContext();

  // const breakpoints = (width) => {
  //   if (width < 640) {
  //     return "xs";
  //   } else if (width >= 640 && width < 768) {
  //     return "sm";
  //   } else if (width >= 768 && width < 1024) {
  //     return "md";
  //   } else if (width >= 1024) {
  //     return "lg";
  //   }
  // };

  // const [breakpoint, setBreakpoint] = useState(() =>
  //   breakpoints(typeof window !== "undefined" && window.innerWidth)
  // );

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
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 ">
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

      <h1 className="font-semibold mt-4 mb-8 text-xl">{data.name}</h1>
      <div className="flex-1  w-full  align-center">
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>

      <div className="gap-3 items-center flex mt-10">
        {data.socials.map((social) => {
          if (social.title == "Instagram") {
            return socials.InstagramIcon();
          }
          if (social.title == "Github") {
            return socials.GitHubIcon();
          }
          if (social.title == "LinkedIn") {
            return socials.LinkedInIcon();
          }
        })}
      </div>
    </div>
  );
}
