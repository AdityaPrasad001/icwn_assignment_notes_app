import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/head/Navbar";

const RootPage = () => {
  return <div>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
  </div>;
};

export default RootPage;
