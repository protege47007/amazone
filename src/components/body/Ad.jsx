import React from 'react';
import { shipping } from './resource';

function Ad() {
    return (
        <div className="advert">
            <div className="ad-text">
                <h2 className="ad-heading">Free Delivery</h2>
                <p className="ad-desc">Don't miss out! Only today, get free Next Day delivery on all orders.</p>
                <button className="ad-btn">Browse products</button>
            </div>
            <img className="ad-img" src={shipping} alt="free shipping"/>
        </div>
    )
}

export default Ad
