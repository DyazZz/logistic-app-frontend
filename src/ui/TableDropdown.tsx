import { DropdownMenu } from "@gravity-ui/uikit";
import useApplications from "../hooks/useApplications";
import { Application, ApplicationStatus } from "../CustomTypes";

type DropdownProps = {
  application: Application;
  editHandle: React.Dispatch<React.SetStateAction<boolean>>;
};

function TableDropdown({ application, editHandle }: DropdownProps) {
  const { updateApplication, deleteApplication } = useApplications();

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
          action: () => editHandle(true),
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
