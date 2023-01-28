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
import UserContextProvider from "../contexts/UserContext";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  ...awsconfig,
  ssr: true,
});

export default function RootLayout({children}) {
    return (
      <UserContextProvider>
         <html lang="en">
        <body>{children}</body>
        {/* <ScrollDow/> */}
        {/* <ScrollUp/> */}
      </html>
      </UserContextProvider>
     
    );
  }