import { DropdownMenu } from "@gravity-ui/uikit";
import useApplications from "../hooks/useApplications";
import { Application, ApplicationStatus } from "../CustomTypes";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setEditingApplication } from "../features/applications/applicationSlice";
import { getDevMode } from "../features/settings/settingsSlice";

type DropdownProps = {
  application: Application;
};

function TableDropdown({ application }: DropdownProps) {
  const { updateApplication, deleteApplication } = useApplications();
  const dispatch = useAppDispatch();
  const isEditing = useAppSelector(getDevMode);

  if (!isEditing) return;

  return (
    <DropdownMenu
      items={[
        {
          text: "Статус",
          items: [
            {
              action: () =>
                updateApplication.mutate({
                  ...application,
                  status: ApplicationStatus.IN_PROGRESS,
                }),
              text: "В работе",
            },
            {
              action: () =>
                updateApplication.mutate({
                  ...application,
                  status: ApplicationStatus.COMPLETED,
                }),
              text: "Завершено",
            },
          ],
        },
        {
          action: () => dispatch(setEditingApplication(application)),
          text: "Редактировать",
        },
        {
          text: "Удалить?",
          theme: "danger",
          items: [
            {
              action: () => deleteApplication.mutate(application.id),
              text: "Удалить",
              theme: "danger",
            },
          ],
        },
      ]}
    />
  );
}

export default TableDropdown;
