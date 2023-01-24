"use client";

import '@/styles/globals.css'
import '../styles/Home.module.css';
import '../styles/scrollup.css';
import '../styles/home.css';
import ScrollDow from '../components/ScrollDow';
import ScrollUp from '../components/scrollup/ScrollUp'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
        <ScrollDow/>
        <ScrollUp/>
      </html>
    );
  }