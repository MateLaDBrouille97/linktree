import React, { useState } from "react";
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
  TwitterIcon
} from "react-share";

const Share = () => {
  const [toggleState, setToggleState] = useState(0);

  const showModal = () => {
    setToggleState(1);
  };

  return (
    <div className="share">
      <header>
        <button className="share-button share-link" onClick={showModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            className="bi bi-share-fill"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />{" "}
          </svg>
        </button>
      </header>
      <div
        className={
          toggleState === 1 ? "modal-share active-modal" : "modal-share"
        }
      >
        <header className="close" onClick={() => setToggleState(0)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
          </svg>{" "}
        </header>
        <div className="content">
          <p>Share this link via </p>
          <ul className="icons ">
            
            
            <FacebookShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <FacebookIcon size={22} round={true}/>
            </FacebookShareButton>
            <LinkedinShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <LinkedinIcon size={22} round={true}/>
            </LinkedinShareButton>
            <WhatsappShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <WhatsappIcon size={22} round={true}/>
            </WhatsappShareButton>
            <TelegramShareButton
              url="http://localhost:3000/"
              className="social__link-share"
            >
              <TelegramIcon size={22} round={true}/>
            </TelegramShareButton>

           
          </ul>
          <p> Or copy link</p>
          <div className="field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />{" "}
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />{" "}
            </svg>
            <input type="text" value="example.com/share-link" />
            <button>Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
