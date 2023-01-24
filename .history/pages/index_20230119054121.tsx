
import Image from "next/image";
import data from "data.json";
import image from "../public/ManuelTL2.jpg";
import image1 from "../public/ManuelTL2.jpg";

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
    rounded-lg hover:scale-95 transition-all border bg-gray-100 border-gray-300 mb-3 "
    >
      <div className="flex text-center w-full">
        {image1 && (
          <Image
            className="rounded-sm"
            alt={data.name}
            src={image1}
            width={48}
            height={48}
          />
        )}
        <h2 className="font-semibold w-full text-center">{title}</h2>
        <p className="tet gray 500">{image}</p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
      <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 ">
        <Image
          className="rounded-full"
          alt={data.name}
          src={image}
          width={96}
          height={96}
        />

        <h1 className="font-semibold mt-4 mb-8 text-xl">{data.name}</h1>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>
  );
}
