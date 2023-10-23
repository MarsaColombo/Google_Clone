// Import dev
import React from "react";
// Router DOM
import { Routes, Route, BrowserRouter } from "react-router-dom";
// Import components
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Results from "./components/Results";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar className="h-1/6 w-full" />
      <BrowserRouter>
        <Routes>
          
           <Route
            path="/search"
            element={<Results />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
