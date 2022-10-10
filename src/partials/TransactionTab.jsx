import React, { useState } from "react";
import TransactionCompleted from "./TransactionCompleted";
import TransactionExpired from "./TransactionExpired";
import TransactionPending from "./TransactionPending";

function TransactionTab() {
  const [showPending, setShowPending] = useState(true);
  const [showExpired, setShowExpired] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 mt-5 md:mt-5 md:pb-11">
            <h2 className="h2 font-playfair-display text-black">
              Transactions
            </h2>
          </div>

          {/* Transactions Section */}
          <div className="max-w-3xl mx-auto divide-white divide-y-2 bg-banner rounded-lg shadow-lg">
            <div class="border-b  border-gray-200 dark:border-gray-700 bg-white">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li
                  class={`flex mr-1 ${
                    showPending ? "bg-banner -mt-2" : "bg-transactions"
                  } rounded-t-lg px-1 items-end " role="presentation`}
                >
                  <button
                    onClick={() => {
                      setShowPending(true);
                      setShowExpired(false);
                      setShowCompleted(false);
                    }}
                    class={`inline-block p-1 md:p-4 rounded-t-lg 
                        ${
                          showPending
                            ? "text-gray-500 font-bold hover:text-blue-600"
                            : "text-gray-500 hover:text-gray-600 hover:border-gray-300 border-gray-100 "
                        }`}
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="true"
                  >
                    <span className="space-x-1 md:space-x-7">
                      <span>Pending</span>
                      <span>1</span>
                    </span>
                  </button>
                </li>
                <li
                  class={`flex mr-1 ${
                    showExpired ? "bg-banner -mt-2" : "bg-transactions"
                  } rounded-t-lg px-1 items-end role="presentation`}
                >
                  <button
                    onClick={() => {
                      setShowExpired(true);
                      setShowPending(false);
                      setShowCompleted(false);
                    }}
                    class={`inline-block p-1 md:p-4 rounded-t-lg
                          ${
                            showExpired
                              ? "text-blue-600 font-bold hover:text-blue-600 "
                              : "text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent dark:text-gray-400 border-gray-100 dark:border-gray-700"
                          }`}
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    <span className="space-x-1 md:space-x-7">
                      <span>Expired</span>
                      <span>0</span>
                    </span>
                  </button>
                </li>
                <li
                  class={`flex mr-1 ${
                    showCompleted ? "bg-banner -mt-2" : "bg-transactions"
                  } rounded-t-lg px-1 items-center role="presentation`}
                >
                  <button
                    onClick={() => {
                      setShowCompleted(true);
                      setShowExpired(false);
                      setShowPending(false);
                    }}
                    class={`inline-block p-1 md:p-4 rounded-t-lg
                          ${
                            showCompleted
                              ? "text-blue-600 font-bold hover:text-blue-600 "
                              : "text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent dark:text-gray-400 border-gray-100 dark:border-gray-700"
                          }`}
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    <span className="space-x-1 md:space-x-7">
                      <span>Completed</span>
                      <span>6</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div
                className={`${
                  showPending ? "block" : "hidden"
                } rounded-lg dark:bg-gray-800`}
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <TransactionPending />
              </div>
              <div
                class={`${
                  showExpired ? "block" : "hidden"
                } rounded-lg dark:bg-gray-800`}
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <TransactionExpired />
              </div>
              <div
                className={`${
                  showCompleted ? "block" : "hidden"
                } rounded-lg dark:bg-gray-800`}
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <TransactionCompleted />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransactionTab;
