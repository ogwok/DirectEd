import React from "react";
import Accordion from "../utils/Accordion";
import user1 from "../images/user-image-1.svg";
import location_icon from "../images/location-icon.svg";
import linkdlin_icon from "../images/linkdln-icon.svg";
import twitter_icon from "../images/twitter-icon.svg";

function TransactionSection() {
  const data = [{ name: "Akinyi Zawadi", completedBlocks: 3, image: user1 }];
  return (
    <>
      {/* Faqs */}
      <ul className="max-w-3xl mx-auto divide-white divide-y-2 bg-banner shadow-lg">
        <li className="flex ml-20 py-5 space-x-48 items-center ">
          <span>Name</span>
          <span>Milestone Progress</span>
          <span>Contact</span>
        </li>
        {data.map((item) => (
          <Accordion
            name={item.name}
            completedBlocks={item.completedBlocks}
            image={item.image}
          >
            <div className="ml-20">
              <span className="flex">
                <span className="mr-3">
                  <img src={location_icon} />
                </span>
                <p className="text-neutral3 font-bold">Naivasha, Kenya</p>
              </span>
              <p className="text-neutral3 mt-3">
                I'm a web developer with in-depth experience in UI/UX design. In
                a nutshell, I create websites that help organizations address
                business challenges and meet their needs. I manage everything
                from website navigation and layout to a company's web hosting
                and security architecture.
              </p>
              <span className="flex mt-5 space-x-60 items-center">
                <p className="text-neutral3 text-sm ">
                  https://userid.github.io/reponame
                </p>
                <span className="flex">
                  <span className="ml-14 mr-3 cursor-pointer">
                    <img src={linkdlin_icon} />
                  </span>
                  <span className="cursor-pointer">
                    <img src={twitter_icon} />
                  </span>
                </span>
              </span>
            </div>
          </Accordion>
        ))}
      </ul>
    </>
  );
}

export default TransactionSection;
