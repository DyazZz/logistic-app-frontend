import { useAppDispatch, useAppSelector } from "../../hooks";
import { getDevMode } from "../settings/settingsSlice";
import { Button } from "@gravity-ui/uikit";
import ApplicationSort from "../search/ApplicationSort";
import { setIsCreatingApplication } from "./applicationSlice";

function ApplicationControlPanel() {
  const dispatch = useAppDispatch();
  const isDevMode = useAppSelector(getDevMode);

  return (
    <>
      <div className="flex gap-6">
        <ApplicationSort />
        {isDevMode && (
          <Button
            view="outlined-info"
            onClick={() => dispatch(setIsCreatingApplication(true))}
          >
            Создать заявку
          </Button>
        )}
      </div>
    </>
  );
}

export default ApplicationControlPanel;
