import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LogoDark, SocialIcons } from "../utils/helper";

const Navbar = () => {
  const [sticky, setSticky] = useState("");

  const makeSticky = () => {
    const stickyClass = window.scrollY >= 100 ? "stickyTop" : "";
    setSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", makeSticky);
    return () => window.removeEventListener("scroll", makeSticky);
  }, []);

  let stickyTop = `${sticky} navbar`;

  return (
    <div className={stickyTop}>
      <div className="container">
        <nav className="navbar-wrapper">
          <Link to="/" className="nav-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84.032"
              height="23.52"
              viewBox="0 0 84.032 23.52"
            >
              <path
                d="M2.336-21.344V0H7.264V-8.416L13.024,0H19.04L12.48-8.736a6.716,6.716,0,0,0,2.976-1.632A5.839,5.839,0,0,0,17.12-14.72a6.435,6.435,0,0,0-1.856-4.768,7.635,7.635,0,0,0-5.44-1.856ZM7.264-17.5H8.416a4.815,4.815,0,0,1,2.72.672,2.59,2.59,0,0,1,.992,2.176,2.873,2.873,0,0,1-.8,2.08,4.053,4.053,0,0,1-2.944.928H7.264ZM31.84-12.672a5.354,5.354,0,0,0-4.48-2.08A6.881,6.881,0,0,0,22.4-12.8a8.127,8.127,0,0,0-2.208,5.76A7.552,7.552,0,0,0,22.272-1.7,6.764,6.764,0,0,0,27.616.48,4.756,4.756,0,0,0,31.84-1.728V0h4.608V-14.272H31.84Zm-3.328,1.888a3.856,3.856,0,0,1,2.56.992,3.619,3.619,0,0,1,1.056,2.624,3.625,3.625,0,0,1-1.12,2.688,3.413,3.413,0,0,1-2.4.992,3.785,3.785,0,0,1-2.72-1.12,3.681,3.681,0,0,1-.96-2.56A3.566,3.566,0,0,1,25.984-9.76,3.633,3.633,0,0,1,28.512-10.784Zm25.312-3.488H39.744v3.84h6.3L38.624,0h14.56V-3.84H46.432Zm15.968,0H55.712v3.84h6.3L54.592,0h14.56V-3.84H62.4Zm2.5,0V0H76.9V-14.272Zm-.384-6.08a2.663,2.663,0,0,0,2.688,2.688,2.663,2.663,0,0,0,2.688-2.688,2.663,2.663,0,0,0-2.688-2.688A2.663,2.663,0,0,0,71.9-20.352ZM80.544-2.9A2.88,2.88,0,0,0,83.456.01,2.88,2.88,0,0,0,86.368-2.9a2.88,2.88,0,0,0-2.912-2.91A2.88,2.88,0,0,0,80.544-2.9Z"
                transform="translate(-2.336 23.04)"
              ></path>
            </svg>
          </Link>

          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogPage" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 320 512">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                </svg>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Boots
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Bags
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Dresses
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Tunic
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    T-Shirts
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="nav-right">
            <div className="login">
              <div className="login-link search">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>

                <div className="sidebar-search">
                  <div className="sidebar-head">
                    <h2>Search Products</h2>
                    <Link to="#!" id="close-sideSearch" className="close">
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
              </div>

              <div className="login-link user">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                </svg>

                <div className="sidebar-login">
                  <div className="sidebar-head">
                    <h2>Sign In</h2>
                    <Link to="#!" id="close-sideLogin" className="close">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                      </svg>
                    </Link>
                  </div>

                  <div className="login-content">
                    <form action="#!" method="post">
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="input-username"
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-password"
                      />

                      <span className="input-eye">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 576 512">
                          <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
                        </svg>
                      </span>

                      <div className="form-row">
                        <div className="checkbox">
                          <input type="checkbox" name="rememberme" className="input-checkbox" />
                          <span className="checkbox-label">Remember me</span>
                        </div>
                        <span>Lost your password?</span>
                      </div>

                      <button type="submit" className="btn-submit">
                        Sign in
                      </button>
                      <button className="btn-outline">Create An Account</button>

                      <button className="btn-facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
                          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                        <span>Continue with Facebook</span>
                      </button>
                      <button className="btn-google">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 488 512">
                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        <span>Continue with Google</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="login-link heart">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
                  <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                </svg>
              </div>

              <div className="login-link cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
                  <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" />
                </svg>

                <div className="sidebar-cart">
                  <div className="sidebar-head">
                    <h2>Your Cart (0)</h2>
                    <Link to="#!" id="close-sideCart" className="close">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                      </svg>
                    </Link>
                  </div>

                  <div className="cart-content">
                    <span>
                      Your Cart is Empty
                      <svg
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4 16.4C16.4 16.4 14.75 14.2 12 14.2C9.25 14.2 7.6 16.4 7.6 16.4M8.7 8.7H8.711M15.3 8.7H15.311M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
                          stroke="#111111"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>

                    <button className="btn-outline">Continue Shopping</button>
                  </div>
                </div>
              </div>
            </div>

            <span className="nav-divider"></span>

            <div className="hamburger-menu">
              <div className="line"></div>
            </div>
          </div>
        </nav>

        <div className="overlay"></div>

        <div className="sidebar-navigation">
          <div className="sidebar-head">
            <Link to="/">
              <img src={LogoDark} alt="logo" />
            </Link>
            <Link to="#!" id="close-sideNavbar" className="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </Link>
          </div>

          <ul className="sidebar-nav">
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 320 512">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                </svg>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Boots
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Bags
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Dresses
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    Tunic
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="#!" className="dropdown-link">
                    T-Shirts
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>

          <SocialIcons fillColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
