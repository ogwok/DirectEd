import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import TransactionSection from "../partials/TransactionSection";

function Transactions() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}

        <TransactionSection />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Transactions;
