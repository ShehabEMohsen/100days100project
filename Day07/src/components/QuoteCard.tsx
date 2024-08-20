import React, { useEffect, useState } from "react";
import "./QuoteCard.css";
import axios from "axios";

export default function QuoteCard() {
  const [quoteData, setQuoteData] = useState({
    content: "",
    author: "",
  });

  const [isAnimate, setIsAnimate] = useState(false);

  const getQuote = () => {
    setIsAnimate(false);
    axios.get("https://api.quotable.io/random").then((response) => {
      const { content, author } = response.data;
      setQuoteData({ content, author });
    });
    setTimeout(() => setIsAnimate(true), 20);
  };

  useEffect(() => {
    getQuote();
  }, []);
  console.log(quoteData);
  return (
    <div className="container">
      <div className={`author ${isAnimate ? "animation" : ""}`}>
        -{quoteData.author || "Generating Name"}
      </div>
      <div className={`quote ${isAnimate ? "animation" : ""}`}>
        <span className="quotation">"</span>
        {quoteData.content || "Generating Quote"}
        <span className="quotation">"</span>
      </div>
      <div className="buttons-area">
        <div className="copy-button">
          <button
            onClick={() => navigator.clipboard.writeText(quoteData.content)}
          >
            Copy
          </button>
        </div>
        <div className="generate-button">
          <button onClick={getQuote}>Generate Quote</button>
        </div>
      </div>
    </div>
  );
}
