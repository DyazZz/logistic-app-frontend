import ApplicationControlPanel from "../features/applications/ApplicationControlPanel";
import ApplicationTable from "../features/applications/ApplicationTable";

function Applications() {
  return (
    <>
      <h1 className="text-3xl font-semibold py-5">Заявки</h1>
      <div className="flex flex-col gap-8">
        <ApplicationControlPanel />
        <ApplicationTable />
      </div>
    </>
  );
}

export default Applications;
