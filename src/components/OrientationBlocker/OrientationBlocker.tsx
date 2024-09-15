import React from "react";
import useIsClient from "@/hooks/useIsClient";
import useIsMobile from "@/hooks/useIsMobile";
import useIsPortrait from "@/hooks/useIsPortrait";

interface OrientationBlockerProps {
  children: React.ReactNode;
}

const OrientationBlocker: React.FunctionComponent<OrientationBlockerProps> = ({
  children,
}) => {
  const isPortrait = useIsPortrait();
  const isClient = useIsClient();
  const isMobile = useIsMobile();

  if (!isClient) {
    return null;
  }

  // Mostrar mensaje solo en dispositivos móviles y si no está en orientación vertical
  if (isMobile && !isPortrait) {
    return (
      <div className="orientation-warning">
        <p>
          Por favor, gira tu dispositivo a orientación vertical para usar esta
          aplicación.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default OrientationBlocker;
