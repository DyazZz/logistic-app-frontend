import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
};

function NavigationLink({ to, children }: Props) {
  return (
    <NavLink
      className="navlink flex items-center gap-3 text-lg w-56 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-300 visited:bg-gray-100"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
