import React, { useEffect } from "react";
import debounce from "lodash/debounce";

const TooltipPopover = ({ children, coords, updateTooltipCoords }) => {
  const updateCoords = debounce(updateTooltipCoords, 100);

  const styles = {
    popover: {
      position: "absolute",
      width: 210,
      // transform: "translate(-87%, 44px)"
      transform: "translate(-37%, 44px)"
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateCoords);
    return () => window.removeEventListener("resize", updateCoords);
  }, [updateCoords]);

  return (
    <div
      style={{ ...styles.popover, ...coords }}
      className="ant-popover ant-popover-placement-top"
    >
      <div className="ant-popover-content">
        <div className="ant-popover-arrow" />
        <div className="ant-popover-inner" role="tooltip">
          <div>
            {/* Hannah Neal: To make this tooltip reusible throughout the site, uncomment these lines and set up a separate component for tooltip content to be passed to this. */}
            {/* <div className="ant-popover-title">Title</div> */}
            {/* <div className="ant-popover-inner-content">{children}</div> */}
            <div className="ant-popover-inner-content">
              I'm the tooltip content! 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipPopover;
