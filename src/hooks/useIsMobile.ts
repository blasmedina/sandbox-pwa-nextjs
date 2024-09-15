import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isMobileDevice = /iphone|ipad|ipod|android|mobile/.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return isMobile;
};

export default useIsMobile;
