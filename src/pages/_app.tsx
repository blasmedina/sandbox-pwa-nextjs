import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
