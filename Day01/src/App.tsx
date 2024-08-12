import "./App.css";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <div className="page">
      <TestimonialCard />
      <TestimonialCard />
      <div className="hide">
        <TestimonialCard />
      </div>
    </div>
  );
}

export default App;
