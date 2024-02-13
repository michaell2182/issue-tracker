import React from 'react';
import GrpahCardField from './GrpahCardField';
import { FaCircle } from "react-icons/fa";

const TicketsDashboard = () => {
  return (
    <div className='container'>
      <div className="bg-white border p-4 rounded-2xl relative top-32 h-[24rem] w-[65rem] shadow-md cursor-pointer">
        <div className='flex justify-center gap-4 pr-4 mx-2'>
          <GrpahCardField title="New" icon= {<FaCircle className='text-red-200 animate-pulse'/>}/>
          <GrpahCardField title="In Progress" icon= {<FaCircle className='text-blue-200'/>}/>
          <GrpahCardField title="Completed" icon= {<FaCircle className='text-green-200'/>}/>
        </div>
      </div>
    </div>
  );
};

export default TicketsDashboard;
