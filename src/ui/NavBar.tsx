import NavigationLink from "./NavLink";
import { Briefcase } from "@gravity-ui/icons";
import { Car } from "@gravity-ui/icons";
import { Book } from "@gravity-ui/icons";
import { Gear } from "@gravity-ui/icons";

function NavBar() {
  return (
    <nav className="sticky top-12 flex flex-col justify-center items-center gap-4">
      <NavigationLink to="/applications">
        <Book />
        <p>Заявки</p>
      </NavigationLink>
      <NavigationLink to="/companies">
        <Briefcase />
        <p>Компании</p>
      </NavigationLink>
      <NavigationLink to="/drivers">
        <Car />
        <p>Перевозчики</p>
      </NavigationLink>
      <NavigationLink to="/settings">
        <Gear />
        <p>Настройки</p>
      </NavigationLink>
    </nav>
  );
}

export default NavBar;
