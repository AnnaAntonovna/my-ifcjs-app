import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuildingViewer } from "./components/building/BuildingViewer";
import { LoginForm } from "./components/user/LoginForm";
import { LoginPage } from "./components/user/LoginPage";
import { MapViewer } from "./components/map/MapViewer";
import { ContextProvider } from "./middleware/ContextProvider";
import { Login } from "./components/user/Login";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/building" element={<BuildingViewer />} />
          <Route path="/map" element={<MapViewer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/advancedLogin" element={<LoginPage />}/>
          <Route path="/my-login" element={< Login />}/>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
