import LeftSidebar from "../components/Sidebar/LeftSidebar";
import SideBar_Main from "../components/SideBar_Main/SideBar_Main";

const Dashboard = () => {
  return (
    <section className="flex gap-6">
      <div className="fixed">
        <LeftSidebar />
      </div>

      <div className="overflow-y">
        <SideBar_Main />
      </div>
    </section>
  );
};

export default Dashboard;
