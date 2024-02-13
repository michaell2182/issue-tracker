import React from "react";
import GrpahCardField from "./GrpahCardField";
import { FaCircle } from "react-icons/fa";

const TicketsDashboard = () => {
  return (
    <div className="container">
      <div className="bg-white border p-4 rounded-2xl relative top-[4rem] h-[27.5rem] w-[65rem] shadow-md cursor-pointer">
        <div className="flex justify-center gap-4 pr-4 mx-2">
          <GrpahCardField
            status="New"
            icon={<FaCircle className="text-red-200 animate-pulse" />}
            title="Tickets created in the last 24 hours"
            description="Tickets created in the last 24 hoursfdgdfhgdfhfdhfdhfghfddhfdghdfgdgdfgdfgdfgdffg"
          />
          <GrpahCardField
            status="In Progress"
            icon={<FaCircle className="text-blue-200" />}
            title="Tickets created in the last 24 hours"
            description="Tickets created in the last 24 hours"
          />
          <GrpahCardField
            status="Completed"
            icon={<FaCircle className="text-green-200" />}
            title="Tickets created in the last 24 hours"
            description="Tickets created in the last 24 hours"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketsDashboard;
