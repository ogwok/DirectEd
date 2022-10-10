import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import user1 from "../images/user-image-1.svg";

function Accordion({
  children,
  tag = "li",
  name,
  active,
  completedBlocks,
  image,
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordion = useRef(null);
  const Component = tag;

  useEffect(() => {
    setAccordionOpen(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordion]);

  return (
    <Component>
      <button
        className="h4 font-playfair-display flex items-center justify-between w-full text-left py-5 px-2 md:px-7"
        onClick={(e) => {
          e.preventDefault();
          setAccordionOpen(!accordionOpen);
        }}
        aria-expanded={accordionOpen}
      >
        {" "}
        <div className="flex items-center">
          <span>
            <img src={image} />
          </span>

          <span className="flex-shrink ml-1 md:ml-8 text-sm">{name}</span>
        </div>
        <div className="flex-initial space-x-1">
          {Array(completedBlocks)
            .fill()
            .map(() => (
              <span className="inline-flex items-center py-2 px-1 md:px-7 text-sm font-medium text-center text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300"></span>
            ))}
          {Array(5 - completedBlocks)
            .fill()
            .map(() => (
              <span className="inline-flex items-center py-2 px-1 md:px-7 text-sm font-medium text-center text-white bg-rings focus:ring-4 focus:outline-none focus:ring-blue-300"></span>
            ))}
        </div>
        <div className="flex justify-center items-center">
          <span className="text-sm text-primary">
            {accordionOpen ? "Close" : "More"}
          </span>
          <svg
            className={`text-blue-600 shrink-0 ml-1 ${
              accordionOpen && "rotate-90"
            }`}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.66665L21.3333 16L12 25.3333"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
      <div
        ref={accordion}
        className="text-slate-500 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          accordionOpen
            ? { maxHeight: accordion.current.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <p className="pb-5 px-7">{children}</p>
      </div>
    </Component>
  );
}

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired]),
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
