/* eslint-disable @typescript-eslint/no-unused-vars */
import ApplicationControlPanel from "../features/applications/ApplicationControlPanel";
import ApplicationForm from "../features/applications/ApplicationForm";
import ApplicationsTable from "../features/applications/ApplicationsTable";
import { Application, ApplicationStatus } from "../CustomTypes";
import useApplications from "../hooks/useApplications";
import { useAppSelector } from "../hooks";
import { Modal } from "@gravity-ui/uikit";
import PageHeading from "../ui/PageHeading";

function Applications() {
  const { updateApplication, addApplication: createApplication } =
    useApplications();
  const edittingApplication = useAppSelector(
    (state) => state.applications.editingApplication
  );
  const isCreatingApplication = useAppSelector(
    (state) => state.applications.isCreatingApplication
  );

  function handleUpdateSubmit(data: Application) {
    updateApplication.mutate(data);
  }

  return (
    <>
      <PageHeading>Заявки</PageHeading>

      <div className="flex flex-col gap-8">
        <ApplicationControlPanel />
        <ApplicationsTable />
      </div>

      {edittingApplication && (
        <Modal open={true} disableBodyScrollLock={true}>
          <ApplicationForm
            application={edittingApplication}
            onSubmit={handleUpdateSubmit}
            type="update"
          />
        </Modal>
      )}

      {isCreatingApplication && (
        <Modal open={true} disableBodyScrollLock={true}>
          <ApplicationForm
            onSubmit={(data) => {
              data.status = ApplicationStatus.NEW;
              createApplication.mutate(data);
            }}
            type="create"
          />
        </Modal>
      )}
    </>
  );
}

export default Applications;
