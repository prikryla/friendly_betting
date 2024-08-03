import { Metadata } from "next";
import React from "react";
import NavigationMenu from "../components/NavigationMenu/navigationmenu";

export const metadata: Metadata = {
  title: "Současné výsledky | Friendly Betting",
};
const Dashboard = () => {
  return (
    <main className="flex justify-center">
      <div>
        <NavigationMenu />
      </div>

    </main>
  );
};

export default Dashboard;
