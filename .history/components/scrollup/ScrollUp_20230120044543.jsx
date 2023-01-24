import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

const ScrollUp = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (scroll) {
      window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        //scroll higher than 560 viewport height
        //add show-scroll class to a tag with the scroll-top
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      });
    }
  }, []);

  useEffect(() => {
    setScroll(false);
  }, []);

  return (
    <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
    <a href="#" className="scrollup">
      {!scroll && ( <iconify-icon  icon="material-symbols:arrow-circle-up-outline" className="scrollup__icon"></iconify-icon> )}
    </a>
  );
};

export default ScrollUp;
