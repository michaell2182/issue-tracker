import React from 'react';
import Cards from './components/Cards';
import TopBar from './components/TopBar';
const MainScreen = () => {
  return (
    <div className="flex">
      <div className="flex-grow content-none">
        {/* Content goes here */}
      </div>
      <div className='flex-none' style={{ position: 'relative', left: '5rem' ,marginTop:'3rem'}}>
      <TopBar />
      </div>
      <div className="flex-none" style={{ marginTop: '10rem', paddingLeft: '1rem' , position: 'relative', right: '76rem',}} >
     
        <Cards  />
      </div>
    </div>
  );
};

export default MainScreen;
