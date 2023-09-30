import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path={"/"} element={<TestComponent />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
