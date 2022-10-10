import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function AccordionTransaction({ children, tag = "li", action, active }) {
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
          <button
            className={`inline-flex items-center ml-2 py-1 px-3 text-sm font-medium text-center ${
              action == "cancel"
                ? "text-red-600 border-red-700 border-2"
                : "text-primary border-primary border-2"
            } border rounded-xl `}
          >
            {action}
          </button>
          <svg
            className={`text-blue-600 shrink-0 ml-1 ${
              accordionOpen && "rotate-90"
            }`}
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9504 30.1496C14.1498 29.349 14.1498 28.051 14.9504 27.2504L21.7008 20.5L14.9504 13.7496C14.1498 12.949 14.1498 11.651 14.9504 10.8504C15.751 10.0499 17.049 10.0499 17.8495 10.8504L26.0495 19.0504C26.8501 19.851 26.8501 21.149 26.0495 21.9496L17.8495 30.1496C17.049 30.9501 15.751 30.9501 14.9504 30.1496Z"
              fill="#395241"
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
