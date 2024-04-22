import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-cols-[20rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="px-16 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
