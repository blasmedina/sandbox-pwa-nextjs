import { useEffect, useState } from "react";

const useIsPortrait = () => {
  const [isPortrait, setIsPortrait] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isPortrait;
};

export default useIsPortrait;
