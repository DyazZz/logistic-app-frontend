import { Button } from "@gravity-ui/uikit";
import SearchBar from "../features/search/SearchBar";
import { changeDevMode, getDevMode } from "../features/settings/settingsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import ApplicationFilter from "../features/search/ApplicationFilter";
import { useState } from "react";

function Header() {
  const dispatch = useAppDispatch();
  const isDevMode = useAppSelector(getDevMode);
  const [filter, setFilter] = useState("");

  return (
    <header className="py-4 px-16 border-b-2 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <ApplicationFilter setFilter={setFilter} />
        <SearchBar filter={filter} />
      </div>
      <Button
        className={
          isDevMode ? "bg-blue-500 text-slate-50 hover:text-white" : ""
        }
        view="outlined-info"
        onClick={() => dispatch(changeDevMode())}
      >
        Редактирование
      </Button>
    </header>
  );
}

export default Header;
