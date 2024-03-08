// links
import React from "react";
import { amazone } from "../../images/index";
import { india } from "../../images/index";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxMagnifyingGlass } from "react-icons/rx";
import { SiGooglelens } from "react-icons/si";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-[#131921] text-white px-4 py-1 flex items-center gap-2">
      {/* ------------------image start-------------------- */}
      <div>
        <img
          src={amazone}
          alt="amazone-logo"
          className=" w-[7rem] border border-transparent hover:border-white"
        />
      </div>
      {/* ------------------image end---------------------- */}

      {/* ------------------deliver start---------------------- */}
      <div className="text-white flex items-center px-1 py-1 border border-transparent hover:border-white">
        {/* location logo */}
        <div>
          <p className="text-white text-2xl">
            <IoLocationOutline />
          </p>
        </div>
        {/* delivery location */}
        <div>
          <p className="text-sm">Delivery to Pune</p>
          <p className="font-bold -mt-1">Update Loaction</p>
        </div>
      </div>
      {/* ------------------deliver end------------------------ */}

      {/* ------------------Search Bar start ------------------------ */}
      <div className="flex items-center relative border-[5px] border-transparent ">
        {/* button */}
        <button className="flex items-center px-2 py-2 bg-[#E6E6E6] text-gray-600 rounded-l-md hover:text-black">
          All{" "}
          <span className="text-xl">
            {" "}
            <IoMdArrowDropdown />{" "}
          </span>
        </button>
        <input
          type="text"
          placeholder=" Search Amazon Here..."
          className="py-2 w-[32rem] px-2 outline-none text-black font-semibold"
        />
        <span className="text-[#9FA9AA] absolute right-[4rem]">
          <SiGooglelens />
        </span>
        <button className="px-3 py-2 flex items-center text-2xl bg-[#FEBD69] text-black font-bold rounded-r-md">
          <RxMagnifyingGlass />
        </button>
      </div>
      {/* ------------------Search Bar end-- ------------------------ */}

      {/* ------------------Language start-- ------------------------ */}
      <div className="flex items-center gap-1  px-2 py-2 cursor-pointer border border-transparent hover:border-white">
        {/* flag logo */}
        <img src={india} alt="india flag" className="w-[1.2rem]" />
        <p className="font-bold">IN</p>
        <span className="mt-3 -mx-1 text-[#E6E6E6]">
          <IoMdArrowDropdown />
        </span>
      </div>
      {/* ------------------Language end---- ------------------------ */}

      {/* ------------------Account start---- ------------------------ */}
      <div className="flex items-center  px-2 py-2 cursor-pointer border border-transparent hover:border-white">
        {/*Account Sign in */}
        <div>
          <p className="text-xs">Hello, Sign In</p>
          <p className="font-bold -mt-1">Account & List</p>
        </div>
        <div className="mt-5">
          <span className=" text-[#E6E6E6] ">
            <IoMdArrowDropdown />
          </span>
        </div>
      </div>
      {/* ------------------Account end---- ------------------------ */}

      {/* ------------------Retutn order start---- ------------------------ */}
      <div className=" px-2 py-2 cursor-pointer border border-transparent hover:border-white">
        <p className="text-xs">Returns</p>
        <span className="font-bold">& Orders</span>
      </div>
      {/* ------------------Retutn order End---- ------------------------ */}
      {/* ------------------Cart start---- ------------------------ */}
      <div className="flex items-center relative  px-2 py-2 cursor-pointer border border-transparent hover:border-white">
        <p className="text-md absolute -top-2 left-5 text-lg text-orange-500 font-bold">0</p>
        <button className="text-4xl">
          <BsCart2 />
        </button>
        <span className="font-bold mt-3">Cart</span>
      </div>
      {/* ------------------Cart end------ ------------------------ */}
    </div>
  );
};

export default Navbar;
