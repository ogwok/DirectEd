import React from "react";
import AccordionTransaction from "../utils/AccordionTransaction";

function TransactionExpired() {
  const data = [];
  return (
    <>
      {/* Transaction Section */}
      <ul className="max-w-3xl mx-auto divide-white divide-y-2 bg-banner shadow-lg">
        <li className="flex text-sm md:ml-20 py-3 space-x-12 ml-1 md:space-x-36 items-center">
          <span>Type</span>
          <span>Event</span>
          <span>Status</span>
          <span>Action</span>
        </li>
        {data.map((item) => (
          <AccordionTransaction
            name={item.name}
            completedBlocks={item.completedBlocks}
            image={item.image}
          >
            <div className="flex space-x-11 items-start ml-8">
              <span className="text-neutral3 text-sm mt-3">
                <ul>
                  <li>Donation: $1000 / 337238842192374 ADA</li>
                  <li>Total fees: </li>
                  <li>Transaction fee: $0.758373728282738323</li>
                  <li>Agent fee: $0.758373728282738323</li>
                  <li>Datum Hash: ab392n302n9234h0f827n3</li>
                  <li>Script Datum Hash: script_j2340923n4f0</li>
                </ul>
              </span>
              <span className="flex mt-5  space-x-60 items-center">
                <span className="text-neutral3 text-sm ">
                  <ul>
                    <li>Deadline: 03/23/26</li>
                    <li>Owner’s Address: $hdhbsuiefk0892</li>
                    <li>Request Address: idsudbfuehueifdsodfdijosjif</li>
                  </ul>
                </span>
              </span>
            </div>
          </AccordionTransaction>
        ))}
      </ul>
    </>
  );
}

export default TransactionExpired;
