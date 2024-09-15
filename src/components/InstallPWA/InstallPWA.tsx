import React from "react";
import useIsIos from "@/hooks/useIsIos";
import useIsMobile from "@/hooks/useIsMobile";
import useIsStandalone from "@/hooks/useIsStandalone";
import useSupportsPWA, {
  BeforeInstallPromptEvent,
} from "@/hooks/useSupportsPWA";
import { Alert, Button } from "react-bootstrap";

const InstallPWA: React.FC = () => {
  const isIos = useIsIos();
  const isMobile = useIsMobile();
  const isInStandaloneMode = useIsStandalone();
  const supportsPWA = useSupportsPWA();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!supportsPWA) {
      return;
    }

    const promptInstall = window.prompt as unknown as BeforeInstallPromptEvent;
    if (promptInstall) {
      promptInstall.prompt();
    }
  };

  if (isIos && !isInStandaloneMode) {
    return (
      <Alert variant="primary">
        Para instalar esta aplicación en tu <strong>iPhone/iPad</strong>, pulsa
        el botón de compartir y selecciona <strong>Agregar a Inicio</strong>.
      </Alert>
    );
  }

  if (!supportsPWA || !isMobile) {
    return null;
  }

  return (
    <Button aria-label="Install app" onClick={onClick}>
      Install app
    </Button>
  );
};

export default InstallPWA;
