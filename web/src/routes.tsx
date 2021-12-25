import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-point" element={<CreatePoint />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
