import React from "react";
import Header from "../partials/Header";
import FeaturesHome03 from "../partials/FeaturesHome03";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <FeaturesHome03 />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
