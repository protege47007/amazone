import React, {useState} from "react";
import { products, star, like, liked } from "./resource";

function HotDeals() {

  function printStars(length){
    let stars = [];
    for(let i = 0; i <= length; i++) {
      stars.push(<img src={star} alt="" className={isGrid?"stars-grid":"stars-list"}/>)
    }
    return stars.map(e => e);
  }

  const[isGrid, setStyle] = useState(true);
  function changeDealsStyle(){
    !isGrid? setStyle(true) : setStyle(false);
  }


  const item = products.map((e, i) => (
    
    <div className={isGrid?"products-grid":"products-list"} key={i}>
      <span className={isGrid?"like-btn-grid":"like-btn-list"}><img src={e.like? like : liked} alt='' className={isGrid?"like-btn-grid":"like-btn-list"}/></span>
      <img src={e.src} alt="product" className={isGrid?"preview-grid":"preview-list"}/>
      <div className={isGrid?"":"details-list"}>
      <span className={isGrid?"product-name-grid":"product-name-list"}>{e.name}</span>
      <span className={isGrid?"product-brand-grid":"product-brand-list"}>{e.company}</span>
      <div className={isGrid?"ratings-grid":"ratings-list"}>
        <span className={isGrid?"ratings-star-grid":"ratings-star-list"}>{printStars(e.rating)}</span>
        <span className={isGrid?"reviews-grid":"reviews-list"}>{`(${e.reviews})`}</span>
      </div>
      <div className={isGrid?"pricing-grid":"pricing-list"}>
        <span className={isGrid?"actual-grid":"actual-list"}>&#x20A6;{e.price}</span>
        <span className={isGrid?"strike-fake-grid":"strike-fake-list"}>&#x20A6;{e.save}</span>
      </div>
      </div>
    </div>
  ));
  return (
    <div className="hot-deals">
      <h2 className="deals-heading">Hot deals</h2>
      <span className="grid-list" onClick={changeDealsStyle}>{'{{}}'}</span>
      <div className={isGrid?"deal-section-grid":"deal-section-list"}>{item}</div>
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
