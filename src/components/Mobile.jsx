import React from "react";
import Aside from "./Aside";
import Body from "./Body";
import Like from "./compnent/Like";
import Brand from "./header/Brand";
import Cart from "./header/Cart";
import Noti from "./header/Noti";
import Profile from "./header/Profile";
import Search from "./header/Search";

function Mobile() {
  return (
    <div className="mobile">
      <header>
        <Aside />
        <Brand />
        <Like />
        <Cart />
        <Noti />
        <Profile />
        <Search />
      </header>
      <Body />
    </div>
  );
}

export default Mobile;
