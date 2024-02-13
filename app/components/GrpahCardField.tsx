import React from 'react';

const GraphCardField = (props) => {
  const { title,icon } = props;
  
  return (
    <div className='container'>
      <h1 className='font-semibold p-2'>
        {title}
      </h1>
    
      <div className='border bg-white shadow-sm rounded-xl p-4 w-[19rem] h-[8rem]'>
      {icon}
    backend info
      </div>
    </div>
  );
};

export default GraphCardField;
