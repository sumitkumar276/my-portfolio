"use client";

import { useEffect, useState } from "react";

export type Device = "mobile" | "tablet" | "desktop";

export const useDeviceDetect = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice("mobile");
      } else if (width < 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    const checkTouch = () => {
      setIsTouchDevice(
        () =>
          window.matchMedia("(pointer: coarse)").matches ||
          window.matchMedia("(hover: none)").matches
      );
    };

    checkDevice();
    checkTouch();

    window.addEventListener("resize", checkDevice, { passive: true });
    window.addEventListener("orientationchange", checkDevice, { passive: true });

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("orientationchange", checkDevice);
    };
  }, []);

  return { device, isTouchDevice };
};
