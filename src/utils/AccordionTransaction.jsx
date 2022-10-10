import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function AccordionTransaction({
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
        className="flex font-playfair-display items-start w-full text-left py-5 px-1 md:space-x-24 md:px-7"
        onClick={(e) => {
          e.preventDefault();
          setAccordionOpen(!accordionOpen);
        }}
        aria-expanded={accordionOpen}
      >
        <span className="mr-3 md:ml-8 text-xs md:text-sm">Donation</span>
        <span className="md:ml-8 text-xs md:text-sm">
          Strathmore High School
        </span>
        <span className="md:ml-8 text-xs md:text-sm ">Processing</span>
        <div className="flex justify-center items-center">
          <button className="inline-flex items-center ml-2 py-2 px-3 text-sm font-medium text-center text-red-600 border rounded-xl border-red-700">
            Cancel
          </button>
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
        <p className="pb-5 px-7 overflow-auto">{children}</p>
      </div>
    </Component>
  );
}

export default AccordionTransaction;

AccordionTransaction.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired]),
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
