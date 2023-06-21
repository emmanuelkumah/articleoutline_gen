import { useState } from "react";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <section className="gap-6">
      <div className="fixed z-20">
        <LeftSidebar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
      </div>

      <div className="overflow-y">
        <div
          className={`relative top-8 ${
            openSidebar ? "md:ml-[20%]" : "ml-[10%]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
