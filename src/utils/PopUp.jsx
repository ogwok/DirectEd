import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PopUp() {
  const [pop, setPop] = useState(true);
  return (
    <div>
      <div
        id="popup-modal"
        tabindex="-1"
        class={`${
          pop ? "block md:flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 md:top-20 md:justify-center z-50 md:inset-0 h-modal md:h-full`}
      >
        <div class="relative p-4 w-full max-w-4xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setPop(false)}
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-cente"
              data-modal-toggle="popup-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
              <h1 class=" mt-2 mb-5 text-2xl font-normal text-black ">
                Thank you for your donation to DirectEd
              </h1>
              <h3 class="mb-5 text-lg font-normal text-gray-600 ">
                Your donation to St. Peter's High School was confirmed
              </h3>
              <p className="text-left max-w-sm justify-center mx-auto">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <span className="inline-flex mt-2 md:mb-48 font-extrabold items-center py-2 px-3 text-sm text-center text-primary bg-banner rounded-lg">
                <Link to="/scholar-section">View Progress</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
