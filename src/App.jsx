import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.scss";
import AOS from "aos";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Selection from "./pages/Selection";
import Confirmation from "./pages/Confirmation";
import ScholarSection from "./pages/ScholarsProgress";
import Transactions from "./pages/Transactions";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/scholar-section" element={<ScholarSection />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}

export default App;
