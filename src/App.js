import React from "react";

import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Components/MainRoutes";
import Headers from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
      {/* <Header />
      
      <School />
      <Hobby />
      <Contacts />
      <Skills /> */}
    </div>
  );
};

export default App;
