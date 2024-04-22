import Logo from "./Logo";
import NavBar from "./NavBar";

function Sidebar() {
  return (
    <aside className="row-span-full border-r-2 px-4 flex items-center flex-col">
      <Logo />
      <NavBar />
    </aside>
  );
}

export default Sidebar;
