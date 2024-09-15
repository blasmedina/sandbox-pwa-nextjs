import InstallButton from "@/components/InstallPWA/InstallPWA";
import Layout from "@/components/Layout/Layout";
import { APP_ROUTE_DICTIONARY, APP_TITLE } from "@/config/constants";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo title={APP_ROUTE_DICTIONARY.home.title} />
      <Layout>
        <h1>Bienvenido a {APP_TITLE}</h1>
        <InstallButton />
      </Layout>
    </>
  );
};

export default Home;
