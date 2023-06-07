import React from "react";
import SideBar_Main from "../components/SideBar_Main/SideBar_Main";
import LeftSidebar from "../components/Sidebar/LeftSidebar";

const Dashboard = () => {
  return (
    <div className="md:flex">
      <div className="md:flex-none">
        <LeftSidebar />
      </div>
      <div className="md:grow overflow-auto">
        <SideBar_Main />
      </div>
    </div>
  );
};

export default Dashboard;
