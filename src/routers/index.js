import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/landing";
import ExplorePage from "../Pages/explore";

const Routing = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/new-member" element={<LandingPage extra={true} />}/>

        <Route path="/explore" element={<ExplorePage />} />

      </Routes>
    </Suspense>
  );
};

export default Routing;
