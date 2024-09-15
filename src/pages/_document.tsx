import { APP_LANG } from "@/config/constants";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={APP_LANG}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
