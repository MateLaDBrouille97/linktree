import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkShare from "@/components/LinkShare";
import { useUserContext } from "../contexts/UserContext";


function LinkCard({ link }) {

  // ------------------------------- //

  const aws = require("aws-sdk");

  const [image, setImage] = useState();
  const[href,setHref]=useState();
  const { dbUser } = useUserContext();

  const s3 = new aws.S3();

  /* Fetch Image */
  aws.config.update({
    accessKeyId: "AKIAQK7EQ4DINBSQQM5L",
    secretAccessKey: "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",
  });

  useEffect(() => {
    const fetchImage = async () => {
      const params = {
        Bucket: "portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging",
        Key: link?.image,
      };
      await s3.getSignedUrlPromise("getObject", params).then((i) => setImage(i));
    };
    fetchImage();
  }, [dbUser]);

  useEffect(()=>{
    setHref(link?.href);
  },[dbUser])


  return (
    <a
      href={link?.href}
      className="flex justify-center items-center p-3 w-full rounded-lg hover:scale-105 transition-all bg-gray-100 mb-3 -mt-2 max-w-3xl home__linkcard-box"
    >
      <div className="flex text-center w-full home__linkcard-card">
        <div className="home__linkcard-img">
          {image && (
            <Image
              className={href?"linkcard-img":"linkcard-img"}
              alt={link?.title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className=" font-semibold w-full text-gray-700 -ml-10 home__linkcard-title">
          {link?.title}
        </h2>
        {href&&(<LinkShare href={href} />)}
      </div>
    </a>
  );
}

export default LinkCard;