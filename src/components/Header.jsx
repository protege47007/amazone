import React from "react";
import Like from "./compnent/Like";
import Brand from "./header/Brand";
import Cart from "./header/Cart";
import Noti from "./header/Noti";
import Profile from "./header/Profile";
import Search from "./header/Search";

function Header() {
  return <header>
      <Brand/>
      <Search/>
      <Like/>
      <Cart/>
      <Noti/>
      <Profile/>
  </header>;
}

export default Header;
