import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import data from "data.json";
import image from "../public/ManuelTL2.jpg";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center">
      <Image 
      alt={data.name}
      src={image}
      width={48}
      height={48}/>

    </div>
  )
}