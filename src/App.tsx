import React from "react";
import "styles/globals.scss";
import Router from "router/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "hooks";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
