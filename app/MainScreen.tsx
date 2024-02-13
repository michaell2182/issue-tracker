import React from 'react';
import Cards from './components/Cards';
import TopBar from './components/TopBar';
import GraphCard from './components/GraphCard';
import TicketsDashboard from './components/TicketsDashboard';
import Calendar from './components/CalendarCard';
const MainScreen = () => {
  return (
    <div className="flex">
      <div className="flex-grow content-none">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Content goes here */}
      </div>
      <div className='flex-none' style={{ position: 'relative', left: '5rem' ,marginTop:'3rem'}}>
      <TopBar />
      </div>
      <div className="flex-none" style={{ marginTop: '10rem', paddingLeft: '1rem' , position: 'relative', right: '76rem',}} >
        <Cards  />
       <GraphCard/>
       <TicketsDashboard/>
       <Calendar/>
      </div>
      
    </div>
  );
};
export default MainScreen;