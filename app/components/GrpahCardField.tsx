import React from "react";

type Props = {
  status: string;
  icon: JSX.Element;
  description: string;
  title: string;
}
const GraphCardField = (props: Props) => {
  const { status, icon,description,title } = props;

  return (
    <div className="container">
      <h1 className="font-semibold p-2">{status}</h1>

      <div className="border bg-white shadow-sm rounded-xl p-4 w-[19rem] h-[8rem]">
        {icon}
        <h1 className="font-semibold relative py-1" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {title}
        </h1>
        <h3 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal" }}>
          {description}
        </h3>
      </div>
    </div>
  );
};

export default GraphCardField;
