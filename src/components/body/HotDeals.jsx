import React from "react";
import { products } from "./resource";

function HotDeals() {
  const item = products.map((e, i) => (
    <div className="products" key={i}>
      <span className="like-btn">{e.like}</span>
      <img src={e.src} alt="product" className="preview"/>
      <span className="product-name">{e.name}</span>
      <span className="product-brand">{e.company}</span>
      <div className="ratings">
        <span className="ratings-star">{e.rating}</span>
        <span className="reviews">{e.reviews}</span>
      </div>
      <div className="pricing">
        <span className="actual">N{e.price}</span>
        <span className="strike-fake">N{e.save}</span>
      </div>
    </div>
  ));
  return (
    <div className="hot-deals">
      <h2 className="deals-heading">Hot deals</h2>
      {item}
      {/* <AiOutlineShoppingCart/>
            <BiBell/>
            <IoIosArrowDown/>
            <RiPercentFill/>
            <BiHelpCircle/>
            <FiLogOut/> */}
    </div>
  );
}

export default HotDeals;
