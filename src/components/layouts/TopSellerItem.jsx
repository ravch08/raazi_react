import React from "react";
import { Link } from "react-router-dom";

const TopSellerItem = (props) => {
  const cardRed = props.priceRed ? "card-red" : "d-none";
  const cardPrice = props.price ? "card-price" : "d-none";
  const cardCross = props.priceCrossed ? "card-cross" : "d-none";

  return (
    <div className="seller-item">
      <figure>
        <img src={props.imgSrc1} alt={props.title} className="hide" />
        <img src={props.imgSrc11} alt={props.title} />
        <span className="badge badge-dark">{props.badgeText}</span>

        <div className="cart-items">
          <Link to="#!" className="bag">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 448 512">
              <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" />
            </svg>
          </Link>
          <Link to="#!" className="eye">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 576 512">
              <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
            </svg>
          </Link>
          <Link to="#!" className="heart">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 512 512">
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
          </Link>
        </div>
      </figure>

      <div className="card-content">
        <span className="category">{props.category}</span>
        <h3>{props.title}</h3>
        <div className="d-flex gap-1">
          <span className={cardCross}>{props.priceCrossed ? `$${props.priceCrossed}` : ""}</span>
          <span className={cardRed}>{props.priceRed ? `$${props.priceRed}` : ""}</span>
          <span className={cardPrice}>{props.price ? `$${props.price}` : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default TopSellerItem;
