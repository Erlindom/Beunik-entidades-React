import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import Form from "./components/Form/Form";
import Tutorial from "./components/Tutorial/Tutorial";
import HomePage from "./pages/homePage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="form" element={<Form />} />
            <Route path="tutorials" element={<Tutorial />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
