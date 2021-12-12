import React from "react";
import { categories } from "../body/resource";

function Select() {
  const item = categories.map((e, i) => (
    <option value={e.name} key={i}>
      {e.name}
    </option>
  ));
  return (
    <select name="" id="allCategories" className="select-menu">
      <option value="null">All Categories</option>
      {item}
    </select>
  );
}

export default Select;
