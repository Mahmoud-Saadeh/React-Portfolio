import { useEffect } from "react";

const RefreshScroll = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return null;
};

export default RefreshScroll;
