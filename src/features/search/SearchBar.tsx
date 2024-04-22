import { useAppDispatch } from "../../hooks";
import { setSearchQuery } from "./searchSlice";
import { useState } from "react";

function SearchBar() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  return (
    <form
      className="flex gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setSearchQuery(value));
      }}
    >
      <input
        placeholder="Поиск..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-2 px-4 rounded-full w-48 border-slate-300 border-2 focus:w-72 transition-all duration-500 outline-none"
      />
    </form>
  );
}

export default SearchBar;
