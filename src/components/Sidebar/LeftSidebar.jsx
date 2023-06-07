import React from "react";
import { Sidebar } from "flowbite-react";
import { MdDashboard } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { VscWordWrap } from "react-icons/vsc";
import { AiOutlineFileWord } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { TiSortAlphabetically } from "react-icons/ti";

const LeftSidebar = () => {
  return (
    <div>
      <Sidebar aria-label="sidebar" className="h-[100vh]">
        <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
          <p className="text-red-300">Scriptly</p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={MdDashboard}>
              <p>Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Collapse label="Tools" icon={BsTools}>
              <Sidebar.Item href="#" icon={AiOutlineFileWord}>
                Article Outline
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={TfiWrite}>
                Article Ideas
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={VscWordWrap}>
                Grammar Check
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={TiSortAlphabetically}>
                Phrase Rewrite
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" label="Beta" labelColor="dark">
              <p>Help</p>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <p>Contact</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default LeftSidebar;
