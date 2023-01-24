import React, { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
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

            <a href="" className="social__link-share">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                className="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />{" "}
              </svg>
            </a>
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
