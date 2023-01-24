import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import data from "data.json";
import image from "../public/ManuelTL2.jpg";
import image1 from "../public/ManuelTL2.jpg";

const inter = Inter({ subsets: ['latin'] })


function LinkCard({href,title,image}:{href:string,title:string,image?:string}){
  return (
    <a href={href} className="flex item-center p-4 w-full 
    rounded-sm hover:scale-95 transition-all border border-gray-300 mb-3">
      <div className="flex flex-col text-center">
      <Image 
      className="rounded-full"
      alt={data.name}
      src={image1}
      width={40}
      height={40}/>
        <h2 className="font-semibold">{title}</h2>
        <p className="tet gray 500">{image}</p>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 ">
      <Image 
      className="rounded-full"
      alt={data.name}
      src={image}
      width={96}
      height={96}/>
      
      <h1 className="font-semibold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map((link)=>
      (
        <LinkCard key={link.href} {...link}/>
      ))}
    </div>
  )
}

