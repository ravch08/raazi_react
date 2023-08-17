import React from "react";
import { Link } from "react-router-dom";

import { Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7 } from "../utils/helper";

const Brands = () => {
  return (
    <section id="brands" aria-labelledby="Brands">
      <div className="container">
        <div className="brands-wrapper">
          <Link to="#!">
            <img src={Brand1} alt="Mang" />
          </Link>
          <Link to="#!">
            <img src={Brand2} alt="Zar" />
          </Link>
          <Link to="#!">
            <img src={Brand3} alt="Reebo" />
          </Link>
          <Link to="#!">
            <img src={Brand4} alt="aso" />
          </Link>
          <Link to="#!">
            <img src={Brand5} alt="stradivar" />
          </Link>
          <Link to="#!">
            <img src={Brand6} alt="adida" />
          </Link>
          <Link to="#!">
            <img src={Brand7} alt="bersh" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brands;
