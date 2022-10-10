import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ConfirmationSection from "../partials/ConfirmationSection";

function Confirmation() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <ConfirmationSection />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Confirmation;
