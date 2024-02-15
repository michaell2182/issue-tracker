import MainScreen from "./MainScreen";

import Sidebar from "./Sidebar";

export default function Home() {
  return (
   <div>
     <div className="flex">
          <Sidebar />
          <MainScreen />
        </div>
   </div>
  );
}
