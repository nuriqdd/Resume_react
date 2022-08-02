import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import School from "./School";
import Hobby from "./Hobby";
import Contacts from "./Contacts";
import NotFound from "./NotFound";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Gallery from "./Gallery";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route path="/school" element={<School />} />
      <Route path="/hobby" element={<Hobby />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
