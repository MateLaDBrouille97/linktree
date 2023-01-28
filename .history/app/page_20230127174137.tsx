"use client";


import React from "react";

import UserContextProvider from "../contexts/UserContext";

import { Amplify} from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
import Home2 from "@/components/Home2";

Amplify.configure({
  ...awsconfig,
  ssr: true,
});



export default function Home() {
  
  return (
    <UserContextProvider>
     <Home2/>
    </UserContextProvider>
  );
}
