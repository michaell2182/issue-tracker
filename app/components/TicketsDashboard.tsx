import React from "react";
import GrpahCardField from "./GrpahCardField";
import { FaCircle } from "react-icons/fa";

const TicketsDashboard = () => {
  return (
    <div className="container">
      <div className="bg-white p-4 rounded-3xl relative top-[9rem] h-[27.5rem] w-[100rem] right-8 shadow-md">
        <div className="flex justify-center gap-2 right-6 pr-4 mx-2">
          <GrpahCardField
       
            status="New"
            icon={<FaCircle className="text-red-200" />}
            user="Nicolie.Spencer@moe.gov.tttttttttttttttttttttttttttttttttttt"
            title="Tickets created in the last 24 hours"
            description="Tickets created in the last 24 hoursfdgdfhgdfhfdhfdhfghfddhfdghdfgdgdfgdfgdfgdffgRRRRRRRRRRRRRRRRRRR"
          />
          <GrpahCardField
            status="In Progress"
            icon={<FaCircle className="text-blue-200" />}
            user="Michael.Lewis@moe.gov.tt"
            title="Tickets created in the last 24 hours"
            description="Tickets created in the last 24 hours"
          />
          <GrpahCardField
            status="Completed"
            icon={<FaCircle className="text-green-200" />}
            user="Jeremy.Alexander@moe.gov.tt"
            title="Tickets created in the last 24 hours"
            description="Tickets created in the last 24 hours"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketsDashboard;
