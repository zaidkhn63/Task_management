import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <Sidebar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
