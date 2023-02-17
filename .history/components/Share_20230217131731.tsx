import React, { useEffect, useState } from "react";
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

const Share = () => {
  const [toggleState, setToggleState] = useState(0);
  const [link, setLink] = useState("");
  const [value, setValue] = useState("");
  //   const [link,setLink]=useState('');

  useEffect(() => {
    const selectors = document.querySelectorAll(".home-card");
    selectors.forEach((selector) => {
      const link1 = selector.getAttribute("link");
      setLink(link1);
    });
  }, []);

  const clickButton = () => {
    const field = document.querySelector(".field"),
      input = field?.querySelector("input"),
      copy = field?.querySelector("button");
    // const field2 = document.querySelector(".home-card"),
    //   input2 = field2?.getAttribute("link");
    // console.log(input, input2);
    if (input) {
      input.select(); //copy the link
      navigator.clipboard
        .writeText(input.value)
        .then(() => {
          if (field) field.classList.add("active");
          if (copy) {
            copy.innerText = "Copied";
          }
          setTimeout(() => {
            if (field) field.classList.remove("active");
            if (copy) {
              copy.innerText = "Copy";
            }
          }, 3000000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } //
  };

  const showModal = () => {
    setToggleState(1);
  };

  return (
    <div className="share">
      <header>
        <button className="share-button share-link" onClick={showModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
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
              <FacebookIcon size={24} round={true} />
            </FacebookShareButton>
            <FacebookMessengerShareButton url="http://localhost:3000/" appId="">
              <FacebookMessengerIcon size={24} round={true} />
            </FacebookMessengerShareButton>
            <LinkedinShareButton
              url="http://localhost:3000/"
              // className="social__link-share"
            >
              <LinkedinIcon size={24} round={true} />
            </LinkedinShareButton>
            <TwitterShareButton
              url="http://localhost:3000/"
              // className="social__link-share"
            >
              <TwitterIcon size={24} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton
              url="http://localhost:3000/"
              // className="social__link-share"
            >
              <WhatsappIcon size={24} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton
              url="http://localhost:3000/"
              // className="social__link-share"
            >
              <TelegramIcon size={24} round={true} />
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
            <input type="text" value={link} />
            <button onClick={clickButton} onChange={clickButton}>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
