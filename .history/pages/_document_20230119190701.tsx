import { Html, Head, Main, NextScript } from 'next/document';
import ScrollUp from '../components/scrollup/ScrollUp';
import ScrollDow from '../components/ScrollDow';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="body main">
        <Main />
        <NextScript />
      </body>
      <ScrollDow/>
      <ScrollUp/>

    </Html>
  )
}
