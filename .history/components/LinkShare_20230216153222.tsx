import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const LinkShare = ({ href }) => {
  const [toggleState, setToggleState] = useState(false);

  const showModal = () => {
    setToggleState(!toggleState);
  };

  useEffect(() => {
    const selectors = document.querySelectorAll(".link");
    selectors.forEach((selector) =>
      selector?.addEventListener("click", function (event) {
        event.preventDefault();
      })
    );
  }, []);

  return (
    <div className="link">
      <button className="linkcard-share" onClick={showModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="black"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
        </svg>
      </button>
      <div
        className={
          toggleState === true ? "modal-linkshare show" : "modal-linkshare"
        }
      >
        <ul className="icons-share">
          <FacebookShareButton url={href} className="social__link-share">
            <FacebookIcon size={22} round={true} />
          </FacebookShareButton>

          <LinkedinShareButton url={href} className="social__link-share">
            <LinkedinIcon size={22} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton url={href} className="social__link-share">
            <TwitterIcon size={22} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton url={href} className="social__link-share">
            <WhatsappIcon size={22} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton
            url="http://localhost:3000/"
            className="social__link-share"
          >
            <TelegramIcon size={22} round={true} />
          </TelegramShareButton>
        </ul>
      </div>
    </div>
  );
};

export default LinkShare;
