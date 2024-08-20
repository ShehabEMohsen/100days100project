import { useState } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";

function App() {
  return (
    <div className="whole-page">
      <div className="card">
        <QuoteCard />
      </div>
    </div>
  );
}

export default App;
