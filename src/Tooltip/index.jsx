import React, { useState } from "react";
import TooltipPopover from "../TooltipPopover";
import TooltipPortal from "../TooltipPortal";

// Reference for tooltip
const btnRef = React.createRef();

const Tooltip = () => {

  const [isOn, setOn] = useState(false); // toggles dropdown visibility for tooltip
  const [coords, setCoords] = useState({}); // takes current button coordinates for tooltip

  const updateTooltipCoords = button => {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2, // add half the width of the button for centering
      top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };
  return (
    <>
    <div className="buttons__container">
    <button
    className="tooltip__hover"
    ref={btnRef}
    type="button"
    onClick={e => {
      updateTooltipCoords(e.target);
      setOn(!isOn);
    }}
    onMouseEnter={e => {
      updateTooltipCoords(e.target);
      setOn(true);
    }}
    onMouseLeave={e => {
      updateTooltipCoords(e.target);
      setOn(false);
    }}
    onFocus={e => {
      updateTooltipCoords(e.target);
      setOn(true);
    }}
    >
    i
    </button>
    {isOn && (
      <TooltipPortal>
        <TooltipPopover
          className="tooltip-popover"
          coords={coords}
          updateTooltipCoords={() =>
            updateTooltipCoords(btnRef.current.buttonNode)
          }
        />
      </TooltipPortal>
    )}
    </div>
    </>
  );
}

export default Tooltip;