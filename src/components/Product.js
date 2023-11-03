import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { _id, name, image, price, category } = curElem;
  const sortImg = image.map((currEl) => {
    return currEl.url
  })
  return (
    <NavLink to={`/singleproduct/${_id}`}>
      <div className="card">
        <figure>
          <img src={sortImg} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
