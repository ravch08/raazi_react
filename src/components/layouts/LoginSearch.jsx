import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginSearch = () => {
  const [searchSidebar, setSearchSidebar] = useState(false);

  const openSearchSidebar = () => setSearchSidebar(true);
  const closeSearchSidebar = () => setSearchSidebar(false);

  const searchSidebarClass = searchSidebar ? "sidebar-search open" : "sidebar-search";

  return (
    <React.Fragment>
      <div className="login-link search" onClick={openSearchSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
      </div>
      <div className={searchSidebarClass}>
        <div className="sidebar-head">
          <h2>Search Products</h2>
          <Link to="#!" id="close-sideSearch" className="close" onClick={closeSearchSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </Link>
        </div>

        <div className="sidebar-content search-content">
          <div className="search-category">
            <select name="product_cat" className="search-product-cat">
              <option value="0" defaultValue={"All Catefories"}>
                All Categories
              </option>
              <option className="level-0" value="kids">
                Kids
              </option>
              <option className="level-1" value="coat-kid">
                Coat
              </option>
              <option className="level-1" value="hoodie">
                Hoodie
              </option>
              <option className="level-1" value="knits">
                Knits
              </option>
              <option className="level-1" value="outerwear">
                Outerwear
              </option>
              <option className="level-1" value="shoes-kid">
                Shoes
              </option>
              <option className="level-0" value="mens">
                Mens
              </option>
              <option className="level-1" value="accessories-mens">
                Accessories
              </option>
              <option className="level-1" value="glasses">
                Glasses
              </option>
              <option className="level-1" value="hats">
                Hats
              </option>
              <option className="level-1" value="polo-shirts">
                Polo Shirts
              </option>
              <option className="level-1" value="slippers">
                Slippers
              </option>
              <option className="level-0" value="womens">
                Womens
              </option>
              <option className="level-1" value="bag">
                Bag
              </option>
              <option className="level-1" value="boots">
                Boots
              </option>
              <option className="level-1" value="dresses">
                Dresses
              </option>
              <option className="level-1" value="jeans">
                Jeans
              </option>
              <option className="level-1" value="t-shirts">
                T-Shirts
              </option>
              <option className="level-1" value="tops">
                Tops
              </option>
            </select>
          </div>

          <div className="quick-links">
            <p className="label">Quick Links</p>
            <ul className="search-links">
              <li>
                <Link to="#!" className="underline-hover">
                  Bag with Flap
                </Link>
              </li>
              <li>
                <Link to="#!" className="underline-hover">
                  Travel Large Trifold Wallet
                </Link>
              </li>
              <li>
                <Link to="#!" className="underline-hover">
                  Floral Dress Reserved
                </Link>
              </li>
              <li>
                <Link to="#!" className="underline-hover">
                  Geometric print Scarf
                </Link>
              </li>
              <li>
                <Link to="#!" className="underline-hover">
                  Polarised Sunglasses
                </Link>
              </li>
              <li>
                <Link to="#!" className="underline-hover">
                  Travel Large Trifold Wallet
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginSearch;
