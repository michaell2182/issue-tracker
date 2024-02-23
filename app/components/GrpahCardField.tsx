import React from "react";

type Props = {
  status: string;
  icon: JSX.Element;
  description: string;
  title: string;
  user: string;
};
const GraphCardField = (props: Props) => {
  const { status, icon, description, title, user } = props;

  return (
    <div className="container">
      <h1 className="font-semibold p-2">{status}</h1>

      <div className="border border-[#f1f1f1] bg-white shadow-md rounded-xl p-4 w-[22rem] h-[7rem] cursor-pointer relative -right-2">
        {icon}
        <div className="relative -top-4 -right-8 w-[15rem] overflow-hidden"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "15rem",
        }}>
          {user}
        </div>
        <h1
          className="font-semibold relative py-1 -top-3"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "15rem",
          }}
        >
          {title}
        </h1>
        <h3
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "15rem",
          }}
        >
          {description}
        </h3>
      </div>
    </div>
  );
};

export default GraphCardField;
