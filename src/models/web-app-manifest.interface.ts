type WebAppManifestOrientation =
  | "any"
  | "natural"
  | "landscape"
  | "portrait"
  | "portrait-primary"
  | "portrait-secondary"
  | "landscape-primary"
  | "landscape-secondary";

type WebAppManifestFormFactor = "wide" | "narrow";
export interface WebAppManifestIcon {
  src: string;
  sizes: string;
  type: string;
  purpose?: string;
}

type WebAppManifestDisplay =
  | "fullscreen"
  | "standalone"
  | "minimal-ui"
  | "browser";

type WebAppManifestDisplayOverride = (
  | "browser"
  | "minimal-ui"
  | "standalone"
  | "fullscreen"
)[];

type WebAppManifestDir = "ltr" | "rtl" | "auto";

interface WebAppManifestScreenshot {
  src: string;
  sizes: string;
  type: string;
  label?: string;
  form_factor?: WebAppManifestFormFactor;
  orientation?: WebAppManifestOrientation;
}

export interface WebAppManifest {
  name?: string;
  short_name?: string;
  description?: string;
  icons?: WebAppManifestIcon[];
  screenshots?: WebAppManifestScreenshot[];
  id?: string;
  start_url?: string;
  display?: WebAppManifestDisplay;
  orientation?: WebAppManifestOrientation;
  background_color?: string;
  theme_color?: string;
  scope?: string;
  lang?: string;
  dir?: WebAppManifestDir;
  display_override?: WebAppManifestDisplayOverride;
}
