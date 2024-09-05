import { useState, useEffect } from "react";

const useResponsiveVideoOpts = () => {
  const [opts, setOpts] = useState({
    height: "360",
    width: "640",
  });

  useEffect(() => {
    const updateOpts = () => {
      const width = window.innerWidth;

      if (width <= 375) {
        setOpts({
          height: "180",
          width: "300",
        });
      } else if (width <= 425) {
        setOpts({
          height: "240",
          width: "400",
        });
      } else if (width <= 520) {
        setOpts({
          height: "240",
          width: "400",
        });
      } else if (width <= 620) {
        setOpts({
          height: "300",
          width: "500",
        });
      } else if (width <= 768) {
        setOpts({
          height: "340",
          width: "560",
        });
      } else if (width <= 1024) {
        setOpts({
          height: "360",
          width: "640",
        });
      } else if (width >= 1280) {
        setOpts({
          height: "460",
          width: "800",
        });
      } else if (width >= 1500) {
        setOpts({
          height: "460",
          width: "800",
        });
      }
    };

    updateOpts();
    window.addEventListener("resize", updateOpts);
    return () => window.removeEventListener("resize", updateOpts);
  }, []);

  return opts;
};

export default useResponsiveVideoOpts;
