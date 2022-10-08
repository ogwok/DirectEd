import React, { useState } from "react";
import user1 from "../images/user-image-1.svg";
import TransactionSection from "./TransactionSection";

function TransactionTab() {
  const [showPaypal, setShowPaypal] = useState(true);
  const [showStripe, setShowStripe] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:mt-5 md:pb-11">
            <h2 className="h2 font-playfair-display text-slate-800">
              Transactions
            </h2>
          </div>

          {/* Faqs */}
          <div className="max-w-3xl mx-auto divide-white divide-y-2 bg-banner rounded-lg shadow-lg">
            <div class="border-b  border-gray-200 dark:border-gray-700">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li class="mr-2" role="presentation">
                  <button
                    onClick={() => {
                      setShowPaypal(true);
                      setShowStripe(false);
                      setShowCompleted(false);
                    }}
                    class={`inline-block p-4 rounded-t-lg border-b-2 
                        ${
                          showPaypal
                            ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                            : "text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent dark:text-gray-400 border-gray-100 dark:border-gray-700"
                        }`}
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="true"
                  >
                    Pending
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    onClick={() => {
                      setShowStripe(true);
                      setShowPaypal(false);
                      setShowCompleted(false);
                    }}
                    class={`inline-block p-4 rounded-t-lg border-b-2 
                          ${
                            showStripe
                              ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                              : "text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent dark:text-gray-400 border-gray-100 dark:border-gray-700"
                          }`}
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Expired
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    onClick={() => {
                      setShowCompleted(true);
                      setShowStripe(false);
                      setShowPaypal(false);
                    }}
                    class={`inline-block p-4 rounded-t-lg border-b-2 
                          ${
                            showCompleted
                              ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                              : "text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent dark:text-gray-400 border-gray-100 dark:border-gray-700"
                          }`}
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Completed
                  </button>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div
                className={`${
                  showPaypal ? "block" : "hidden"
                } rounded-lg dark:bg-gray-800`}
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <TransactionSection />
              </div>
              <div
                class={`${
                  showStripe ? "block" : "hidden"
                } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400 mt-5"
                >
                  <li class="flex space-x-2">
                    <svg
                      class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="font-light leading-tight">
                      Get your products to the top of the world's most powerful
                      search engine with Airdady’s automated Google Shopping
                      ads. You choose the audience and the products — we take
                      care of the rest.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransactionTab;
