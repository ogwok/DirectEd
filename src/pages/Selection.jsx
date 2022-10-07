import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import SelectionSection from "../partials/Selection";

function Selection() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <SelectionSection />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Selection;
