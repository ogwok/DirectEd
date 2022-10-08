import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ScholarProgressSection from "../partials/ScholarProgressSection";
import Faqs from "../partials/Faqs";

function ScholarSection() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <ScholarProgressSection />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default ScholarSection;
