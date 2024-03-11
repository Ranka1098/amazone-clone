import React from "react";
const FooterMiddleList = ({ title, listItem }) => {
  return (
    <div className="mb-[1rem]">
      <h1 className="text-sm font-bold my-[1rem]">{title}</h1>
      {listItem.map((data) =>
        data.listData.map((item) => (
          <ul key={item.id}>
            <li className="text-sm px-1 hover:underline duration-200 ">{item}</li>
          </ul>
        ))
      )}
    </div>
  );
};

export default FooterMiddleList;
