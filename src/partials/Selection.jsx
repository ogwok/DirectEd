import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerImage01 from "../images/banner-image.svg";
import NftImage01 from "../images/nft-small.svg";
import NftImage02 from "../images/nft-two.svg";
import NftImage03 from "../images/nft-three.svg";
import NftImage04 from "../images/nft-four.svg";

function SelectionSection() {
  const [nftImage, setNftImage] = useState();
  const [nftOne, setNftOne] = useState(false);
  const [nftTwo, setNftTwo] = useState(false);
  const [nftThree, setNftThree] = useState(false);
  const [nftFour, setNftFour] = useState(false);
  const [nft, setNft] = useState(false);
  const [nftState, setNftState] = useState(false);

  return (
    <section className="bg-slate-50">
      <div className="">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <img className="object-fill" src={BannerImage01} />
          <div className="flex mt-2 mx-auto space-x-12  md:space-x-80 items-center pb-12 md:pb-12">
            <span className="ml-6">
              <Link to="/">
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
              </Link>
            </span>

            <span className="font-bold text-2xl md:text-4xl font-playfair-display text-black">
              Donate to Kagumo High School
            </span>
          </div>

          {/* Selections */}
          <div className="flex max-w-6xl mx-auto px-4 justify-center">
            <div className="flex flex-col text-center space-y-3 mx-auto justify-center mb-28">
              <span className="font-bold my-0">Select Donation Amount </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setNftOne(!nftOne);
                    setNftTwo(false);
                    setNftThree(false);
                    setNftFour(false);
                    setNftImage(NftImage01);
                  }}
                  className={`inline-flex items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white ${
                    nftOne ? "bg-primary" : "bg-neutral8"
                  }  rounded-lg`}
                >
                  ₳1000
                </button>
                <button
                  onClick={() => {
                    setNftOne(false);
                    setNftTwo(!nftTwo);
                    setNftThree(false);
                    setNftFour(false);
                    setNftImage(NftImage02);
                  }}
                  className={`inline-flex items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white ${
                    nftTwo ? "bg-primary" : "bg-neutral8"
                  }  rounded-lg`}
                >
                  ₳500
                </button>
                <button
                  onClick={() => {
                    setNftOne(false);
                    setNftTwo(false);
                    setNftThree(!nftThree);
                    setNftFour(false);
                    setNftImage(NftImage03);
                  }}
                  className={`inline-flex items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white ${
                    nftThree ? "bg-primary" : "bg-neutral8"
                  }  rounded-lg`}
                >
                  ₳100
                </button>
                <button
                  onClick={() => {
                    setNftOne(false);
                    setNftTwo(false);
                    setNftThree(false);
                    setNftFour(!nftFour);
                    setNftImage(NftImage04);
                  }}
                  className={`inline-flex items-center py-2 md:px-7 px-5 text-sm font-medium text-center text-slate-600 focus:text-white ${
                    nftFour ? "bg-primary" : "bg-neutral8"
                  }  rounded-lg`}
                >
                  {" "}
                  Custom
                </button>
              </div>
              <div
                className={` ${
                  nftOne || nftTwo || nftThree || nftFour
                    ? "flex flex-col"
                    : "hidden"
                }`}
              >
                <p>Convert to ADA: $100.33723884219237474833</p>
                <p>Total fees: $2.47473838299373744857584999373494</p>
                <img
                  onClick={() => setNftState(!nftState)}
                  className={`${nftState ? "h-60" : "h-24"}`}
                  src={nftImage}
                />
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
