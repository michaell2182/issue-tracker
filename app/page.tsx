import MainScreen from "./MainScreen";
import '@radix-ui/themes/styles.css';


import { Theme } from "@radix-ui/themes";
import NewSidebar from "./section/components/Sidebar";

export default function Home() {
  return (
   <div>
     <Theme>
     <div className="flex bg-[#f6f5f8]">
      
       <NewSidebar />
          <MainScreen />
        </div>
        </Theme>
   </div>
  );
}
