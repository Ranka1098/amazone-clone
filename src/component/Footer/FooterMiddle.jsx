import React from "react";
import FooterMiddleList from "./FooterMiddleList";
import { FooterMiddleData } from "../../util/Data";
import { amazone } from "../../images/index";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
const FooterMiddle = () => {
  return (
    <div>
      {/* top section */}
      <div>
        <p className="text-center w-full bg-[#37475A] py-[.75rem] text-sm text-white font-semibold">
          <Link to="/">Back To Top</Link>
        </p>
      </div>
      {/* middle section */}
      <div className="bg-[#232F3E] text-white grid grid-cols-4 px-[10rem] py-[3rem] border-b-[1px] cursor-pointer">
        {FooterMiddleData.map((item) => (
          <FooterMiddleList
            key={item.id}
            title={item.title}
            listItem={item.listItems}
          />
        ))}
      </div>

      {/* last section */}
      <div className="w-full bg-[#232F3E] flex items-center justify-center  -mt-1 border border-gray-600 ">
        <div className="flex items-center gap-[4rem] py-[1rem] text-white ">
          <img src={amazone} alt="" className="" />
          <button className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-sm">
            {" "}
            <GrLanguage /> <span>English</span>
          </button>
        </div>
      </div>

      {/* copy right Section */}
      <div className="bg-[#131A22] text-white text-center py-[1.5rem]">
        <p className="text-xs">
          Conditions of Use & Sale Privacy Notice Interest-Based Ads
        </p>
        <p className="text-xs">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default FooterMiddle;
