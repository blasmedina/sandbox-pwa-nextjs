import { useEffect, useState } from "react";

const useIsIos = () => {
  const [isIos, setIsIos] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);
  }, []);

  return isIos;
};

export default useIsIos;
