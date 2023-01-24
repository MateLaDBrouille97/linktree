import { Html, Head, Main, NextScript } from 'next/document';
import ScrollUp from '../components/scrollup';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="body main">
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
