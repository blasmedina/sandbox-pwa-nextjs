import { useEffect, useState } from "react";

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const useSupportsPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);

  useEffect(() => {
    const handler = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setSupportsPWA(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
    };
  }, []);

  return supportsPWA;
};

export default useSupportsPWA;
