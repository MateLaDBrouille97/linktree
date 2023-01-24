import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import arrowUp from '../../public/arrowUp.png';
import Image from "next/image";



const ScrollUp = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (scroll) {
      window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        //scroll higher than 560 viewport height
        //add show-scroll class to a tag with the scroll-top
        if (this.scrollY >= 560) scrollUp?.classList?.add("show-scroll");
        else scrollUp?.classList?.remove("show-scroll");
      });
    }
  }, []);

  useEffect(() => {
    setScroll(false);
  }, []);

  
  return (
    <div>
      <a href="#" className="scrollup">
       {scroll&&
       <Image alt="" src={arrowUp} className="scrollup__icon" width={30} height={30}/> }
    </a>
    </div>
    
  );
};

export default ScrollUp;
