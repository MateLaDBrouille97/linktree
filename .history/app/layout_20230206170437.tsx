"use client";

import '@/styles/globals.css'
import '../styles/Home.module.css';
import '../styles/scrollup.css';
import '../styles/home.css';
import '../styles/socials.css';
import '../styles/share.css';
import '../styles/linkShare.css';
// import ScrollDow from '../components/ScrollDow';
// import ScrollUp from '../components/scrollup/ScrollUp'
import React from 'react';
import { AppProps } from 'next/app';




export default function RootLayout({ children }:AppProps) {
    return (
      
         <html lang="en">
        <body>{children}</body>
        {/* <ScrollDow/> */}
        {/* <ScrollUp/> */}
      </html>
      
     
    );
  }