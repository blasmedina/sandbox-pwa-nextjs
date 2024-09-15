import variables from "@/styles/variables.module.scss";
import { DefaultSeoProps } from "next-seo";
import { HiHome, HiOutlineSupport } from "react-icons/hi";
import { Router } from "@/models/router.interface";
import { WebAppManifest } from "@/models/web-app-manifest.interface";
import packageJson from "../../package.json";

export const APP_DESCRIPTION =
  "Una Progressive Web App construida con NextJS, React Bootstrap, y Redux Toolkit." as const;
export const APP_KEYWORDS = [
  "nextjs",
  "react-bootstrap",
  "redux-toolkit",
  "blasmedina",
];
export const APP_SHORT_NAME = "PWA2" as const;
export const APP_TITLE = "Mi PWA 2" as const;
export const APP_URL = "https://sandbox-pwa-nextjs.blasmedina.cl" as const;
export const APP_LANG = "es" as const;
export const APP_LOCALE = "es_ES" as const;
export const APP_THEME_COLOR = variables.colorDark;
export const APP_BACKGROUND_COLOR = variables.colorPrimary;
export const WAITING_TIME_IN_WELCOME = 3000;
export const APP_VERSION = packageJson.version;
export const APP_REPOSITORY = packageJson.repository.url;

export const APP_ROUTE_DICTIONARY = {
  index: {
    title: "Index",
    href: "/",
  },
  home: {
    title: "Home",
    href: "/home",
  },
  about: {
    title: "Sobre mí",
    href: "/about",
  },
} as const;

export const OPTIONS: Router[] = [
  {
    title: APP_ROUTE_DICTIONARY.home.title,
    href: APP_ROUTE_DICTIONARY.home.href,
    icon: HiHome,
  },
  {
    title: APP_ROUTE_DICTIONARY.about.title,
    href: APP_ROUTE_DICTIONARY.about.href,
    icon: HiOutlineSupport,
  },
] as const;

export const MANIFEST: WebAppManifest = {
  name: APP_TITLE,
  short_name: APP_SHORT_NAME,
  description: APP_DESCRIPTION,
  id: APP_ROUTE_DICTIONARY.home.href,
  start_url: APP_ROUTE_DICTIONARY.home.href,
  display_override: ["fullscreen", "minimal-ui"],
  display: "standalone",
  orientation: "portrait",
  icons: [
    {
      src: "/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  background_color: APP_BACKGROUND_COLOR,
  theme_color: APP_THEME_COLOR,
  screenshots: [
    {
      src: "/screenshots/mobile-screenshot.png",
      sizes: "640x1136",
      type: "image/png",
      form_factor: "narrow",
      orientation: "portrait",
      label: "Captura de pantalla móvil de la página de inicio",
    },
    {
      src: "/screenshots/desktop-screenshot.png",
      sizes: "1280x800",
      type: "image/png",
      form_factor: "wide",
      orientation: "landscape",
      label: "Captura de pantalla de la página principal en escritorio",
    },
  ],
} as const;

export const SEO_CONFIG: DefaultSeoProps = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  titleTemplate: `%s | ${APP_TITLE}`,
  themeColor: APP_THEME_COLOR,
  defaultTitle: `${APP_TITLE}`,
  canonical: APP_URL,
  openGraph: {
    type: "website",
    locale: APP_LOCALE,
    url: APP_URL,
    site_name: APP_TITLE,
    images: [
      {
        alt: APP_TITLE,
        url: `${APP_URL}/images/open-graph.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: APP_KEYWORDS.join(", "),
    },
    {
      name: "author",
      content: "Blas Medina",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "manifest",
      href: "/api/manifest",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icons/icon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icons/icon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-192x192.png",
      sizes: "192x192",
    },
  ],
};
