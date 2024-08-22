import { useState } from "react";
import "./App.css";
import RotatingCard from "./components/RotatingCard";

function App() {
  return (
    <div className="whole-page">
      <div className="title">Rotating Card</div>
      <RotatingCard />
    </div>
  );
}

export default App;
