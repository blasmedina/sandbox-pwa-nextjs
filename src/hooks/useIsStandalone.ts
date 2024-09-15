import { useEffect, useState } from "react";

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

const useIsStandalone = () => {
  const [isInStandaloneMode, setIsInStandaloneMode] = useState(false);

  useEffect(() => {
    const isStandalone = window.navigator.standalone === true;
    setIsInStandaloneMode(isStandalone);
  }, []);

  return isInStandaloneMode;
};

export default useIsStandalone;
