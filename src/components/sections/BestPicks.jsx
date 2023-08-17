import React from "react";
import { Link } from "react-router-dom";

import { Best1, Best2 } from "../utils/helper";

const BestPicks = () => {
  return (
    <section id="bestPicks" aria-labelledby="Best Picks of 2021">
      <div className="container">
        <div className="heading">
          <span>NEW COLLECTION</span>
          <h2>Best Picks 2021</h2>
          <p>
            A conscious collection made entirely from food crop waste, recycled cotton, other more
            sustainable materials.
          </p>
        </div>

        <div className="collections">
          <div className="collection-bags">
            <img src={Best1} alt="Bags Collection" />
            <div className="bags-content">
              <h3>Bags Collection</h3>
              <Link to="#!" className="btn btn-blank">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="collection-shirts">
            <img src={Best2} alt="Bags Collection" />
            <div className="shirts-content">
              <h3>
                Printed Men's <br /> Shirt
              </h3>
              <Link to="#!" className="btn-darkBlank">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPicks;
