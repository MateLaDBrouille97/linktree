import React from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    FacebookMessengerShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    TelegramIcon,
    WhatsappIcon,
    TwitterIcon,
  } from "react-share";

const LinkShare = () => {
  return (
    <div className="link">
      <button className="linkcard-share">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="white"
          className="bi bi-share-fill"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />{" "}
        </svg>
      </button>
      <div className="modal-linkshare">
      <ul className="icons ">
            <FacebookShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <FacebookIcon size={24} round={true} />
            </FacebookShareButton>
            <FacebookMessengerShareButton url="http://localhost:3000/" appId="">
              <FacebookMessengerIcon size={24} round={true} />
            </FacebookMessengerShareButton>
            <LinkedinShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <LinkedinIcon size={24} round={true} />
            </LinkedinShareButton>
            <TwitterShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <TwitterIcon size={24} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <WhatsappIcon size={24} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <TelegramIcon size={24} round={true} />
            </TelegramShareButton>
          </ul>
      </div>
    </div>
  );
};

export default LinkShare;
