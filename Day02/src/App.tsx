import { useState } from "react";
import "./App.css";
import SubscriptionCard from "./components/SubscriptionCard";
import Toggler from "./components/Toggler";

const CardData = [
  {
    id: 1,
    title: "Starter",
    price: "3.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid magnam, blanditiis ullam assumenda doloribus eveniet reiciendis in necessitatibus laboriosam! Quibusdam rerum, ullam assumenda eius officia a nam quae repellat?",
    type: "month",
  },
  {
    id: 2,
    title: "Premium",
    price: "9.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid magnam, blanditiis ullam assumenda doloribus eveniet reiciendis in necessitatibus laboriosam! Quibusdam rerum, ullam assumenda eius officia a nam quae repellat?",
    type: "month",
  },
  {
    id: 3,
    title: "Professional",
    price: "14.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid magnam, blanditiis ullam assumenda doloribus eveniet reiciendis in necessitatibus laboriosam! Quibusdam rerum, ullam assumenda eius officia a nam quae repellat?",
    type: "month",
  },
  {
    id: 4,
    title: "Basic",
    price: "44.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid magnam, blanditiis ullam assumenda doloribus eveniet reiciendis in necessitatibus laboriosam! Quibusdam rerum, ullam assumenda eius officia a nam quae repellat?",
    type: "year",
  },
  {
    id: 5,
    title: "Deluxe",
    price: "109.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid magnam, blanditiis ullam assumenda doloribus eveniet reiciendis in necessitatibus laboriosam! Quibusdam rerum, ullam assumenda eius officia a nam quae repellat?",
    type: "year",
  },
  {
    id: 6,
    title: "Ultimate",
    price: "149.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid magnam, blanditiis ullam assumenda doloribus eveniet reiciendis in necessitatibus laboriosam! Quibusdam rerum, ullam assumenda eius officia a nam quae repellat?",
    type: "year",
  },
];

function App() {
  const [chosenType, setChosenType] = useState("month");

  const handleToggleChange = (value: any) => {
    setChosenType(value ? "year" : "month");
    console.log(value);
  };
  return (
    <div>
      <div className="page-title">Choose Your Plan</div>
      <div className="toggler">
        <Toggler onToggleChange={handleToggleChange} />
      </div>
      <div className="cards">
        {CardData.filter(
          (Card) => Card.type == (chosenType == "month" ? "month" : "year")
        ).map((Card) => (
          <SubscriptionCard
            name={Card.title}
            price={Card.price}
            desc={Card.description}
            type={Card.type}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
