import React from "react";
import { Link } from "react-router-dom";

const BannerItem = (props) => {
  const title = `${props.title1} ${props.title2}`;

  return (
    <div className="banner-item">
      <img src={props.imgSrc} alt={title} />
      <div className="banner-content">
        <h1>
          {props.title1} <span>{props.title2}</span>
        </h1>
        <Link to="#!" type="button" className="btn btn-white">
          {props.btnText}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 448 512">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BannerItem;
