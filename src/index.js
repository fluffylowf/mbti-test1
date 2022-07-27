import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./Home";
import Results from "./Questions/Results";
import Question9 from "./Questions/Question9";
import Question8 from "./Questions/Question8";
import Question7 from "./Questions/Question7";
import Question6 from "./Questions/Question6";
import Question5 from "./Questions/Question5";
import Question4 from "./Questions/Question4";
import Question3 from "./Questions/Question3";
import Question2 from "./Questions/Question2";

export const GlobalStyle = createGlobalStyle`
  body{padding:0; margin:0}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/2" element={<Question2 />} />
      <Route path="/3" element={<Question3 />} />
      <Route path="/4" element={<Question4 />} />
      <Route path="/5" element={<Question5 />} />
      <Route path="/6" element={<Question6 />} />
      <Route path="/7" element={<Question7 />} />
      <Route path="/8" element={<Question8 />} />
      <Route path="/9" element={<Question9 />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </BrowserRouter>
);
