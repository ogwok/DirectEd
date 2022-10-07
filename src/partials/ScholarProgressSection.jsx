import React from "react";

function ScholarProgressSection() {
  return (
    <section className="relative">
      {/* Dark background */}

      <div className="flex max-w-6xl mx-auto px-4 sm:px-6 mt-10 justify-center">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-9">
            <h2 className="h3 font-playfair-display text-black">
              Scholars' Progress
            </h2>
          </div>

          {/* Section content */}
          <div className="flex flex-col text-center space-y-3 mx-auto justify-center mb-28">
            {/* table section */}

            <div class="p-3 bg-banner rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <tbody>
                  <tr class=" dark:bg-gray-800">
                    <td class="py-4 px-6">From address</td>
                    <td class="py-4 px-6">
                      addr93d9wek0wewjewas34asd3er4refsdfdsf
                    </td>
                  </tr>
                  <tr class=" dark:bg-gray-800">
                    <td class="py-4 px-6">Script hash</td>
                    <td class="py-4 px-6">drewrfe4323423432432434sdasdds</td>
                  </tr>
                  <tr class=" dark:bg-gray-800">
                    <td class="py-4 px-6">ADA sent:</td>
                    <td class="py-4 px-6">500</td>
                  </tr>
                  <tr class=" dark:bg-gray-800">
                    <td class="py-4 px-6">Token received</td>
                    <td class="py-4 px-6">asset4303asd</td>
                  </tr>
                  <tr class=" dark:bg-gray-800">
                    <td class="py-4 px-6">Total fees</td>
                    <td class="py-4 px-6">0.1634</td>
                  </tr>
                  <tr class=" dark:bg-gray-800">
                    <td class="py-4 px-6">Deadline:</td>
                    <td class="py-4 px-6">11/23/24</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <button className="inline-flex mt-5 items-center py-2 px-7 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScholarProgressSection;
