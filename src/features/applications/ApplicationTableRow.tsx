import { useState } from "react";
import TableDropdown from "../../ui/TableDropdown";
import ApplicationForm from "./ApplicationForm";
import { useAppSelector } from "../../hooks";
import useApplications from "../../hooks/useApplications";
import { Application } from "../../CustomTypes";
import RowItem from "./ApplicationTableItem";
import { Button } from "@gravity-ui/uikit";
import { formatDate, formatStatus } from "../../services/helpers";
import { getDevMode } from "../settings/settingsSlice";

type RowProps = {
  application: Application;
  index?: number;
};

const ApplicationTableRow = ({ application }: RowProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const isDevMode = useAppSelector(getDevMode);
  const { updateApplication } = useApplications(setIsEdit);

  function handleSubmit(data: Application) {
    updateApplication.mutate(data);
  }

  return (
    <>
      <tr
        className={`${
          isEdit && "bg-slate-300"
        }   grid gap-4 grid-cols-[0.5fr_2fr_0.8fr_1.2fr_1.2fr_4fr_1.3fr_2fr_0.6fr]
            border-b-2 items-center transition-colors duration-500`}
      >
        <RowItem data={application.applicationUID} center={true} />
        <RowItem data={formatDate(application.date)} />
        <RowItem data={application.companyName} />
        <RowItem data={application.driverName} />
        <RowItem data={application.driverPhone} />
        <RowItem data={application.comment} />
        <RowItem data={formatStatus(application.status)} />
        <RowItem center={true}>
          <Button
            href={`https://ati.su/firms/${application.ATI}/info`}
            target="_blank"
            view="outlined-utility"
          >
            {application.ATI}
          </Button>
        </RowItem>
        {isDevMode && (
          <RowItem>
            <TableDropdown editHandle={setIsEdit} application={application} />
          </RowItem>
        )}
      </tr>
      {isEdit && (
        <tr>
          <td>
            <ApplicationForm
              application={application}
              onSubmit={handleSubmit}
              setIsEdit={setIsEdit}
              type="update"
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default ApplicationTableRow;
