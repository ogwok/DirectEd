import React from "react";
import { Link } from "react-router-dom";
import BannerImage01 from "../images/banner-image.svg";

function SelectionSection() {
  return (
    <section className="bg-slate-50">
      <div className="">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <img className="object-fill" src={BannerImage01} />
          <div className="flex mt-2 mx-auto space-x-12 md:space-x-96 items-center text-center pb-12 md:pb-20">
            <span className="ml-6">
              {" "}
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
            </span>
            <span className="font-bold h5  md:font-lg font-playfair-display text-slate-800">
              Donate to Kagumo High School
            </span>
          </div>

          {/* Faqs */}
          <div className="flex max-w-6xl mx-auto px-4 justify-center">
            <div className="flex flex-col text-center space-y-3 mx-auto justify-center mb-28">
              <span className="font-bold my-3">Select Donation Amount </span>
              <div className="flex space-x-2">
                <button className="inline-flex items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white bg-neutral8 focus:bg-primary rounded-lg">
                  ₳1000
                </button>
                <button className="inline-flex items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white bg-neutral8  focus:bg-primary rounded-lg">
                  ₳500
                </button>
                <button className="inline-flex items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white bg-neutral8 focus:bg-primary rounded-lg">
                  ₳100
                </button>
                <button className="inline-flex  items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white bg-neutral8 focus:bg-primary rounded-lg">
                  Custom
                </button>
              </div>
              <div>
                <button className="inline-flex mt-5 items-center py-2 px-7 text-sm font-medium text-center text-white bg-primary rounded-lg">
                  <Link to="/confirmation">Donate</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectionSection;
