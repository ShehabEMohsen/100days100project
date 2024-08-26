import React, { useState } from "react";
import "./PriceCard.css";
import LeftArrow from "../assets/Vector.svg";
import More from "../assets/tabler_dots.svg";
import Product from "../assets/Jacket.png";
import Share from "../assets/bx_share.svg";
import Cart from "../assets/mdi_cart-outline.svg";
import Star from "../assets/material-symbols_star.svg";
import Done from "../assets/ic_round-done-outline.svg";

export default function PriceCard() {
  const [isAdded, setIsAdded] = useState(false);
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="product-card">
      <div className="top-area">
        <div className="arrow-button">
          <img src={LeftArrow} />
        </div>
        <div className="card-title"> Product Details </div>
        <div className="more-info">
          <img src={More} />
        </div>
      </div>
      <div className="images-slider">
        <img src={Product} className="product-img" />
      </div>
      <div className="product-details">
        <div className="product-name"> Product Name</div>
        <div className="interact-buttons">
          <div className="share-button">
            <img src={Share} />
          </div>

          <div
            className={`${isAdded ? "save-button" : "done-button"}`}
            onClick={() => {
              setIsAdded(!isAdded);
            }}
          >
            {/* <img src={Cart} /> */}
          </div>
        </div>
      </div>
      <div className="price-reviews">
        <div className="price">$50.00</div>
        <div className="reviews">
          <img src={Star} /> 4.9 (324 reviews)
        </div>
      </div>
    </div>
  );
}
