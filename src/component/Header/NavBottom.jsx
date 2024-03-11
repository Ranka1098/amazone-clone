import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
const NavBottom = () => {
  return (
    <div className="bg-[#232F3E] text-white text-lg px-3  flex item-center font-semibold gap-2 ">
      <ul className="flex items-center">
        <li className="headerHover "><span className="text-lg"><GiHamburgerMenu /></span><span className="-ml-5">All</span></li>
        <li className="headerHover">Fresh</li>
        <li className="headerHover">Amazon MiniTV</li>
        <li className="headerHover">Sells</li>
        <li className="headerHover">Best Sellrs</li>
        <li className="headerHover">Mobiles</li>
        <li className="headerHover">Today's Deals</li>
        <li className="headerHover">Electronics</li>
        <li className="headerHover">Prime <span className="text-[#A7ACB2] -ml-2 "><IoMdArrowDropdown /></span> </li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">New Release</li>
        <li className="headerHover">New Launces From Mobiles, Electronics &  more | Shop Now</li>
      </ul>
    </div>
  );
};

export default NavBottom;
