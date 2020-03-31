import { useEffect } from "react";
import { createPortal } from "react-dom";

const TooltipPortal = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  // Mounts the element and cleans up afterwards.
  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export default TooltipPortal;
