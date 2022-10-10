import Popup from "reactjs-popup";
import React, { useState } from "react";
import homepopup from "../images/homepopup.svg";

export default function ControlledPopup(openState) {
  const [open, setOpen] = useState(openState.open);
  const closeModal = () => setOpen(false);
  const [pop, setPop] = useState(true);
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div
          id="popup-modal"
          tabindex="-1"
          class={`${
            pop ? "block md:flex" : "hidden"
          } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  md:justify-center z-50 md:inset-0 h-modal md:h-full`}
        >
          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
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
              <div class="p-6 text-center">
                <h3 class="h1 mb-5 mt-5 text-lg text-gray-800 ">
                  How to donate
                </h3>
                <p className="text-left">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  <br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum."
                </p>
                <img className="ml-10 mt-4" src={homepopup} />
                <span className="inline-flex mt-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
