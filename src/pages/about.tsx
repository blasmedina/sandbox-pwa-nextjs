import InstallButton from "@/components/InstallPWA/InstallPWA";
import Layout from "@/components/Layout/Layout";
import {
  APP_DESCRIPTION,
  APP_REPOSITORY,
  APP_ROUTE_DICTIONARY,
} from "@/config/constants";
import { NextSeo } from "next-seo";

const About = () => {
  return (
    <>
      <NextSeo title={APP_ROUTE_DICTIONARY.about.title} />
      <Layout>
        <h2>{APP_ROUTE_DICTIONARY.about.title}</h2>
        <p>{APP_DESCRIPTION}</p>
        <p>
          Este código fuente de este proyecto lo puedes encontrar en{" "}
          <a href={APP_REPOSITORY} target="_blank">
            {APP_REPOSITORY}
          </a>
        </p>
        <InstallButton />
      </Layout>
    </>
  );
};

export default About;
