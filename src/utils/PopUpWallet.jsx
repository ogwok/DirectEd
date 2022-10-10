import React from "react";
import { useState } from "react";

export default function PopUpWallet() {
  const [pop, setPop] = useState(true);
  return (
    <div>
      <div
        id="popup-modal"
        tabindex="-1"
        class={`${
          pop ? "hidden md:flex" : "hidden"
        } overflow-y-auto overflow-x-hidden shadow-xl fixed top-0 right-0 left-0 mt-20  md:justify-end z-50 md:inset-0 h-modal md:h-full`}
      >
        <div class="relative p-2 w-full max-w-xs  h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <button
              onClick={() => setPop(false)}
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
            <div class="p-6 text-left">
              <h3 class="h1 mb-5 mt-5 text-lg text-gray-800 ">
                Start by connecting your wallet
              </h3>
              <p className="text-left">Need help? follow this link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
