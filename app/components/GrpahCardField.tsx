import React from "react";

const GraphCardField = (props) => {
  const { status, icon,description,title } = props;

  return (
    <div className="container">
      <h1 className="font-semibold p-2">{status}</h1>

      <div className="border bg-white shadow-sm rounded-xl p-4 w-[19rem] h-[8rem]">
        {icon}
        <h1 className="font-semibold p-1"> {title} </h1>
        <h3> {description} </h3>
      </div>
    </div>
  );
};

export default GraphCardField;
