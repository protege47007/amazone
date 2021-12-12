import React from 'react';
import {categories} from './resource.jsx'


function PopCate() {
    const item = categories.map((e, i) => (
        <div className="categ-bg" key={i}>
            <img src={e.src} alt={e.name} />
            <span className="hint">{e.name}</span>
        </div>
    ));
    return (
        <div className="pop-categ">
            <h2 className="categ-heading">Popular Categories</h2>
            <div className="categ-item">{item}</div>
        </div>
    )
}

export default PopCate;