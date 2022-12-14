import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerImage01 from "../images/kagumo-highschool.svg";
import BannerImage02 from "../images/strathmore-highschool.svg";
import clockIcon from "../images/clock-icon.svg";
import ControlledPopup from "../utils/ControlledPopup";
import PopUpWallet from "../utils/PopUpWallet";

function ScholarshipPools() {
  let value2 = localStorage.getItem("visited");
  const [popup, setPopup] = useState(value2 ? false : true);

  useEffect(() => {
    let value = localStorage.getItem("visited");
    value ? setPopup(false) : setPopup(true);
    localStorage.setItem("visited", true);
  }, [popup]);

  return (
    <section className="relative">
      <div className="flex max-w-6xl mx-auto px-4 sm:px-6 mt-10 justify-center">
        <div className="py-12 md:py-20 ">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-12">
            <h2 className="h2 font-playfair-display text-black">
              Scholarship Pools
            </h2>
          </div>

          <PopUpWallet />
          <ControlledPopup open={popup} />

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-10 ">
            {/* 1st school */}
            <article data-aos="fade-up">
              <div className="max-w-md bg-banner rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={BannerImage01} alt="" />
                </a>
                <div className="p-5 text-center">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kagumo High School
                  </h5>
                  <span
                    onClick={() => window.open("https://directed.dev/")}
                    className="text-sm cursor-pointer"
                  >
                    Read More
                  </span>

                  <div className="grid md:grid-cols-2 m-6 pb-6 border-b border-white  ">
                    <div className="flex flex-col border-r border-white">
                      <span className="text-3xl font-bold">23</span>
                      <span>Scholarships funded</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">1</span>
                      <span>Remaining scholarship naming right</span>
                    </div>
                  </div>
                  <div className="flex flex-col mb-6 ">
                    <div className="flex justify-between">
                      <span className="flex text-sm text-slate-400 ml-5">
                        <img className="mr-6" src={clockIcon} />
                        33 days left
                      </span>
                      <span className="text-sm text-slate-400">
                        124 people have donated
                      </span>
                    </div>
                    {/* progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-3">
                      <div className="bg-footerInner h-2.5 rounded-full w-4/6"></div>
                    </div>
                    <span className="text-black">
                      {" "}
                      $300 to fund the next scholarship{" "}
                    </span>
                  </div>
                  <Link
                    to="/selection"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </article>

            {/* 2nd school */}
            <article data-aos="fade-up">
              <div className="max-w-md bg-banner rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={BannerImage02} alt="" />
                </a>
                <div className="p-5 text-center">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Strathmore High School
                  </h5>
                  <span
                    onClick={() => window.open("https://directed.dev/")}
                    className="text-sm cursor-pointer"
                  >
                    Read More
                  </span>

                  <div className="grid md:grid-cols-2 m-6 pb-6 border-b border-white  ">
                    <div className="flex flex-col border-r border-white">
                      <span className="text-3xl font-bold">23</span>
                      <span>Scholarships funded</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">1</span>
                      <span>Remaining scholarship naming right</span>
                    </div>
                  </div>
                  <div className="flex flex-col mb-6 ">
                    <div className="flex justify-between">
                      <span className="flex text-sm text-slate-400 ml-5">
                        <img className="mr-6" src={clockIcon} />
                        33 days left
                      </span>
                      <span className="text-sm text-slate-400">
                        124 people have donated
                      </span>
                    </div>
                    {/* progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-3">
                      <div className="bg-footerInner h-2.5 rounded-full w-4/6"></div>
                    </div>
                    <span className="text-black">
                      {" "}
                      $300 to fund the next scholarship{" "}
                    </span>
                  </div>
                  <Link
                    to="selection"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipPools;
