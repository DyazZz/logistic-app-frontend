import { Button } from "@gravity-ui/uikit";
import PageHeading from "../ui/PageHeading";
import { useAppSelector } from "../hooks";
import {
  changeDisplayHiddenApplications,
  getDisplayHidden,
} from "../features/settings/settingsSlice";
import { useDispatch } from "react-redux";

function Settings() {
  const dispatch = useDispatch();
  const isHiddenApplicationsEnable = useAppSelector(getDisplayHidden);
  return (
    <>
      <PageHeading>Настройки</PageHeading>
      <div className="mt-8 flex flex-col gap-4">
        <Button
          className={
            isHiddenApplicationsEnable
              ? "bg-blue-500 text-slate-50 hover:text-white w-fit"
              : "w-fit"
          }
          view="outlined-info"
          onClick={() => {
            dispatch(changeDisplayHiddenApplications());
          }}
        >
          Скрывать завершенные
        </Button>
      </div>
    </>
  );
}

export default Settings;
