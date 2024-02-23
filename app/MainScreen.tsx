import React from "react";
import Cards from "./components/Cards";
import TopBar from "./components/TopBar";

import TicketsDashboard from "./components/TicketsDashboard";

import "@radix-ui/themes/styles.css";
import RecentCard from "./section/components/RecentCard";
import Showmore from "./section/components/Showmore";

const MainScreen = () => {
  return (
    <div className="flex bg-[#f6f5f8] ">
      <div className="absolute top-[55rem] right-[56rem] ">
        <Showmore />
      </div>
      <div
        className="flex-none"
        style={{ position: "relative", left: "7rem", marginTop: "1rem" }}
      >
        <TopBar />
      </div>
      <div
        className="flex-none"
        style={{
          marginTop: "5rem",
          paddingLeft: "1rem",
          position: "relative",
          right: "76rem",
        }}
      >
        <Cards />

        <div>
          <TicketsDashboard />
          <RecentCard />
        </div>
      </div>
    </div>
  );
};
export default MainScreen;
