import { Metadata } from "next";
import React from "react";
import { signOut } from "../../../auth";

export const metadata: Metadata = {
  title: "Současné výsledky | Friendly Betting",
};
const Dashboard = () => {
  return (
    <main className="flex justify-center">
      <h1>Současné výsledky</h1>
      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
    </main>
  );
};

export default Dashboard;
