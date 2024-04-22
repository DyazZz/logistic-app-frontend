import { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  changeDisplayHiddenApplications,
  getDevMode,
  getDisplayHidden,
} from "../settings/settingsSlice";
import useApplications from "../../hooks/useApplications";
import { Button } from "@gravity-ui/uikit";
import { ApplicationStatus } from "../../CustomTypes";
import ApplicationFilter from "./ApplicationFilter";

function ApplicationControlPanel() {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useAppDispatch();
  const isDevMode = useAppSelector(getDevMode);
  const isHiddenApplicationsEnable = useAppSelector(getDisplayHidden);
  const { addApplication: createApplication } = useApplications(setShowForm);

  return (
    <>
      <div className="flex gap-6">
        {isDevMode && (
          <Button view="outlined-info" onClick={() => setShowForm(!showForm)}>
            Создать заявку
          </Button>
        )}
        <Button
          className={
            isHiddenApplicationsEnable
              ? "bg-blue-500 text-slate-50 hover:text-white"
              : ""
          }
          view="outlined-info"
          onClick={() => {
            dispatch(changeDisplayHiddenApplications());
          }}
        >
          Скрыть завершенные
        </Button>
        <ApplicationFilter />
      </div>
      {showForm && (
        <ApplicationForm
          type="create"
          onSubmit={(data) => {
            data.status = ApplicationStatus.NEW;
            createApplication.mutate(data);
          }}
          setIsEdit={setShowForm}
        />
      )}
    </>
  );
}

export default ApplicationControlPanel;
