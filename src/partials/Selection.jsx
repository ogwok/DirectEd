import React from "react";
import BannerImage01 from "../images/banner-image.svg";

function SelectionSection() {
  return (
    <section className="">
      {/* Dark background */}

      <div className="flex flex-col mt-10">
        {/* Section header */}
        <div className="flex">
          <img className="object-fill" src={BannerImage01} />
        </div>

        <div className="flex p-5 mb-10 space-x-96">
          <svg
            width="23"
            height="37"
            viewBox="0 0 23 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 32.6525L8.78408 18.5L23 4.3475L18.6235 0L0 18.5L18.6235 37L23 32.6525Z"
              fill="#374756"
            />
          </svg>

          <p className="h3  font-playfair-display text-black">
            Donate to Kagumo High School
          </p>
        </div>
      </div>
      <div className="flex max-w-6xl mx-auto px-4 justify-center">
        <div className="flex flex-col text-center space-y-3 mx-auto justify-center mb-28">
          <span className="font-bold my-3">Select Donation Amount </span>
          <div className="flex space-x-7">
            <button className="inline-flex items-center py-2 px-7 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              ₳1000
            </button>
            <button className="inline-flex items-center py-2 px-7 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              ₳500
            </button>
            <button className="inline-flex items-center py-2 px-7 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              ₳100
            </button>
            <button className="inline-flex  items-center py-2 px-7 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Custom
            </button>
          </div>
          <div>
            <button className="inline-flex mt-5 items-center py-2 px-7 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectionSection;
