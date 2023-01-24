import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import data from "data.json";
import image from "../public/ManuelTL2.jpg";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16">
      <Image 
      className="rounded-full"
      alt={data.name}
      src={image}
      width={96}
      height={96}/>
      
      <h1 className="font-semibold mt-4 text-xl">{data.name}</h1>

    </div>
  )
}